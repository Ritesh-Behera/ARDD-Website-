'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { Scope, ScopeLevel, BreadcrumbSegment, AggregatedMetrics, SubUnitPerformance, District, BlockMetrics, Block } from '@/types/ardd';
import { useAuth } from '@/context/AuthContext';
import {
  mockDistricts as initialDistricts,
  aggregateMetricsForScope,
  getSubUnitPerformance,
  getDistrictById,
  getSubdivisionById,
  getBlockById,
  getSubdivisionsForDistrict,
  getBlocksForSubdivision,
} from '@/data/mockData';

interface ScopeContextType {
  currentScope: Scope;
  metrics: AggregatedMetrics;
  subUnits: SubUnitPerformance[];
  breadcrumbs: BreadcrumbSegment[];
  isLockedToBlock: boolean;
  isLockedToSubdivision: boolean;
  availableSubdivisions: { id: string; name: string }[];
  availableBlocks: { id: string; name: string }[];
  setScopeLevel: (level: ScopeLevel, params?: { districtId?: string; subdivisionId?: string; blockId?: string }) => void;
  drillDownToSubdivision: (subdivisionId: string) => void;
  drillDownToBlock: (blockId: string) => void;
  resetToDistrict: () => void;
  updateBlockMetrics: (blockId: string, updatedMetrics: Partial<BlockMetrics>) => void;
}

const ScopeContext = createContext<ScopeContextType | undefined>(undefined);

