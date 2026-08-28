'use client';

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
