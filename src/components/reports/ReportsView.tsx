'use client';

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
    setExportNotice(`Simulating ${format.toUpperCase()} export for ${blocks.length} records in current scope...`);
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