export const ScopeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const [dataDistricts, setDataDistricts] = useState<District[]>(initialDistricts);

  // Helper to initialize scope strictly based on role
  const getInitialScope = (): Scope => {
    if (currentUser.role === 'BlockHead') {
      return {
        level: 'Block',
        districtId: currentUser.districtId,
        subdivisionId: currentUser.subdivisionId,
        blockId: currentUser.blockId,
      };
    }
    if (currentUser.role === 'SubdivisionHead') {
      return {
        level: 'Subdivision',
        districtId: currentUser.districtId,
        subdivisionId: currentUser.subdivisionId,
      };
    }
    // DistrictHead and MockAdministrator start at District level
    return {
      level: 'District',
      districtId: currentUser.districtId ?? 'dist-west-tripura',
    };
  };

  const [currentScope, setCurrentScope] = useState<Scope>(getInitialScope);

  // Whenever currentUser changes (e.g. role switch), enforce strict bounds
  useEffect(() => {
    setCurrentScope(getInitialScope());
  }, [currentUser]);

  // Role locking rules
  const isLockedToBlock = currentUser.role === 'BlockHead';
  const isLockedToSubdivision = currentUser.role === 'SubdivisionHead';

  // Strict drilldown helpers
  const drillDownToSubdivision = (subdivisionId: string) => {
    if (currentUser.role === 'BlockHead') return; // Not allowed
    if (currentUser.role === 'SubdivisionHead' && currentUser.subdivisionId !== subdivisionId) return; // Strict boundary

    setCurrentScope({
      level: 'Subdivision',
      districtId: currentScope.districtId || currentUser.districtId,
      subdivisionId,
    });
  };

  const drillDownToBlock = (blockId: string) => {
    if (currentUser.role === 'BlockHead' && currentUser.blockId !== blockId) return; // Strict boundary

    const blk = getBlockById(blockId);
    if (!blk) return;

    // Verify block belongs to authorized district/subdivision
    if (currentUser.role === 'DistrictHead' && blk.districtId !== currentUser.districtId) return;
    if (currentUser.role === 'SubdivisionHead' && blk.subdivisionId !== currentUser.subdivisionId) return;

    setCurrentScope({
      level: 'Block',
      districtId: blk.districtId,
      subdivisionId: blk.subdivisionId,
      blockId: blk.id,
    });
  };

  const resetToDistrict = () => {
    if (currentUser.role === 'BlockHead' || currentUser.role === 'SubdivisionHead') {
      // Forbidden to jump up to district if role is subdivision/block head
      return;
    }
    setCurrentScope({
      level: 'District',
      districtId: currentUser.districtId ?? currentScope.districtId ?? 'dist-west-tripura',
    });
  };

  const setScopeLevel = (level: ScopeLevel, params?: { districtId?: string; subdivisionId?: string; blockId?: string }) => {
    if (level === 'District') {
      resetToDistrict();
    } else if (level === 'Subdivision') {
      const subId = params?.subdivisionId || (isLockedToSubdivision ? currentUser.subdivisionId : currentScope.subdivisionId);
      if (subId) drillDownToSubdivision(subId);
    } else if (level === 'Block') {
      const blkId = params?.blockId || (isLockedToBlock ? currentUser.blockId : currentScope.blockId);
      if (blkId) drillDownToBlock(blkId);
    }
  };

  // Update block metrics directly in mock state (Exclusive to BlockHead)
  const updateBlockMetrics = (blockId: string, updatedMetrics: Partial<BlockMetrics>) => {
    for (const dist of initialDistricts) {
      for (const sub of dist.subdivisions) {
        const blk = sub.blocks.find((b: Block) => b.id === blockId);
        if (blk) {
          Object.assign(blk.metrics, updatedMetrics);
          break;
        }
      }
    }
    setDataDistricts([...initialDistricts]);
    setCurrentScope((prev) => ({ ...prev }));
  };

  // Filter available subdivisions strictly based on role
  const availableSubdivisions = useMemo(() => {
    if (currentUser.role === 'SubdivisionHead') {
      const sub = getSubdivisionById(currentUser.subdivisionId);
      return sub ? [{ id: sub.id, name: sub.name }] : [];
    }
    if (currentUser.role === 'BlockHead') {
      return []; // Block Head sees zero selectors
    }
    const distId = currentScope.districtId || currentUser.districtId;
    return getSubdivisionsForDistrict(distId).map((s) => ({ id: s.id, name: s.name }));
  }, [currentUser, currentScope.districtId, dataDistricts]);

  // Filter available blocks strictly based on current scope & role
  const availableBlocks = useMemo(() => {
    if (currentUser.role === 'BlockHead') {
      return []; // Block Head sees zero selectors
    }
    const subId = currentScope.subdivisionId || (currentUser.role === 'SubdivisionHead' ? currentUser.subdivisionId : undefined);
    if (!subId) return [];
    return getBlocksForSubdivision(subId).map((b) => ({ id: b.id, name: b.name }));
  }, [currentUser, currentScope.subdivisionId, dataDistricts]);

  // Filtered metrics and sub-units derived dynamically
  const metrics = useMemo(() => aggregateMetricsForScope(currentScope), [currentScope, dataDistricts]);
  const subUnits = useMemo(() => getSubUnitPerformance(currentScope), [currentScope, dataDistricts]);

  // Build breadcrumb segments reflecting authorized jumps
  const breadcrumbs = useMemo((): BreadcrumbSegment[] => {
    const list: BreadcrumbSegment[] = [];

    // Root State Segment
    list.push({
      label: 'ARDD Tripura',
      level: 'District',
      districtId: currentScope.districtId,
      isClickable: currentUser.role === 'DistrictHead' || currentUser.role === 'MockAdministrator',
      isActive: currentScope.level === 'District' && !currentScope.subdivisionId,
    });

    // District Segment
    if (currentScope.districtId) {
      const dist = getDistrictById(currentScope.districtId);
      if (dist) {
        list.push({
          label: dist.name,
          level: 'District',
          districtId: dist.id,
          isClickable: currentUser.role === 'DistrictHead' || currentUser.role === 'MockAdministrator',
          isActive: currentScope.level === 'District',
        });
      }
    }

    // Subdivision Segment
    if (currentScope.subdivisionId) {
      const sub = getSubdivisionById(currentScope.subdivisionId);
      if (sub) {
        list.push({
          label: sub.name,
          level: 'Subdivision',
          districtId: sub.districtId,
          subdivisionId: sub.id,
          isClickable: currentUser.role !== 'BlockHead',
          isActive: currentScope.level === 'Subdivision',
        });
      }
    }

    // Block Segment
    if (currentScope.blockId) {
      const blk = getBlockById(currentScope.blockId);
      if (blk) {
        list.push({
          label: blk.name,
          level: 'Block',
          districtId: blk.districtId,
          subdivisionId: blk.subdivisionId,
          blockId: blk.id,
          isClickable: false, // Already at deepest level
          isActive: true,
        });
      }
    }

    return list;
  }, [currentScope, currentUser, dataDistricts]);

  return (
    <ScopeContext.Provider
      value={{
        currentScope,
        metrics,
        subUnits,
        breadcrumbs,
        isLockedToBlock,
        isLockedToSubdivision,
        availableSubdivisions,
        availableBlocks,
        setScopeLevel,
        drillDownToSubdivision,
        drillDownToBlock,
        resetToDistrict,
        updateBlockMetrics,
      }}
    >
      {children}
    </ScopeContext.Provider>
  );
};

export function useCurrentScope() {
  const context = useContext(ScopeContext);
  if (!context) {
    throw new Error('useCurrentScope must be used within a ScopeProvider');
  }
  return context;
}
