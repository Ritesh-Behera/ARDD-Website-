'use client';

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
              <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${badge.color}`}>
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
