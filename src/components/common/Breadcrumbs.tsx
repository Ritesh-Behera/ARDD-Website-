'use client';

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
                className={`px-1.5 py-0.5 rounded font-semibold ${
                  isLast
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    : 'text-gray-600'
                }`}
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
