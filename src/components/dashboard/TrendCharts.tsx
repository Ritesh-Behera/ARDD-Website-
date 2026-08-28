'use client';

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
                    style={{ height: `${vHeight}%` }}
                    className="w-1/2 bg-emerald-600 hover:bg-emerald-500 rounded-t transition-all relative group-hover:shadow-md"
                  >
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-0.5 px-1.5 rounded whitespace-nowrap z-10 pointer-events-none">
                      {trend.vaccinations.toLocaleString()}
                    </div>
                  </div>
                  {/* Insemination bar */}
                  <div
                    style={{ height: `${Math.min(aiHeight, 100)}%` }}
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
            <div style={{ width: `${cattlePct}%` }} className="bg-blue-600" title={`Cattle: ${cattlePct}%`} />
            <div style={{ width: `${buffaloPct}%` }} className="bg-indigo-500" title={`Buffalo: ${buffaloPct}%`} />
            <div style={{ width: `${goatPct}%` }} className="bg-amber-500" title={`Goat/Sheep: ${goatPct}%`} />
            <div style={{ width: `${poultryPct}%` }} className="bg-emerald-500" title={`Poultry: ${poultryPct}%`} />
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
