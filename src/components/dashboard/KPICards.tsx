'use client';

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
          <span className={`font-bold ${metrics.diseaseAlerts > 0 ? 'text-red-600' : 'text-emerald-600'}`}>
            {metrics.diseaseAlerts > 0 ? `${metrics.diseaseAlerts} Outbreak Alert` : '0 Outbreaks'}
          </span>
        </div>
      </div>
    </div>
  );
};
