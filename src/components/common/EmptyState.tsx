'use client';

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
