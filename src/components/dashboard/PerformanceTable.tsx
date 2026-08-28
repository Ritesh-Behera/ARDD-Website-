'use client';

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
                  className={`${isClickable ? 'cursor-pointer hover:bg-emerald-50/50' : ''} transition-colors`}
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
