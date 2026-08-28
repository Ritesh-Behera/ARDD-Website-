'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useCurrentScope } from '@/context/ScopeContext';
import { OfflineIndicator } from '@/components/common/OfflineIndicator';
import { SyncStatus } from '@/components/common/SyncStatus';
import { ScopeIndicator } from '@/components/common/ScopeIndicator';
import { Shield, UserCircle, LogOut, ChevronDown, Check, Building2, Layers, AlertTriangle } from 'lucide-react';

interface HeaderProps {
  onOpenRoleModal: () => void;
  activeTab: 'dashboard' | 'reports' | 'admin';
  setActiveTab: (tab: 'dashboard' | 'reports' | 'admin') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRoleModal, activeTab, setActiveTab }) => {
  const { currentUser, presetUsers, loginAs, loginAsEmptySubdivisionDemo } = useAuth();
  const { currentScope } = useCurrentScope();
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const getRoleBadgeStyle = (role: string) => {
    switch (role) {
      case 'DistrictHead':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'SubdivisionHead':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'BlockHead':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'MockAdministrator':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case 'DistrictHead':
        return 'District Head';
      case 'SubdivisionHead':
        return 'Subdivision Head';
      case 'BlockHead':
        return 'Block Head';
      case 'MockAdministrator':
        return 'Mock Administrator';
      default:
        return role;
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      {/* Top Govt Bar */}
      <div className="bg-emerald-800 text-emerald-50 px-4 py-1 text-xs flex justify-between items-center font-medium">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Government of Tripura • Animal Resources Development Department (ARDD)</span>
        </div>
        <div className="flex items-center gap-4 text-emerald-100 text-xs">
          <span>State Animal Disease Surveillance & Livestock MIS</span>
          <span className="text-emerald-300">|</span>
          <span>Helpdesk: 1800-345-3644</span>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Department Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-lg shadow-md border-2 border-emerald-600">
              TR
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-gray-900 leading-tight">
                  ARDD Tripura Portal
                </h1>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] uppercase font-bold px-2 py-0.5 rounded border border-emerald-200">
                  Prototype
                </span>
              </div>
              <p className="text-xs text-gray-500 font-medium">
                Integrated Livestock & Veterinary Management System
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'dashboard'
                  ? 'bg-emerald-50 text-emerald-800 font-semibold border-b-2 border-emerald-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'reports'
                  ? 'bg-emerald-50 text-emerald-800 font-semibold border-b-2 border-emerald-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Reports & Registers
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === 'admin'
                  ? 'bg-purple-50 text-purple-800 font-semibold border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Administration</span>
              {currentUser.role !== 'MockAdministrator' && (
                <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.2 rounded border border-gray-200">
                  Locked
                </span>
              )}
            </button>
          </nav>

          {/* Status Indicators & User Switcher */}
          <div className="flex items-center gap-3">
            {/* 8. Reusable Status Components */}
            <div className="hidden lg:flex items-center gap-2">
              <OfflineIndicator />
              <SyncStatus />
            </div>

            {/* Quick Role Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-all text-left"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                  {currentUser.name.split(' ').pop()?.[0] || 'U'}
                </div>
                <div className="hidden sm:block">
                  <div className="text-xs font-semibold text-gray-800 flex items-center gap-1.5">
                    <span>{currentUser.name}</span>
                  </div>
                  <div className="text-[11px] text-gray-500 flex items-center gap-1">
                    <span className={`inline-block px-1.5 py-0.2 rounded text-[10px] font-medium border ${getRoleBadgeStyle(currentUser.role)}`}>
                      {getRoleDisplayName(currentUser.role)}
                    </span>
                  </div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </button>

              {/* Preset Role Switcher Dropdown Menu */}
              {roleDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setRoleDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                    <div className="px-3 py-2 border-b border-gray-100">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Switch Active Role (Mock Auth)
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5">
                        Test strict scope hierarchy across all 4 system roles
                      </div>
                    </div>

                    <div className="py-1">
                      {presetUsers.map((preset) => {
                        const isCurrent = currentUser.id === preset.id;
                        return (
                          <button
                            key={preset.id}
                            onClick={() => {
                              loginAs(preset);
                              setRoleDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 flex items-start justify-between hover:bg-emerald-50/60 transition-colors ${
                              isCurrent ? 'bg-emerald-50 border-l-4 border-emerald-600' : ''
                            }`}
                          >
                            <div className="flex-1 pr-2">
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold text-gray-900">{preset.name}</span>
                                {isCurrent && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                              </div>
                              <div className="text-[11px] text-emerald-700 font-medium">{preset.designation}</div>
                              <div className="text-[10px] text-gray-500 mt-0.5">{preset.locationLabel}</div>
                            </div>
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border whitespace-nowrap ${getRoleBadgeStyle(preset.role)}`}>
                              {getRoleDisplayName(preset.role)}
                            </span>
                          </button>
                        );
                      })}

                      {/* Edge case demo button */}
                      <div className="border-t border-gray-100 my-1 pt-1">
                        <button
                          onClick={() => {
                            loginAsEmptySubdivisionDemo();
                            setRoleDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-1.5 flex items-center gap-2 text-xs text-amber-800 hover:bg-amber-50"
                        >
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                          <span>Test Edge Case: Empty Subdivision (0 Blocks)</span>
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 px-3 py-1.5 flex justify-between items-center text-xs">
                      <button
                        onClick={() => {
                          setRoleDropdownOpen(false);
                          onOpenRoleModal();
                        }}
                        className="text-emerald-700 hover:underline font-medium"
                      >
                        Open Full Role Switcher Modal
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
