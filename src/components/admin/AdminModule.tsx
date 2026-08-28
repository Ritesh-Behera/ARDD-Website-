'use client';

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
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
            activeSubTab === 'users'
              ? 'bg-purple-50 text-purple-800 border border-purple-200'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>User & Role Management</span>
        </button>

        <button
          onClick={() => setActiveSubTab('schemes')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
            activeSubTab === 'schemes'
              ? 'bg-purple-50 text-purple-800 border border-purple-200'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>State Livestock Schemes</span>
        </button>

        <button
          onClick={() => setActiveSubTab('logs')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
            activeSubTab === 'logs'
              ? 'bg-purple-50 text-purple-800 border border-purple-200'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
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
