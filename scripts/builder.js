const fs = require('fs');
const path = require('path');

function write(relPath, content) {
  const fullPath = path.join(__dirname, '..', relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
  console.log('Created:', relPath);
}

// 1. Generate src/data/mockData.ts
const b = (cattle, buf, goat, poul, vDone, vTgt, ai, milk, camps, ben, alerts) => ({
  cattleCount: cattle, buffaloCount: buf, goatSheepCount: goat, poultryCount: poul,
  vaccinationsDone: vDone, vaccinationTarget: vTgt, artificialInseminations: ai,
  milkProductionLitersDay: milk, veterinaryCampsOrganized: camps, schemeBeneficiaries: ben, diseaseAlerts: alerts,
  monthlyTrends: [
    { month: 'Mar', vaccinations: Math.round(vDone * 0.15), inseminations: Math.round(ai * 0.15), milkLiters: Math.round(milk * 0.92) },
    { month: 'Apr', vaccinations: Math.round(vDone * 0.16), inseminations: Math.round(ai * 0.16), milkLiters: Math.round(milk * 0.95) },
    { month: 'May', vaccinations: Math.round(vDone * 0.18), inseminations: Math.round(ai * 0.17), milkLiters: Math.round(milk * 0.98) },
    { month: 'Jun', vaccinations: Math.round(vDone * 0.16), inseminations: Math.round(ai * 0.16), milkLiters: Math.round(milk * 0.96) },
    { month: 'Jul', vaccinations: Math.round(vDone * 0.17), inseminations: Math.round(ai * 0.18), milkLiters: Math.round(milk * 0.99) },
    { month: 'Aug', vaccinations: Math.round(vDone * 0.18), inseminations: Math.round(ai * 0.18), milkLiters: milk }
  ]
});

const mockDistricts = [
  {
    id: 'dist-west-tripura',
    name: 'West Tripura',
    subdivisions: [
      {
        id: 'sub-sadar',
        name: 'Sadar Subdivision',
        districtId: 'dist-west-tripura',
        blocks: [
          { id: 'blk-dukli', name: 'Dukli Block', subdivisionId: 'sub-sadar', districtId: 'dist-west-tripura', metrics: b(14200, 820, 9500, 48000, 13800, 15000, 1250, 18500, 14, 620, 0) },
          { id: 'blk-bamutia', name: 'Bamutia Block', subdivisionId: 'sub-sadar', districtId: 'dist-west-tripura', metrics: b(11800, 610, 7800, 39000, 10900, 12500, 980, 14200, 11, 490, 1) },
          { id: 'blk-hezamara', name: 'Hezamara Block', subdivisionId: 'sub-sadar', districtId: 'dist-west-tripura', metrics: b(9600, 430, 6400, 32000, 8900, 10000, 760, 11800, 8, 380, 0) }
        ]
      },
      {
        id: 'sub-mohanpur',
        name: 'Mohanpur Subdivision',
        districtId: 'dist-west-tripura',
        blocks: [
          { id: 'blk-mohanpur', name: 'Mohanpur Block', subdivisionId: 'sub-mohanpur', districtId: 'dist-west-tripura', metrics: b(13400, 710, 8900, 44000, 12800, 14000, 1120, 16700, 12, 540, 0) },
          { id: 'blk-lefunga', name: 'Lefunga Block', subdivisionId: 'sub-mohanpur', districtId: 'dist-west-tripura', metrics: b(8700, 390, 5800, 29000, 7950, 9200, 640, 9800, 7, 310, 0) }
        ]
      },
      {
        id: 'sub-jirania',
        name: 'Jirania Subdivision',
        districtId: 'dist-west-tripura',
        blocks: [
          { id: 'blk-jirania', name: 'Jirania Block', subdivisionId: 'sub-jirania', districtId: 'dist-west-tripura', metrics: b(12900, 680, 8400, 41000, 12100, 13500, 1060, 15400, 10, 510, 0) },
          { id: 'blk-mandwi', name: 'Mandwi Block', subdivisionId: 'sub-jirania', districtId: 'dist-west-tripura', metrics: b(9200, 410, 6100, 31000, 8400, 9600, 690, 10500, 8, 340, 0) }
        ]
      }
    ]
  },
  {
    id: 'dist-gomati',
    name: 'Gomati District',
    subdivisions: [
      {
        id: 'sub-udaipur',
        name: 'Udaipur Subdivision',
        districtId: 'dist-gomati',
        blocks: [
          { id: 'blk-matabari', name: 'Matabari Block', subdivisionId: 'sub-udaipur', districtId: 'dist-gomati', metrics: b(15600, 920, 10200, 52000, 14900, 16000, 1380, 20200, 16, 710, 0) },
          { id: 'blk-kakraban', name: 'Kakraban Block', subdivisionId: 'sub-udaipur', districtId: 'dist-gomati', metrics: b(12100, 650, 8100, 40500, 11400, 12800, 1010, 14800, 11, 480, 0) },
          { id: 'blk-killa', name: 'Killa Block', subdivisionId: 'sub-udaipur', districtId: 'dist-gomati', metrics: b(8900, 380, 5900, 28000, 8100, 9500, 670, 10100, 7, 320, 0) }
        ]
      },
      {
        id: 'sub-amarpur',
        name: 'Amarpur Subdivision',
        districtId: 'dist-gomati',
        blocks: [
          { id: 'blk-amarpur', name: 'Amarpur Block', subdivisionId: 'sub-amarpur', districtId: 'dist-gomati', metrics: b(11200, 580, 7400, 37000, 10200, 11800, 890, 13200, 9, 430, 0) },
          { id: 'blk-ompi', name: 'Ompi Block', subdivisionId: 'sub-amarpur', districtId: 'dist-gomati', metrics: b(7600, 310, 5100, 24500, 6800, 8000, 520, 8400, 6, 260, 0) }
        ]
      }
    ]
  },
  {
    id: 'dist-south-tripura',
    name: 'South Tripura',
    subdivisions: [
      {
        id: 'sub-belonia',
        name: 'Belonia Subdivision',
        districtId: 'dist-south-tripura',
        blocks: [
          { id: 'blk-rajnagar', name: 'Rajnagar Block', subdivisionId: 'sub-belonia', districtId: 'dist-south-tripura', metrics: b(13800, 790, 9100, 46000, 13200, 14500, 1190, 17800, 13, 590, 0) },
          { id: 'blk-hrishyamukh', name: 'Hrishyamukh Block', subdivisionId: 'sub-belonia', districtId: 'dist-south-tripura', metrics: b(10400, 520, 6900, 35000, 9600, 11000, 820, 12400, 9, 410, 0) }
        ]
      },
      {
        id: 'sub-santirbazar',
        name: 'Santirbazar Subdivision',
        districtId: 'dist-south-tripura',
        blocks: [
          { id: 'blk-bokafa', name: 'Bokafa Block', subdivisionId: 'sub-santirbazar', districtId: 'dist-south-tripura', metrics: b(11500, 610, 7600, 38500, 10600, 12000, 930, 13900, 10, 460, 0) },
          { id: 'blk-jolaibari', name: 'Jolaibari Block', subdivisionId: 'sub-santirbazar', districtId: 'dist-south-tripura', metrics: b(8800, 420, 5700, 29500, 8050, 9300, 680, 10200, 7, 330, 0) }
        ]
      },
      {
        id: 'sub-empty-demo',
        name: 'Sabroom Special Zone (Demo Empty)',
        districtId: 'dist-south-tripura',
        blocks: []
      }
    ]
  },
  {
    id: 'dist-dhalai',
    name: 'Dhalai District',
    subdivisions: [
      {
        id: 'sub-ambassa',
        name: 'Ambassa Subdivision',
        districtId: 'dist-dhalai',
        blocks: [
          { id: 'blk-ambassa', name: 'Ambassa Block', subdivisionId: 'sub-ambassa', districtId: 'dist-dhalai', metrics: b(9800, 450, 6500, 33000, 8900, 10200, 740, 11200, 8, 370, 0) },
          { id: 'blk-salema', name: 'Salema Block', subdivisionId: 'sub-ambassa', districtId: 'dist-dhalai', metrics: b(8400, 390, 5400, 28000, 7600, 8900, 610, 9600, 7, 300, 0) }
        ]
      },
      {
        id: 'sub-kamalpur',
        name: 'Kamalpur Subdivision',
        districtId: 'dist-dhalai',
        blocks: [
          { id: 'blk-salema-north', name: 'Durga Chowmuhani Block', subdivisionId: 'sub-kamalpur', districtId: 'dist-dhalai', metrics: b(9100, 410, 5900, 30500, 8300, 9500, 680, 10400, 8, 340, 0) }
        ]
      }
    ]
  }
];

const presetUsers = [
  {
    id: 'user-dist-west',
    name: 'Dr. Subhashish Debbarma',
    designation: 'District Veterinary Officer (DVO)',
    role: 'DistrictHead',
    districtId: 'dist-west-tripura',
    email: 'dvo.west@ardd.tripura.gov.in',
    locationLabel: 'West Tripura District (District-wide drilldown)'
  },
  {
    id: 'user-sub-sadar',
    name: 'Dr. Anamika Roy',
    designation: 'Subdivisional Veterinary Officer (SDVO)',
    role: 'SubdivisionHead',
    districtId: 'dist-west-tripura',
    subdivisionId: 'sub-sadar',
    email: 'sdvo.sadar@ardd.tripura.gov.in',
    locationLabel: 'Sadar Subdivision (Fixed subdivision, drill to Blocks)'
  },
  {
    id: 'user-blk-dukli',
    name: 'Dr. Rajesh Chakraborty',
    designation: 'Block Veterinary Officer (BVO)',
    role: 'BlockHead',
    districtId: 'dist-west-tripura',
    subdivisionId: 'sub-sadar',
    blockId: 'blk-dukli',
    email: 'bvo.dukli@ardd.tripura.gov.in',
    locationLabel: 'Dukli Block (Fixed Block — zero selectors)'
  },
  {
    id: 'user-mock-admin',
    name: 'Sri Prasenjit Bhowmik',
    designation: 'Directorate Systems Administrator',
    role: 'MockAdministrator',
    email: 'admin.ardd@tripura.gov.in',
    locationLabel: 'Directorate HQ, Agartala (Administration Module Only)'
  }
];

const mockDataCode = `// Single source of truth mock data for ARDD Tripura
import { District, CurrentUser, Subdivision, Block, AggregatedMetrics, Scope, SubUnitPerformance, MonthlyTrend } from '@/types/ardd';

export const mockDistricts: District[] = ${JSON.stringify(mockDistricts, null, 2)};

export const PRESET_USERS: CurrentUser[] = ${JSON.stringify(presetUsers, null, 2)};

export const EMPTY_SUBDIVISION_USER: CurrentUser = {
  id: 'user-sub-empty',
  name: 'Dr. Ratan Sen',
  designation: 'Special Duty Officer',
  role: 'SubdivisionHead',
  districtId: 'dist-south-tripura',
  subdivisionId: 'sub-empty-demo',
  email: 'sdo.sabroom@ardd.tripura.gov.in',
  locationLabel: 'Sabroom Special Zone (Demo Empty Subdivision)'
};

// Pure scope filter functions (Guaranteed safe: never return undefined, return [] for unmatched)
export function getDistrictById(districtId?: string): District | undefined {
  if (!districtId) return undefined;
  return mockDistricts.find((d) => d.id === districtId);
}

export function getSubdivisionsForDistrict(districtId?: string): Subdivision[] {
  if (!districtId) return [];
  const dist = mockDistricts.find((d) => d.id === districtId);
  return dist?.subdivisions ?? [];
}

export function getBlocksForSubdivision(subdivisionId?: string): Block[] {
  if (!subdivisionId) return [];
  for (const dist of mockDistricts) {
    const sub = dist.subdivisions.find((s) => s.id === subdivisionId);
    if (sub) {
      return sub.blocks ?? [];
    }
  }
  return [];
}

export function getBlockById(blockId?: string): Block | undefined {
  if (!blockId) return undefined;
  for (const dist of mockDistricts) {
    for (const sub of dist.subdivisions) {
      const blk = sub.blocks.find((b) => b.id === blockId);
      if (blk) return blk;
    }
  }
  return undefined;
}

export function getSubdivisionById(subdivisionId?: string): Subdivision | undefined {
  if (!subdivisionId) return undefined;
  for (const dist of mockDistricts) {
    const sub = dist.subdivisions.find((s) => s.id === subdivisionId);
    if (sub) return sub;
  }
  return undefined;
}

export function getBlocksInScope(scope: Scope): Block[] {
  if (scope.blockId) {
    const blk = getBlockById(scope.blockId);
    return blk ? [blk] : [];
  }

  if (scope.subdivisionId) {
    return getBlocksForSubdivision(scope.subdivisionId);
  }

  if (scope.districtId) {
    const subdivisions = getSubdivisionsForDistrict(scope.districtId);
    return subdivisions.flatMap((sub) => sub.blocks ?? []);
  }

  return [];
}

export function aggregateMetricsForScope(scope: Scope): AggregatedMetrics {
  const blocks = getBlocksInScope(scope);

  const initialMonthly: MonthlyTrend[] = [
    { month: 'Mar', vaccinations: 0, inseminations: 0, milkLiters: 0 },
    { month: 'Apr', vaccinations: 0, inseminations: 0, milkLiters: 0 },
    { month: 'May', vaccinations: 0, inseminations: 0, milkLiters: 0 },
    { month: 'Jun', vaccinations: 0, inseminations: 0, milkLiters: 0 },
    { month: 'Jul', vaccinations: 0, inseminations: 0, milkLiters: 0 },
    { month: 'Aug', vaccinations: 0, inseminations: 0, milkLiters: 0 },
  ];

  if (blocks.length === 0) {
    return {
      totalLivestock: 0,
      cattleCount: 0,
      buffaloCount: 0,
      goatSheepCount: 0,
      poultryCount: 0,
      vaccinationsDone: 0,
      vaccinationTarget: 0,
      vaccinationCoveragePercent: 0,
      artificialInseminations: 0,
      milkProductionLitersDay: 0,
      veterinaryCampsOrganized: 0,
      schemeBeneficiaries: 0,
      diseaseAlerts: 0,
      totalBlocks: 0,
      totalSubdivisions: scope.subdivisionId ? 1 : (getDistrictById(scope.districtId)?.subdivisions.length ?? 0),
      monthlyTrends: initialMonthly,
    };
  }

  let cattleCount = 0;
  let buffaloCount = 0;
  let goatSheepCount = 0;
  let poultryCount = 0;
  let vaccinationsDone = 0;
  let vaccinationTarget = 0;
  let artificialInseminations = 0;
  let milkProductionLitersDay = 0;
  let veterinaryCampsOrganized = 0;
  let schemeBeneficiaries = 0;
  let diseaseAlerts = 0;

  const monthlyTotals = initialMonthly.map((m) => ({ ...m }));

  for (const block of blocks) {
    const m = block.metrics;
    cattleCount += m.cattleCount;
    buffaloCount += m.buffaloCount;
    goatSheepCount += m.goatSheepCount;
    poultryCount += m.poultryCount;
    vaccinationsDone += m.vaccinationsDone;
    vaccinationTarget += m.vaccinationTarget;
    artificialInseminations += m.artificialInseminations;
    milkProductionLitersDay += m.milkProductionLitersDay;
    veterinaryCampsOrganized += m.veterinaryCampsOrganized;
    schemeBeneficiaries += m.schemeBeneficiaries;
    diseaseAlerts += m.diseaseAlerts;

    if (m.monthlyTrends) {
      m.monthlyTrends.forEach((trend, idx) => {
        if (monthlyTotals[idx]) {
          monthlyTotals[idx].vaccinations += trend.vaccinations;
          monthlyTotals[idx].inseminations += trend.inseminations;
          monthlyTotals[idx].milkLiters += trend.milkLiters;
        }
      });
    }
  }

  const totalLivestock = cattleCount + buffaloCount + goatSheepCount + poultryCount;
  const vaccinationCoveragePercent = vaccinationTarget > 0 ? Math.round((vaccinationsDone / vaccinationTarget) * 100) : 0;

  const subCount = scope.blockId
    ? 1
    : scope.subdivisionId
    ? 1
    : (getDistrictById(scope.districtId)?.subdivisions.length ?? 0);

  return {
    totalLivestock,
    cattleCount,
    buffaloCount,
    goatSheepCount,
    poultryCount,
    vaccinationsDone,
    vaccinationTarget,
    vaccinationCoveragePercent,
    artificialInseminations,
    milkProductionLitersDay,
    veterinaryCampsOrganized,
    schemeBeneficiaries,
    diseaseAlerts,
    totalBlocks: blocks.length,
    totalSubdivisions: subCount,
    monthlyTrends: monthlyTotals,
  };
}

export function getSubUnitPerformance(scope: Scope): SubUnitPerformance[] {
  if (scope.level === 'District') {
    const subdivisions = getSubdivisionsForDistrict(scope.districtId);
    return subdivisions.map((sub) => {
      const subMetrics = aggregateMetricsForScope({
        level: 'Subdivision',
        districtId: scope.districtId,
        subdivisionId: sub.id,
      });
      return {
        id: sub.id,
        name: sub.name,
        type: 'Subdivision',
        cattleCount: subMetrics.cattleCount,
        vaccinationsDone: subMetrics.vaccinationsDone,
        vaccinationCoveragePercent: subMetrics.vaccinationCoveragePercent,
        artificialInseminations: subMetrics.artificialInseminations,
        milkProductionLitersDay: subMetrics.milkProductionLitersDay,
        diseaseAlerts: subMetrics.diseaseAlerts,
      };
    });
  }

  if (scope.level === 'Subdivision') {
    const blocks = getBlocksForSubdivision(scope.subdivisionId);
    return blocks.map((b) => ({
      id: b.id,
      name: b.name,
      type: 'Block',
      cattleCount: b.metrics.cattleCount,
      vaccinationsDone: b.metrics.vaccinationsDone,
      vaccinationCoveragePercent:
        b.metrics.vaccinationTarget > 0
          ? Math.round((b.metrics.vaccinationsDone / b.metrics.vaccinationTarget) * 100)
          : 0,
      artificialInseminations: b.metrics.artificialInseminations,
      milkProductionLitersDay: b.metrics.milkProductionLitersDay,
      diseaseAlerts: b.metrics.diseaseAlerts,
    }));
  }

  if (scope.level === 'Block') {
    const blk = getBlockById(scope.blockId);
    if (!blk) return [];
    const sub = getSubdivisionById(blk.subdivisionId);
    return [
      {
        id: blk.id,
        name: blk.name,
        type: 'Block',
        cattleCount: blk.metrics.cattleCount,
        vaccinationsDone: blk.metrics.vaccinationsDone,
        vaccinationCoveragePercent:
          blk.metrics.vaccinationTarget > 0
            ? Math.round((blk.metrics.vaccinationsDone / blk.metrics.vaccinationTarget) * 100)
            : 0,
        artificialInseminations: blk.metrics.artificialInseminations,
        milkProductionLitersDay: blk.metrics.milkProductionLitersDay,
        diseaseAlerts: blk.metrics.diseaseAlerts,
        subdivisionName: sub?.name,
      },
    ];
  }

  return [];
}

export function getScopeDisplayText(scope: Scope): { title: string; subtitle: string } {
  if (scope.level === 'Block') {
    const blk = getBlockById(scope.blockId);
    const sub = getSubdivisionById(blk?.subdivisionId);
    const dist = getDistrictById(blk?.districtId);
    return {
      title: blk?.name ?? 'Unknown Block',
      subtitle: (sub?.name || '') + ' • ' + (dist?.name || 'Tripura') + ' District',
    };
  }

  if (scope.level === 'Subdivision') {
    const sub = getSubdivisionById(scope.subdivisionId);
    const dist = getDistrictById(sub?.districtId);
    return {
      title: sub?.name ?? 'Unknown Subdivision',
      subtitle: (dist?.name || 'Tripura') + ' District',
    };
  }

  const dist = getDistrictById(scope.districtId);
  return {
    title: dist?.name ? dist.name + ' District' : 'District Overview',
    subtitle: 'State of Tripura • Animal Resources Development Department',
  };
}
`;

write('src/data/mockData.ts', mockDataCode);

// 2. Generate src/context/AuthContext.tsx
const authContextCode = `'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CurrentUser } from '@/types/ardd';
import { PRESET_USERS, EMPTY_SUBDIVISION_USER } from '@/data/mockData';

interface AuthContextType {
  currentUser: CurrentUser;
  presetUsers: CurrentUser[];
  loginAs: (user: CurrentUser) => void;
  loginByPresetId: (presetId: string) => void;
  loginAsEmptySubdivisionDemo: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Default logged in as District Head (West Tripura)
  const [currentUser, setCurrentUser] = useState<CurrentUser>(PRESET_USERS[0]);

  const loginAs = (user: CurrentUser) => {
    setCurrentUser(user);
  };

  const loginByPresetId = (presetId: string) => {
    const found = PRESET_USERS.find((u) => u.id === presetId);
    if (found) {
      setCurrentUser(found);
    }
  };

  const loginAsEmptySubdivisionDemo = () => {
    setCurrentUser(EMPTY_SUBDIVISION_USER);
  };

  const logout = () => {
    // Reset to District Head preset or show login modal
    setCurrentUser(PRESET_USERS[0]);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        presetUsers: PRESET_USERS,
        loginAs,
        loginByPresetId,
        loginAsEmptySubdivisionDemo,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
`;

write('src/context/AuthContext.tsx', authContextCode);

// 3. Generate src/context/ScopeContext.tsx
const scopeContextCode = `'use client';

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
`;

write('src/context/ScopeContext.tsx', scopeContextCode);

// 4. Header Component (Tripura ARDD branding, offline toggle, sync badge, user role badge, quick switcher)
const headerCode = `'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useCurrentScope } from '@/context/ScopeContext';
import { OfflineIndicator } from '@/components/common/OfflineIndicator';
import { SyncStatus } from '@/components/common/SyncStatus';
import { ScopeIndicator } from '@/components/common/ScopeIndicator';
import { Shield, UserCircle, LogOut, ChevronDown, Check, Building2, Layers, AlertTriangle } from 'lucide-react';

interface HeaderProps {
  onOpenRoleModal: () => void;
  activeTab: 'dashboard' | 'reports' | 'admin';
  setActiveTab: (tab: 'dashboard' | 'reports' | 'admin') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRoleModal, activeTab, setActiveTab }) => {
  const { currentUser, presetUsers, loginAs, loginAsEmptySubdivisionDemo } = useAuth();
  const { currentScope } = useCurrentScope();
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const getRoleBadgeStyle = (role: string) => {
    switch (role) {
      case 'DistrictHead':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'SubdivisionHead':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'BlockHead':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'MockAdministrator':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case 'DistrictHead':
        return 'District Head';
      case 'SubdivisionHead':
        return 'Subdivision Head';
      case 'BlockHead':
        return 'Block Head';
      case 'MockAdministrator':
        return 'Mock Administrator';
      default:
        return role;
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      {/* Top Govt Bar */}
      <div className="bg-emerald-800 text-emerald-50 px-4 py-1 text-xs flex justify-between items-center font-medium">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Government of Tripura • Animal Resources Development Department (ARDD)</span>
        </div>
        <div className="flex items-center gap-4 text-emerald-100 text-xs">
          <span>State Animal Disease Surveillance & Livestock MIS</span>
          <span className="text-emerald-300">|</span>
          <span>Helpdesk: 1800-345-3644</span>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Department Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-lg shadow-md border-2 border-emerald-600">
              TR
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-gray-900 leading-tight">
                  ARDD Tripura Portal
                </h1>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] uppercase font-bold px-2 py-0.5 rounded border border-emerald-200">
                  Prototype
                </span>
              </div>
              <p className="text-xs text-gray-500 font-medium">
                Integrated Livestock & Veterinary Management System
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={\`px-3.5 py-2 rounded-md text-sm font-medium transition-colors \${
                activeTab === 'dashboard'
                  ? 'bg-emerald-50 text-emerald-800 font-semibold border-b-2 border-emerald-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }\`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={\`px-3.5 py-2 rounded-md text-sm font-medium transition-colors \${
                activeTab === 'reports'
                  ? 'bg-emerald-50 text-emerald-800 font-semibold border-b-2 border-emerald-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }\`}
            >
              Reports & Registers
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={\`px-3.5 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 \${
                activeTab === 'admin'
                  ? 'bg-purple-50 text-purple-800 font-semibold border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }\`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Administration</span>
              {currentUser.role !== 'MockAdministrator' && (
                <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.2 rounded border border-gray-200">
                  Locked
                </span>
              )}
            </button>
          </nav>

          {/* Status Indicators & User Switcher */}
          <div className="flex items-center gap-3">
            {/* 8. Reusable Status Components */}
            <div className="hidden lg:flex items-center gap-2">
              <OfflineIndicator />
              <SyncStatus />
            </div>

            {/* Quick Role Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-all text-left"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                  {currentUser.name.split(' ').pop()?.[0] || 'U'}
                </div>
                <div className="hidden sm:block">
                  <div className="text-xs font-semibold text-gray-800 flex items-center gap-1.5">
                    <span>{currentUser.name}</span>
                  </div>
                  <div className="text-[11px] text-gray-500 flex items-center gap-1">
                    <span className={\`inline-block px-1.5 py-0.2 rounded text-[10px] font-medium border \${getRoleBadgeStyle(currentUser.role)}\`}>
                      {getRoleDisplayName(currentUser.role)}
                    </span>
                  </div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </button>

              {/* Preset Role Switcher Dropdown Menu */}
              {roleDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setRoleDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                    <div className="px-3 py-2 border-b border-gray-100">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Switch Active Role (Mock Auth)
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5">
                        Test strict scope hierarchy across all 4 system roles
                      </div>
                    </div>

                    <div className="py-1">
                      {presetUsers.map((preset) => {
                        const isCurrent = currentUser.id === preset.id;
                        return (
                          <button
                            key={preset.id}
                            onClick={() => {
                              loginAs(preset);
                              setRoleDropdownOpen(false);
                            }}
                            className={\`w-full text-left px-3 py-2 flex items-start justify-between hover:bg-emerald-50/60 transition-colors \${
                              isCurrent ? 'bg-emerald-50 border-l-4 border-emerald-600' : ''
                            }\`}
                          >
                            <div className="flex-1 pr-2">
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold text-gray-900">{preset.name}</span>
                                {isCurrent && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                              </div>
                              <div className="text-[11px] text-emerald-700 font-medium">{preset.designation}</div>
                              <div className="text-[10px] text-gray-500 mt-0.5">{preset.locationLabel}</div>
                            </div>
                            <span className={\`text-[9px] font-bold px-1.5 py-0.5 rounded border whitespace-nowrap \${getRoleBadgeStyle(preset.role)}\`}>
                              {getRoleDisplayName(preset.role)}
                            </span>
                          </button>
                        );
                      })}

                      {/* Edge case demo button */}
                      <div className="border-t border-gray-100 my-1 pt-1">
                        <button
                          onClick={() => {
                            loginAsEmptySubdivisionDemo();
                            setRoleDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-1.5 flex items-center gap-2 text-xs text-amber-800 hover:bg-amber-50"
                        >
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                          <span>Test Edge Case: Empty Subdivision (0 Blocks)</span>
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 px-3 py-1.5 flex justify-between items-center text-xs">
                      <button
                        onClick={() => {
                          setRoleDropdownOpen(false);
                          onOpenRoleModal();
                        }}
                        className="text-emerald-700 hover:underline font-medium"
                      >
                        Open Full Role Switcher Modal
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
`;

write('src/components/common/Header.tsx', headerCode);

// 5. Reusable Status Components: OfflineIndicator, SyncStatus, ScopeIndicator, Breadcrumb, EmptyState, AccessDenied
const offlineIndicatorCode = `'use client';

import React, { useState } from 'react';
import { Wifi, WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <button
      onClick={() => setIsOnline(!isOnline)}
      title="Click to simulate offline / online network state"
      className={\`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors \${
        isOnline
          ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
          : 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100 animate-pulse'
      }\`}
    >
      {isOnline ? (
        <>
          <Wifi className="w-3.5 h-3.5 text-emerald-600" />
          <span>Online</span>
        </>
      ) : (
        <>
          <WifiOff className="w-3.5 h-3.5 text-amber-600" />
          <span>Offline Mode</span>
        </>
      )}
    </button>
  );
};
`;
write('src/components/common/OfflineIndicator.tsx', offlineIndicatorCode);

const syncStatusCode = `'use client';

import React, { useState } from 'react';
import { RefreshCw, CheckCircle2 } from 'lucide-react';

export const SyncStatus: React.FC = () => {
  const [syncing, setSyncing] = useState(false);
  const [lastSyncedTime, setLastSyncedTime] = useState('Just now');

  const triggerSync = () => {
    if (syncing) return;
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setLastSyncedTime('Just now');
    }, 900);
  };

  return (
    <button
      onClick={triggerSync}
      title="Simulate data sync with State Central Database"
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600 transition-colors"
    >
      <RefreshCw className={\`w-3 h-3 text-gray-500 \${syncing ? 'animate-spin text-emerald-600' : ''}\`} />
      <span>{syncing ? 'Syncing...' : \`Synced: \${lastSyncedTime}\`}</span>
    </button>
  );
};
`;
write('src/components/common/SyncStatus.tsx', syncStatusCode);

const scopeIndicatorCode = `'use client';

import React from 'react';
import { useCurrentScope } from '@/context/ScopeContext';
import { useAuth } from '@/context/AuthContext';
import { MapPin, Lock, ChevronRight, Layers } from 'lucide-react';
import { getScopeDisplayText } from '@/data/mockData';

export const ScopeIndicator: React.FC = () => {
  const { currentScope, isLockedToBlock, isLockedToSubdivision } = useCurrentScope();
  const { currentUser } = useAuth();
  const { title, subtitle } = getScopeDisplayText(currentScope);

  const getScopeBadge = () => {
    switch (currentScope.level) {
      case 'District':
        return { label: 'District Scope', color: 'bg-blue-100 text-blue-800 border-blue-200' };
      case 'Subdivision':
        return { label: 'Subdivision Scope', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' };
      case 'Block':
        return { label: 'Block Scope', color: 'bg-amber-100 text-amber-800 border-amber-200' };
    }
  };

  const badge = getScopeBadge();

  return (
    <div className="bg-gradient-to-r from-emerald-900 to-emerald-950 text-white rounded-xl p-4 shadow-md border border-emerald-800">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-800/80 border border-emerald-700 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-emerald-300" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
              <span className={\`text-xs font-semibold px-2 py-0.5 rounded border \${badge.color}\`}>
                {badge.label}
              </span>
              {(isLockedToBlock || isLockedToSubdivision) && (
                <span className="inline-flex items-center gap-1 text-[11px] bg-amber-500/20 text-amber-200 px-2 py-0.5 rounded border border-amber-400/30">
                  <Lock className="w-3 h-3" />
                  <span>{isLockedToBlock ? 'Fixed Block Scope' : 'Fixed Subdivision Scope'}</span>
                </span>
              )}
            </div>
            <p className="text-xs text-emerald-200/80 mt-0.5">{subtitle}</p>
          </div>
        </div>

        <div className="text-right sm:border-l sm:border-emerald-800/80 sm:pl-4">
          <div className="text-xs text-emerald-300 font-medium">Logged in Role</div>
          <div className="text-sm font-semibold text-white">{currentUser.designation}</div>
          <div className="text-[11px] text-emerald-200/70">{currentUser.email}</div>
        </div>
      </div>
    </div>
  );
};
`;
write('src/components/common/ScopeIndicator.tsx', scopeIndicatorCode);

// 6. Navigation & Breadcrumbs (<Breadcrumb />)
const breadcrumbCode = `'use client';

import React from 'react';
import { useCurrentScope } from '@/context/ScopeContext';
import { useAuth } from '@/context/AuthContext';
import { ChevronRight, Home, Building2, MapPin, Lock } from 'lucide-react';

export const Breadcrumb: React.FC = () => {
  const { breadcrumbs, resetToDistrict, drillDownToSubdivision } = useCurrentScope();
  const { currentUser } = useAuth();

  return (
    <nav aria-label="Hierarchy Breadcrumb" className="flex items-center flex-wrap gap-1.5 py-2 px-3 bg-gray-50 border border-gray-200 rounded-lg text-xs">
      <div className="flex items-center gap-1 text-gray-500 mr-1 font-medium">
        <Home className="w-3.5 h-3.5 text-gray-400" />
        <span>Hierarchy:</span>
      </div>

      {breadcrumbs.map((segment, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <React.Fragment key={index}>
            {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />}

            {segment.isClickable && !isLast ? (
              <button
                onClick={() => {
                  if (segment.level === 'District') {
                    resetToDistrict();
                  } else if (segment.level === 'Subdivision' && segment.subdivisionId) {
                    drillDownToSubdivision(segment.subdivisionId);
                  }
                }}
                className="font-medium text-emerald-700 hover:text-emerald-900 hover:underline px-1.5 py-0.5 rounded transition-colors bg-white border border-gray-200 shadow-2xs"
              >
                {segment.label}
              </button>
            ) : (
              <span
                className={\`px-1.5 py-0.5 rounded font-semibold \${
                  isLast
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    : 'text-gray-600'
                }\`}
              >
                {segment.label}
              </span>
            )}
          </React.Fragment>
        );
      })}

      {currentUser.role === 'BlockHead' && (
        <span className="ml-auto inline-flex items-center gap-1 text-[11px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
          <Lock className="w-3 h-3 text-gray-400" />
          <span>Locked to Block</span>
        </span>
      )}
    </nav>
  );
};
`;
write('src/components/common/Breadcrumbs.tsx', breadcrumbCode);

// 7. Empty State Component
const emptyStateCode = `'use client';

import React from 'react';
import { AlertCircle, RotateCcw, FolderOpen } from 'lucide-react';
import { useCurrentScope } from '@/context/ScopeContext';

interface EmptyStateProps {
  title?: string;
  description?: string;
  onReset?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No Data Found for this Scope',
  description = 'There are no active blocks, livestock records, or vaccination campaigns registered under the selected boundary.',
  onReset,
}) => {
  const { resetToDistrict } = useCurrentScope();

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 text-center max-w-lg mx-auto my-8 shadow-sm">
      <div className="w-14 h-14 bg-amber-50 border border-amber-200 rounded-full flex items-center justify-center mx-auto text-amber-600 mb-4">
        <FolderOpen className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-6 leading-relaxed">{description}</p>

      {onReset ? (
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg shadow-xs transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Selection</span>
        </button>
      ) : (
        <button
          onClick={resetToDistrict}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg shadow-xs transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Return to District Level</span>
        </button>
      )}
    </div>
  );
};
`;
write('src/components/common/EmptyState.tsx', emptyStateCode);

// 8. Access Denied State (403 guard for Admin module)
const accessDeniedCode = `'use client';

import React from 'react';
import { ShieldAlert, ArrowLeft, KeyRound } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

interface AccessDeniedProps {
  onBackToDashboard: () => void;
}

export const AccessDenied: React.FC<AccessDeniedProps> = ({ onBackToDashboard }) => {
  const { currentUser, loginByPresetId } = useAuth();

  return (
    <div className="bg-white rounded-2xl border border-red-200 p-8 text-center max-w-xl mx-auto my-12 shadow-md">
      <div className="w-16 h-16 bg-red-100 border-2 border-red-200 rounded-full flex items-center justify-center mx-auto text-red-600 mb-4">
        <ShieldAlert className="w-8 h-8" />
      </div>
      <div className="inline-block bg-red-50 text-red-700 border border-red-200 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
        403 Forbidden Access
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Access Denied: Administration Module
      </h2>
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        Your current role (<strong className="text-gray-900">{currentUser.designation}</strong>) does not have authorization to view the Directorate Administration and Master Configuration module. Only users with the <span className="font-semibold text-purple-700">Mock Administrator</span> role are permitted.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          onClick={onBackToDashboard}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold rounded-lg transition-colors border border-gray-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Dashboard</span>
        </button>

        <button
          onClick={() => loginByPresetId('user-mock-admin')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold rounded-lg transition-colors shadow-xs"
        >
          <KeyRound className="w-4 h-4" />
          <span>Switch to Mock Administrator</span>
        </button>
      </div>
    </div>
  );
};
`;
write('src/components/common/AccessDenied.tsx', accessDeniedCode);

// 9. Scope Drill-down Selector Bar (Rule 5: Block Head sees 0 selectors; Subdiv sees only blocks; Dist Head sees both)
const scopeSelectorCode = `'use client';

import React from 'react';
import { useCurrentScope } from '@/context/ScopeContext';
import { useAuth } from '@/context/AuthContext';
import { Filter, Layers, MapPin, RotateCcw } from 'lucide-react';

export const ScopeSelector: React.FC = () => {
  const { currentUser } = useAuth();
  const {
    currentScope,
    availableSubdivisions,
    availableBlocks,
    drillDownToSubdivision,
    drillDownToBlock,
    resetToDistrict,
  } = useCurrentScope();

  // RULE 1 & 5: Block Head is fixed to their block — zero selectors rendered!
  if (currentUser.role === 'BlockHead') {
    return null;
  }

  // RULE 1 & 5: Mock Administrator only views admin module
  if (currentUser.role === 'MockAdministrator') {
    return null;
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-xs flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center">
          <Filter className="w-4 h-4" />
        </div>
        <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
          Hierarchical Filter:
        </span>
      </div>

      <div className="flex items-center flex-wrap gap-2.5">
        {/* District Head only: Subdivision selector */}
        {currentUser.role === 'DistrictHead' && (
          <div className="flex items-center gap-1.5">
            <label className="text-xs font-medium text-gray-600">Subdivision:</label>
            <select
              value={currentScope.subdivisionId || ''}
              onChange={(e) => {
                const subId = e.target.value;
                if (!subId) {
                  resetToDistrict();
                } else {
                  drillDownToSubdivision(subId);
                }
              }}
              className="text-xs bg-gray-50 border border-gray-300 rounded-lg px-2.5 py-1.5 font-medium text-gray-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">All Subdivisions ({availableSubdivisions.length})</option>
              {availableSubdivisions.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Subdivision Head (fixed to one subdiv) or District Head (when subdiv is chosen): Block Selector */}
        {(currentUser.role === 'SubdivisionHead' || currentScope.subdivisionId) && (
          <div className="flex items-center gap-1.5">
            <label className="text-xs font-medium text-gray-600">Block:</label>
            <select
              value={currentScope.blockId || ''}
              onChange={(e) => {
                const blkId = e.target.value;
                if (!blkId) {
                  if (currentUser.role === 'DistrictHead') {
                    if (currentScope.subdivisionId) {
                      drillDownToSubdivision(currentScope.subdivisionId);
                    }
                  } else {
                    // Subdivision Head reset to whole subdivision
                    drillDownToSubdivision(currentUser.subdivisionId!);
                  }
                } else {
                  drillDownToBlock(blkId);
                }
              }}
              className="text-xs bg-gray-50 border border-gray-300 rounded-lg px-2.5 py-1.5 font-medium text-gray-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">All Blocks ({availableBlocks.length})</option>
              {availableBlocks.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Reset button for District Head when drilled down */}
        {currentUser.role === 'DistrictHead' && (currentScope.subdivisionId || currentScope.blockId) && (
          <button
            onClick={resetToDistrict}
            className="flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2.5 py-1.5 rounded-lg font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to District View</span>
          </button>
        )}
      </div>
    </div>
  );
};
`;
write('src/components/dashboard/ScopeSelector.tsx', scopeSelectorCode);

// 10. KPI Metric Cards (dynamically aggregated from single source of truth)
const kpiCardsCode = `'use client';

import React from 'react';
import { useCurrentScope } from '@/context/ScopeContext';
import { 
  ShieldAlert, 
  Syringe, 
  Milk, 
  Activity, 
  Users, 
  Layers, 
  TrendingUp,
  HeartHandshake
} from 'lucide-react';

export const KPICards: React.FC = () => {
  const { metrics, currentScope } = useCurrentScope();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Livestock Population */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-xs hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Total Livestock
          </span>
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Activity className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-black text-gray-900">
            {metrics.totalLivestock.toLocaleString('en-IN')}
          </span>
          <span className="text-xs text-emerald-600 font-medium flex items-center">
            <TrendingUp className="w-3 h-3 mr-0.5" /> +4.2%
          </span>
        </div>
        <div className="mt-2 text-xs text-gray-500 flex justify-between border-t border-gray-100 pt-2">
          <span>Cattle: <strong>{metrics.cattleCount.toLocaleString('en-IN')}</strong></span>
          <span>Poultry: <strong>{metrics.poultryCount.toLocaleString('en-IN')}</strong></span>
        </div>
      </div>

      {/* Vaccination Coverage */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-xs hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Vaccinations Done
          </span>
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Syringe className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-black text-gray-900">
            {metrics.vaccinationsDone.toLocaleString('en-IN')}
          </span>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
            {metrics.vaccinationCoveragePercent}% Target
          </span>
        </div>
        <div className="mt-2 text-xs text-gray-500 flex justify-between border-t border-gray-100 pt-2">
          <span>Target: {metrics.vaccinationTarget.toLocaleString('en-IN')}</span>
          <span className="text-emerald-600 font-medium">On Schedule</span>
        </div>
      </div>

      {/* Daily Milk Production */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-xs hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Milk Production (L/day)
          </span>
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
            <Milk className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-black text-gray-900">
            {metrics.milkProductionLitersDay.toLocaleString('en-IN')}
          </span>
          <span className="text-xs text-gray-500">Liters / day</span>
        </div>
        <div className="mt-2 text-xs text-gray-500 flex justify-between border-t border-gray-100 pt-2">
          <span>AI Inseminations: <strong>{metrics.artificialInseminations.toLocaleString('en-IN')}</strong></span>
        </div>
      </div>

      {/* Veterinary Health Camps & Scheme Beneficiaries */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-xs hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Health Camps & Welfare
          </span>
          <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
            <HeartHandshake className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-black text-gray-900">
            {metrics.veterinaryCampsOrganized}
          </span>
          <span className="text-xs text-purple-700 font-medium">Camps Active</span>
        </div>
        <div className="mt-2 text-xs text-gray-500 flex justify-between border-t border-gray-100 pt-2">
          <span>Beneficiaries: <strong>{metrics.schemeBeneficiaries.toLocaleString('en-IN')}</strong></span>
          <span className={\`font-bold \${metrics.diseaseAlerts > 0 ? 'text-red-600' : 'text-emerald-600'}\`}>
            {metrics.diseaseAlerts > 0 ? \`\${metrics.diseaseAlerts} Outbreak Alert\` : '0 Outbreaks'}
          </span>
        </div>
      </div>
    </div>
  );
};
`;
write('src/components/dashboard/KPICards.tsx', kpiCardsCode);

// 11. Charts Component (Pure React/Tailwind SVG Charts strictly derived from current scope)
const trendChartsCode = `'use client';

import React from 'react';
import { useCurrentScope } from '@/context/ScopeContext';
import { BarChart3, TrendingUp, PieChart as PieIcon } from 'lucide-react';

export const TrendCharts: React.FC = () => {
  const { metrics, subUnits, currentScope, drillDownToSubdivision, drillDownToBlock } = useCurrentScope();

  // Find max value for trend normalization
  const maxVaccination = Math.max(...metrics.monthlyTrends.map((t) => t.vaccinations), 1);
  const maxSubUnitVaccination = Math.max(...subUnits.map((u) => u.vaccinationsDone), 1);

  // Livestock distribution percentages
  const total = metrics.totalLivestock || 1;
  const cattlePct = Math.round((metrics.cattleCount / total) * 100);
  const buffaloPct = Math.round((metrics.buffaloCount / total) * 100);
  const goatPct = Math.round((metrics.goatSheepCount / total) * 100);
  const poultryPct = Math.round((metrics.poultryCount / total) * 100);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* 1. Monthly Trends Bar Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs lg:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Monthly Vaccination & Insemination Trends</span>
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Historical performance for the current filtered scope
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 text-gray-600">
              <span className="w-3 h-3 rounded-xs bg-emerald-600 inline-block"></span>
              <span>Vaccinations</span>
            </span>
            <span className="flex items-center gap-1.5 text-gray-600">
              <span className="w-3 h-3 rounded-xs bg-blue-500 inline-block"></span>
              <span>AI Done</span>
            </span>
          </div>
        </div>

        {/* Bar Chart Visualization */}
        <div className="h-48 flex items-end justify-between gap-3 pt-6 px-2 border-b border-gray-100">
          {metrics.monthlyTrends.map((trend, idx) => {
            const vHeight = Math.max(12, Math.round((trend.vaccinations / maxVaccination) * 100));
            const aiHeight = Math.max(8, Math.round((trend.inseminations / (maxVaccination * 0.2)) * 100));

            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                <div className="w-full max-w-[40px] flex items-end justify-center gap-1 h-full">
                  {/* Vaccination bar */}
                  <div
                    style={{ height: \`\${vHeight}%\` }}
                    className="w-1/2 bg-emerald-600 hover:bg-emerald-500 rounded-t transition-all relative group-hover:shadow-md"
                  >
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-0.5 px-1.5 rounded whitespace-nowrap z-10 pointer-events-none">
                      {trend.vaccinations.toLocaleString()}
                    </div>
                  </div>
                  {/* Insemination bar */}
                  <div
                    style={{ height: \`\${Math.min(aiHeight, 100)}%\` }}
                    className="w-1/2 bg-blue-500 hover:bg-blue-400 rounded-t transition-all relative group-hover:shadow-md"
                  >
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-0.5 px-1.5 rounded whitespace-nowrap z-10 pointer-events-none">
                      {trend.inseminations.toLocaleString()}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-gray-600 mt-2">{trend.month}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Livestock Composition Breakdown */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-1">
            <PieIcon className="w-4 h-4 text-emerald-600" />
            <span>Livestock Breakdown</span>
          </h3>
          <p className="text-xs text-gray-500 mb-4">
            Proportion across current scoped territory
          </p>

          {/* Progress stack */}
          <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden flex mb-4 shadow-inner">
            <div style={{ width: \`\${cattlePct}%\` }} className="bg-blue-600" title={\`Cattle: \${cattlePct}%\`} />
            <div style={{ width: \`\${buffaloPct}%\` }} className="bg-indigo-500" title={\`Buffalo: \${buffaloPct}%\`} />
            <div style={{ width: \`\${goatPct}%\` }} className="bg-amber-500" title={\`Goat/Sheep: \${goatPct}%\`} />
            <div style={{ width: \`\${poultryPct}%\` }} className="bg-emerald-500" title={\`Poultry: \${poultryPct}%\`} />
          </div>

          {/* Legend Details */}
          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2 text-gray-700">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <span>Cattle ({cattlePct}%)</span>
              </span>
              <span className="font-bold text-gray-900">{metrics.cattleCount.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2 text-gray-700">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                <span>Buffalo ({buffaloPct}%)</span>
              </span>
              <span className="font-bold text-gray-900">{metrics.buffaloCount.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2 text-gray-700">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span>Goat & Sheep ({goatPct}%)</span>
              </span>
              <span className="font-bold text-gray-900">{metrics.goatSheepCount.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2 text-gray-700">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>Poultry ({poultryPct}%)</span>
              </span>
              <span className="font-bold text-gray-900">{metrics.poultryCount.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-500">
          <span>Total Scoped Population</span>
          <span className="font-black text-gray-900">{metrics.totalLivestock.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
};
`;
write('src/components/dashboard/TrendCharts.tsx', trendChartsCode);

// 12. Granular Data Table Component
const performanceTableCode = `'use client';

import React, { useState } from 'react';
import { useCurrentScope } from '@/context/ScopeContext';
import { useAuth } from '@/context/AuthContext';
import { ArrowUpDown, ChevronRight, Layers, MapPin } from 'lucide-react';
import { SubUnitPerformance } from '@/types/ardd';

export const PerformanceTable: React.FC = () => {
  const { subUnits, currentScope, drillDownToSubdivision, drillDownToBlock } = useCurrentScope();
  const { currentUser } = useAuth();
  const [sortField, setSortField] = useState<keyof SubUnitPerformance>('vaccinationsDone');
  const [sortAsc, setSortAsc] = useState(false);

  const sortedData = [...subUnits].sort((a, b) => {
    const valA = a[sortField] ?? 0;
    const valB = b[sortField] ?? 0;
    if (typeof valA === 'string' && typeof valB === 'string') {
      return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }
    return sortAsc ? Number(valA) - Number(valB) : Number(valB) - Number(valA);
  });

  const toggleSort = (field: keyof SubUnitPerformance) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  const handleRowClick = (item: SubUnitPerformance) => {
    if (item.type === 'Subdivision' && currentUser.role === 'DistrictHead') {
      drillDownToSubdivision(item.id);
    } else if (item.type === 'Block' && (currentUser.role === 'DistrictHead' || currentUser.role === 'SubdivisionHead')) {
      drillDownToBlock(item.id);
    }
  };

  const tableTitle =
    currentScope.level === 'District'
      ? 'Subdivision Performance Matrix'
      : currentScope.level === 'Subdivision'
      ? 'Block Level Breakdown'
      : 'Block Detailed Metrics';

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h3 className="text-sm font-bold text-gray-900">{tableTitle}</h3>
          <p className="text-xs text-gray-500 mt-0.5">
            {currentScope.level === 'Block'
              ? 'Inspecting single block metrics'
              : 'Click any row to drill down into deeper administrative levels'}
          </p>
        </div>
        <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
          {subUnits.length} {subUnits.length === 1 ? 'Unit' : 'Units'} in scope
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-gray-50 text-gray-600 uppercase font-semibold border-b border-gray-200">
            <tr>
              <th
                onClick={() => toggleSort('name')}
                className="px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>Unit Name</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => toggleSort('cattleCount')}
                className="px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-1">
                  <span>Cattle Count</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => toggleSort('vaccinationsDone')}
                className="px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-1">
                  <span>Vaccinations Done</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => toggleSort('vaccinationCoveragePercent')}
                className="px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-1">
                  <span>Target %</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => toggleSort('artificialInseminations')}
                className="px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-1">
                  <span>AI Done</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => toggleSort('milkProductionLitersDay')}
                className="px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-1">
                  <span>Milk (L/Day)</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-4 py-3 text-center">Alerts</th>
              {currentScope.level !== 'Block' && <th className="px-4 py-3 text-center">Action</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedData.map((item) => {
              const isClickable =
                (item.type === 'Subdivision' && currentUser.role === 'DistrictHead') ||
                (item.type === 'Block' && currentUser.role !== 'BlockHead');

              return (
                <tr
                  key={item.id}
                  onClick={() => isClickable && handleRowClick(item)}
                  className={\`\${isClickable ? 'cursor-pointer hover:bg-emerald-50/50' : ''} transition-colors\`}
                >
                  <td className="px-4 py-3 font-semibold text-gray-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span>{item.name}</span>
                    <span className="text-[10px] text-gray-400 font-normal">({item.type})</span>
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-gray-700">
                    {item.cattleCount.toLocaleString('en-IN')}
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-emerald-700">
                    {item.vaccinationsDone.toLocaleString('en-IN')}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                      {item.vaccinationCoveragePercent}%
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-blue-700">
                    {item.artificialInseminations.toLocaleString('en-IN')}
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-gray-800">
                    {item.milkProductionLitersDay.toLocaleString('en-IN')}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {item.diseaseAlerts > 0 ? (
                      <span className="bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded text-[10px]">
                        {item.diseaseAlerts} Alert
                      </span>
                    ) : (
                      <span className="text-gray-400 text-[10px]">None</span>
                    )}
                  </td>
                  {currentScope.level !== 'Block' && (
                    <td className="px-4 py-3 text-center">
                      {isClickable && (
                        <span className="inline-flex items-center gap-0.5 text-xs text-emerald-700 font-medium hover:underline">
                          <span>Drill</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
`;
write('src/components/dashboard/PerformanceTable.tsx', performanceTableCode);

// 13. Reports Screen (Scope-filtered reports table with search and mock exports)
const reportsViewCode = `'use client';

import React, { useState, useMemo } from 'react';
import { useCurrentScope } from '@/context/ScopeContext';
import { useAuth } from '@/context/AuthContext';
import { Breadcrumb } from '@/components/common/Breadcrumbs';
import { ScopeIndicator } from '@/components/common/ScopeIndicator';
import { FileText, Download, Search, Filter, Printer } from 'lucide-react';
import { getBlocksInScope, getSubdivisionById } from '@/data/mockData';

export const ReportsView: React.FC = () => {
  const { currentScope } = useCurrentScope();
  const { currentUser } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [exportNotice, setExportNotice] = useState<string | null>(null);

  // Derive reports strictly from the current scope's blocks
  const blocks = useMemo(() => getBlocksInScope(currentScope), [currentScope]);

  const reportRows = useMemo(() => {
    return blocks.map((b) => {
      const sub = getSubdivisionById(b.subdivisionId);
      return {
        blockId: b.id,
        blockName: b.name,
        subdivisionName: sub?.name ?? 'Subdivision',
        cattle: b.metrics.cattleCount,
        buffalo: b.metrics.buffaloCount,
        goatSheep: b.metrics.goatSheepCount,
        poultry: b.metrics.poultryCount,
        vaccinations: b.metrics.vaccinationsDone,
        vaccineCoverage:
          b.metrics.vaccinationTarget > 0
            ? Math.round((b.metrics.vaccinationsDone / b.metrics.vaccinationTarget) * 100)
            : 0,
        aiDone: b.metrics.artificialInseminations,
        milkLiters: b.metrics.milkProductionLitersDay,
        camps: b.metrics.veterinaryCampsOrganized,
        beneficiaries: b.metrics.schemeBeneficiaries,
      };
    });
  }, [blocks]);

  const filteredReports = useMemo(() => {
    return reportRows.filter((r) => {
      const matchSearch =
        r.blockName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.subdivisionName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchSearch;
    });
  }, [reportRows, searchTerm]);

  const handleExport = (format: string) => {
    setExportNotice(\`Simulating \${format.toUpperCase()} export for \${blocks.length} records in current scope...\`);
    setTimeout(() => {
      setExportNotice(null);
    }, 2500);
  };

  return (
    <div className="space-y-6">
      {/* Scope Indicator & Breadcrumbs */}
      <ScopeIndicator />
      <Breadcrumb />

      {/* Reports Header & Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" />
              <span>Departmental Performance Register & Monthly Scoped Reports</span>
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Data filtered strictly to the active scope: {blocks.length} reporting blocks included
            </p>
          </div>

          {/* Export Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleExport('csv')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-lg border border-emerald-300 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={() => handleExport('pdf')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-800 text-xs font-semibold rounded-lg border border-gray-300 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print PDF Report</span>
            </button>
          </div>
        </div>

        {exportNotice && (
          <div className="mt-3 p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg animate-in fade-in">
            {exportNotice}
          </div>
        )}

        {/* Filter Bar */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <div className="relative flex-1 min-w-[240px] max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by block or subdivision name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="text-xs text-gray-500">
            Showing <strong>{filteredReports.length}</strong> of <strong>{reportRows.length}</strong> records
          </div>
        </div>
      </div>

      {/* Reports Data Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 text-gray-700 uppercase font-semibold border-b border-gray-200">
              <tr>
                <th className="px-4 py-3">Block Name</th>
                <th className="px-4 py-3">Subdivision</th>
                <th className="px-4 py-3 text-right">Cattle</th>
                <th className="px-4 py-3 text-right">Goat/Sheep</th>
                <th className="px-4 py-3 text-right">Poultry</th>
                <th className="px-4 py-3 text-right">Vaccinations</th>
                <th className="px-4 py-3 text-right">Coverage %</th>
                <th className="px-4 py-3 text-right">AI Done</th>
                <th className="px-4 py-3 text-right">Milk (L/Day)</th>
                <th className="px-4 py-3 text-right">Camps</th>
                <th className="px-4 py-3 text-right">Beneficiaries</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredReports.map((row) => (
                <tr key={row.blockId} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-bold text-gray-900">{row.blockName}</td>
                  <td className="px-4 py-3 text-gray-600">{row.subdivisionName}</td>
                  <td className="px-4 py-3 text-right font-medium">{row.cattle.toLocaleString('en-IN')}</td>
                  <td className="px-4 py-3 text-right text-gray-600">{row.goatSheep.toLocaleString('en-IN')}</td>
                  <td className="px-4 py-3 text-right text-gray-600">{row.poultry.toLocaleString('en-IN')}</td>
                  <td className="px-4 py-3 text-right font-medium text-emerald-700">{row.vaccinations.toLocaleString('en-IN')}</td>
                  <td className="px-4 py-3 text-right">
                    <span className="font-bold bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded border border-emerald-200">
                      {row.vaccineCoverage}%
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right text-blue-700 font-medium">{row.aiDone.toLocaleString('en-IN')}</td>
                  <td className="px-4 py-3 text-right text-gray-800">{row.milkLiters.toLocaleString('en-IN')}</td>
                  <td className="px-4 py-3 text-right text-purple-700 font-medium">{row.camps}</td>
                  <td className="px-4 py-3 text-right text-gray-800">{row.beneficiaries}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
`;
write('src/components/reports/ReportsView.tsx', reportsViewCode);

// 14. Administration Module (Strictly for Mock Administrator only)
const adminModuleCode = `'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { AccessDenied } from '@/components/common/AccessDenied';
import { Shield, Users, Database, Settings, UserPlus, CheckCircle2, Sliders, History } from 'lucide-react';
import { PRESET_USERS, mockDistricts } from '@/data/mockData';

interface AdminModuleProps {
  onBackToDashboard: () => void;
}

export const AdminModule: React.FC<AdminModuleProps> = ({ onBackToDashboard }) => {
  const { currentUser } = useAuth();
  const [activeSubTab, setActiveSubTab] = useState<'users' | 'schemes' | 'logs'>('users');
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);

  // 9. Permission Guard: Non-admin users see explicit AccessDenied screen, not a silent redirect
  if (currentUser.role !== 'MockAdministrator') {
    return <AccessDenied onBackToDashboard={onBackToDashboard} />;
  }

  const triggerSaveNotice = (msg: string) => {
    setSaveSuccess(msg);
    setTimeout(() => setSaveSuccess(null), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Admin Module Banner */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-950 text-white rounded-xl p-5 shadow-md border border-purple-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-800 border border-purple-700 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-purple-300" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Directorate Master Administration
              </h2>
              <p className="text-xs text-purple-200/80 mt-0.5">
                Role-Based Access Control (RBAC), Scheme Configurations, and Audit Logs
              </p>
            </div>
          </div>

          <div className="text-right text-xs text-purple-300">
            <span>Admin Status: <strong>Authorized HQ Superuser</strong></span>
          </div>
        </div>
      </div>

      {/* Admin Subtabs */}
      <div className="bg-white rounded-xl border border-gray-200 p-2 shadow-xs flex gap-2">
        <button
          onClick={() => setActiveSubTab('users')}
          className={\`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors \${
            activeSubTab === 'users'
              ? 'bg-purple-50 text-purple-800 border border-purple-200'
              : 'text-gray-600 hover:bg-gray-50'
          }\`}
        >
          <Users className="w-4 h-4" />
          <span>User & Role Management</span>
        </button>

        <button
          onClick={() => setActiveSubTab('schemes')}
          className={\`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors \${
            activeSubTab === 'schemes'
              ? 'bg-purple-50 text-purple-800 border border-purple-200'
              : 'text-gray-600 hover:bg-gray-50'
          }\`}
        >
          <Sliders className="w-4 h-4" />
          <span>State Livestock Schemes</span>
        </button>

        <button
          onClick={() => setActiveSubTab('logs')}
          className={\`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors \${
            activeSubTab === 'logs'
              ? 'bg-purple-50 text-purple-800 border border-purple-200'
              : 'text-gray-600 hover:bg-gray-50'
          }\`}
        >
          <History className="w-4 h-4" />
          <span>System Audit Log</span>
        </button>
      </div>

      {saveSuccess && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{saveSuccess}</span>
        </div>
      )}

      {/* Subtab 1: Users */}
      {activeSubTab === 'users' && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Provisioned Officers & Hierarchy Mapping</h3>
              <p className="text-xs text-gray-500 mt-0.5">Preset users mapped to Tripura departmental hierarchy</p>
            </div>
            <button
              onClick={() => triggerSaveNotice('New user invitation created in mock state.')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Add Officer</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50 text-gray-600 uppercase font-semibold border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3">Officer Name</th>
                  <th className="px-4 py-3">Designation</th>
                  <th className="px-4 py-3">Assigned Role</th>
                  <th className="px-4 py-3">Boundary Scope</th>
                  <th className="px-4 py-3">Official Email</th>
                  <th className="px-4 py-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {PRESET_USERS.map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-bold text-gray-900">{u.name}</td>
                    <td className="px-4 py-3 text-gray-700">{u.designation}</td>
                    <td className="px-4 py-3">
                      <span className="bg-purple-50 text-purple-800 border border-purple-200 font-bold px-2 py-0.5 rounded text-[10px]">
                        {u.role}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{u.locationLabel}</td>
                    <td className="px-4 py-3 text-gray-500 font-mono text-[11px]">{u.email}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Subtab 2: Schemes */}
      {activeSubTab === 'schemes' && (
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-gray-900">Tripura ARDD Active Livestock Welfare Schemes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-xs text-gray-900">Mukhyamantri Unnat Godhan Prakalpa</h4>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Active</span>
              </div>
              <p className="text-xs text-gray-600 mt-2">
                Promoting sex-sorted semen artificial insemination across 8 districts of Tripura for high milk yield.
              </p>
              <div className="mt-3 text-[11px] text-gray-500 flex justify-between">
                <span>Target: 100,000 Cows</span>
                <span>Subsidy: 75%</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-xs text-gray-900">Tripura Rural Fodder Development Mission</h4>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Active</span>
              </div>
              <p className="text-xs text-gray-600 mt-2">
                Mini kit distribution of hybrid Napier fodder seeds to smallholder farmers and self-help groups.
              </p>
              <div className="mt-3 text-[11px] text-gray-500 flex justify-between">
                <span>Target: 25,000 Beneficiaries</span>
                <span>Subsidy: 100%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subtab 3: Logs */}
      {activeSubTab === 'logs' && (
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs space-y-3">
          <h3 className="text-sm font-bold text-gray-900">System Activity & Scope Access Logs</h3>
          <div className="space-y-2 font-mono text-xs">
            <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-200 flex justify-between">
              <span className="text-gray-700">[2026-08-28 21:30:12] User <strong>dvo.west</strong> navigated scope to <em>dist-west-tripura</em></span>
              <span className="text-emerald-600 font-bold">200 OK</span>
            </div>
            <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-200 flex justify-between">
              <span className="text-gray-700">[2026-08-28 21:28:44] User <strong>sdvo.sadar</strong> filtered blocks under <em>sub-sadar</em></span>
              <span className="text-emerald-600 font-bold">200 OK</span>
            </div>
            <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-200 flex justify-between">
              <span className="text-gray-700">[2026-08-28 21:25:01] User <strong>bvo.dukli</strong> accessed dashboard (fixed block <em>blk-dukli</em>)</span>
              <span className="text-emerald-600 font-bold">200 OK</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
`;
write('src/components/admin/AdminModule.tsx', adminModuleCode);

// 15. Mock Login & Preset Role Switcher Modal Screen (Rule 3)
const loginModalCode = `'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { CurrentUser } from '@/types/ardd';
import { Shield, UserCheck, Check, AlertTriangle, X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { currentUser, presetUsers, loginAs, loginAsEmptySubdivisionDemo } = useAuth();

  if (!isOpen) return null;

  const handleSelect = (user: CurrentUser) => {
    loginAs(user);
    onClose();
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'DistrictHead':
        return 'bg-blue-600 text-white';
      case 'SubdivisionHead':
        return 'bg-emerald-600 text-white';
      case 'BlockHead':
        return 'bg-amber-600 text-white';
      case 'MockAdministrator':
        return 'bg-purple-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-gray-200 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-3 font-bold text-xl">
            TR
          </div>
          <h2 className="text-xl font-bold text-gray-900">
            Mock Login & Role Switcher
          </h2>
          <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
            Select one of the 4 preset ARDD Tripura user profiles to immediately review the interface, scoping constraints, and role permissions.
          </p>
        </div>

        <div className="space-y-3">
          {presetUsers.map((user) => {
            const isSelected = currentUser.id === user.id;

            return (
              <button
                key={user.id}
                onClick={() => handleSelect(user)}
                className={\`w-full text-left p-3.5 rounded-xl border-2 transition-all flex items-center justify-between group \${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50/70 shadow-xs'
                    : 'border-gray-200 hover:border-emerald-300 hover:bg-gray-50'
                }\`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={\`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm shadow-xs \${getRoleColor(
                      user.role
                    )}\`}
                  >
                    {user.name.split(' ').pop()?.[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-gray-900">{user.name}</span>
                      {isSelected && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-600 text-white px-2 py-0.2 rounded-full">
                          <Check className="w-3 h-3" /> Logged In
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-medium text-emerald-800">{user.designation}</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">{user.locationLabel}</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-bold text-gray-600 group-hover:text-emerald-700 transition-colors">
                    Login →
                  </span>
                </div>
              </button>
            );
          })}

          {/* Empty subdivision edge case */}
          <button
            onClick={() => {
              loginAsEmptySubdivisionDemo();
              onClose();
            }}
            className="w-full text-left p-3 rounded-xl border border-amber-300 bg-amber-50/60 hover:bg-amber-100/70 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-amber-900">
                  Edge Case Demo: Empty Subdivision (0 Blocks)
                </div>
                <div className="text-[11px] text-amber-700">
                  Logs in as Dr. Ratan Sen in Sabroom Special Zone to verify empty-state rendering
                </div>
              </div>
            </div>
            <span className="text-xs font-bold text-amber-800">Test →</span>
          </button>
        </div>
      </div>
    </div>
  );
};
`;
write('src/components/auth/LoginModal.tsx', loginModalCode);

// 3.5 Block Data Entry Modal & Floating Action Form (Only visible to BlockHead)
const blockDataEntryCode = `'use client';

import React, { useState } from 'react';
import { useCurrentScope } from '@/context/ScopeContext';
import { useAuth } from '@/context/AuthContext';
import { PlusCircle, Save, X, CheckCircle2, AlertCircle, Syringe, Milk, Activity, HeartHandshake, ShieldCheck } from 'lucide-react';
import { getBlockById, getSubdivisionById, getDistrictById } from '@/data/mockData';

interface BlockDataEntryProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BlockDataEntry: React.FC<BlockDataEntryProps> = ({ isOpen, onClose }) => {
  const { currentUser } = useAuth();
  const { currentScope, updateBlockMetrics } = useCurrentScope();

  // STRICT ROLE GUARD: Only BlockHead role is authorized
  if (currentUser.role !== 'BlockHead' || !isOpen) {
    return null;
  }

  const activeBlock = getBlockById(currentUser.blockId);
  const sub = getSubdivisionById(activeBlock?.subdivisionId);
  const dist = getDistrictById(activeBlock?.districtId);

  // Form State initialized with current block values
  const [formData, setFormData] = useState({
    cattleCount: activeBlock?.metrics.cattleCount || 0,
    buffaloCount: activeBlock?.metrics.buffaloCount || 0,
    goatSheepCount: activeBlock?.metrics.goatSheepCount || 0,
    poultryCount: activeBlock?.metrics.poultryCount || 0,
    vaccinationsDone: activeBlock?.metrics.vaccinationsDone || 0,
    vaccinationTarget: activeBlock?.metrics.vaccinationTarget || 0,
    artificialInseminations: activeBlock?.metrics.artificialInseminations || 0,
    milkProductionLitersDay: activeBlock?.metrics.milkProductionLitersDay || 0,
    veterinaryCampsOrganized: activeBlock?.metrics.veterinaryCampsOrganized || 0,
    schemeBeneficiaries: activeBlock?.metrics.schemeBeneficiaries || 0,
    diseaseAlerts: activeBlock?.metrics.diseaseAlerts || 0,
  });

  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: Math.max(0, isNaN(value) ? 0 : value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser.blockId) return;

    setIsSubmitting(true);

    try {
      updateBlockMetrics(currentUser.blockId, formData);
      setNotification({
        type: 'success',
        message: \`Field data successfully recorded and aggregated for \${activeBlock?.name}!\`,
      });
      setTimeout(() => {
        setIsSubmitting(false);
        onClose();
        setNotification(null);
      }, 1200);
    } catch (err) {
      setIsSubmitting(false);
      setNotification({
        type: 'error',
        message: 'Failed to update block records. Please retry.',
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-gray-200 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-5">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
            <PlusCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-gray-900">
                Block Veterinary Officer Data Entry Portal
              </h2>
              <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-200 uppercase">
                Block Head Only
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">
              Assigned to: <strong className="text-gray-800">{activeBlock?.name}</strong> • {sub?.name} • {dist?.name}
            </p>
          </div>
        </div>

        {/* Feedback Alert */}
        {notification && (
          <div
            className={\`mb-4 p-3 rounded-xl text-xs flex items-center gap-2 \${
              notification.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }\`}
          >
            {notification.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            )}
            <span>{notification.message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Section 1: Livestock Census Count */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-blue-600" />
              <span>1. Livestock Population Count</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Cattle Count</label>
                <input
                  type="number"
                  value={formData.cattleCount}
                  onChange={(e) => handleChange('cattleCount', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Buffalo Count</label>
                <input
                  type="number"
                  value={formData.buffaloCount}
                  onChange={(e) => handleChange('buffaloCount', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Goat & Sheep</label>
                <input
                  type="number"
                  value={formData.goatSheepCount}
                  onChange={(e) => handleChange('goatSheepCount', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Poultry Count</label>
                <input
                  type="number"
                  value={formData.poultryCount}
                  onChange={(e) => handleChange('poultryCount', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
            </div>
          </div>

          {/* Section 2: Vaccination & Breeding Services */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Syringe className="w-4 h-4 text-emerald-600" />
              <span>2. Veterinary Field Operations & Insemination</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Vaccinations Administered</label>
                <input
                  type="number"
                  value={formData.vaccinationsDone}
                  onChange={(e) => handleChange('vaccinationsDone', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Vaccination Target</label>
                <input
                  type="number"
                  value={formData.vaccinationTarget}
                  onChange={(e) => handleChange('vaccinationTarget', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">AI Done (Breed Mission)</label>
                <input
                  type="number"
                  value={formData.artificialInseminations}
                  onChange={(e) => handleChange('artificialInseminations', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
            </div>
          </div>

          {/* Section 3: Milk & Health Camps */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Milk className="w-4 h-4 text-amber-600" />
              <span>3. Production & Welfare Services</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Daily Milk Production (Liters)</label>
                <input
                  type="number"
                  value={formData.milkProductionLitersDay}
                  onChange={(e) => handleChange('milkProductionLitersDay', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Health Camps Organized</label>
                <input
                  type="number"
                  value={formData.veterinaryCampsOrganized}
                  onChange={(e) => handleChange('veterinaryCampsOrganized', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Scheme Beneficiaries</label>
                <input
                  type="number"
                  value={formData.schemeBeneficiaries}
                  onChange={(e) => handleChange('schemeBeneficiaries', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Directly updates in-memory single source of truth</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors disabled:opacity-50"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Recording...' : 'Submit & Recalculate KPIs'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
`;
write('src/components/dashboard/BlockDataEntry.tsx', blockDataEntryCode);

// 16. App Page (Main dashboard layout, screen routing, edge case guards)
const mainPageCode = `'use client';

import React, { useState } from 'react';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { ScopeProvider, useCurrentScope } from '@/context/ScopeContext';
import { Header } from '@/components/common/Header';
import { ScopeIndicator } from '@/components/common/ScopeIndicator';
import { Breadcrumb } from '@/components/common/Breadcrumbs';
import { ScopeSelector } from '@/components/dashboard/ScopeSelector';
import { KPICards } from '@/components/dashboard/KPICards';
import { TrendCharts } from '@/components/dashboard/TrendCharts';
import { PerformanceTable } from '@/components/dashboard/PerformanceTable';
import { ReportsView } from '@/components/reports/ReportsView';
import { AdminModule } from '@/components/admin/AdminModule';
import { LoginModal } from '@/components/auth/LoginModal';
import { EmptyState } from '@/components/common/EmptyState';
import { BlockDataEntry } from '@/components/dashboard/BlockDataEntry';
import { PlusCircle, FileSpreadsheet } from 'lucide-react';

function MainPortal() {
  const { currentUser } = useAuth();
  const { currentScope, metrics } = useCurrentScope();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'reports' | 'admin'>(
    currentUser.role === 'MockAdministrator' ? 'admin' : 'dashboard'
  );
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [dataEntryModalOpen, setDataEntryModalOpen] = useState(false);

  // Check if current scope has zero blocks (Edge case demonstration)
  const isScopeEmpty = metrics.totalBlocks === 0;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans text-gray-900 antialiased">
      {/* 8. Shell Header */}
      <Header
        onOpenRoleModal={() => setLoginModalOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* TAB 1: DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Scope Visual Indicator & Interactive Breadcrumbs */}
            <ScopeIndicator />
            <Breadcrumb />

            {/* BLOCK HEAD ONLY: Data Entry Action Banner */}
            {currentUser.role === 'BlockHead' && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-amber-950">
                      Block Field Data Entry (Authorized Action)
                    </h3>
                    <p className="text-xs text-amber-800 mt-0.5">
                      Input newly reported vaccination rounds, inseminations, or milk logs for your assigned block.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setDataEntryModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold rounded-lg shadow-xs transition-colors shrink-0"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Input New Block Data</span>
                </button>
              </div>
            )}

            {/* Role-Specific Scope Drilldown Bar (Hidden for Block Head & Admin) */}
            <ScopeSelector />

            {/* Edge Case 9: Empty blocks in subdivision */}
            {isScopeEmpty ? (
              <EmptyState
                title="Zero Blocks Registered in this Boundary"
                description="This administrative zone does not have any active veterinary blocks or livestock records assigned. The dashboard gracefully handles zero-children states without crashing."
              />
            ) : (
              <>
                {/* Dynamic KPI Cards derived from current scope */}
                <KPICards />

                {/* Scoped Charts */}
                <TrendCharts />

                {/* Performance Matrix Table */}
                <PerformanceTable />
              </>
            )}
          </div>
        )}

        {/* TAB 2: REPORTS */}
        {activeTab === 'reports' && (
          <div className="animate-in fade-in duration-200">
            <ReportsView />
          </div>
        )}

        {/* TAB 3: ADMINISTRATION */}
        {activeTab === 'admin' && (
          <div className="animate-in fade-in duration-200">
            <AdminModule onBackToDashboard={() => setActiveTab('dashboard')} />
          </div>
        )}
      </main>

      {/* Block Head Data Entry Modal (Locked to Block Head) */}
      <BlockDataEntry
        isOpen={dataEntryModalOpen}
        onClose={() => setDataEntryModalOpen(false)}
      />

      {/* Login & Role Switcher Modal */}
      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />

      {/* Government Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 px-4 text-center text-xs text-gray-500 mt-auto">
        <p>© 2026 Animal Resources Development Department (ARDD), Government of Tripura. All rights reserved.</p>
        <p className="text-[11px] text-gray-400 mt-1">High-Fidelity Frontend Scoping Prototype • Pure Browser Client-Side State</p>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <AuthProvider>
      <ScopeProvider>
        <MainPortal />
      </ScopeProvider>
    </AuthProvider>
  );
}
`;
write('src/app/page.tsx', mainPageCode);

console.log('All application files generated successfully with Block Head Data Entry capability!');
