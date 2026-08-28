'use client';

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
