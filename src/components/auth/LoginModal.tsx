'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { CurrentUser } from '@/types/ardd';
import { Shield, UserCheck, Check, AlertTriangle, X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { currentUser, presetUsers, loginAs, loginAsEmptySubdivisionDemo } = useAuth();

  if (!isOpen) return null;

  const handleSelect = (user: CurrentUser) => {
    loginAs(user);
    onClose();
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'DistrictHead':
        return 'bg-blue-600 text-white';
      case 'SubdivisionHead':
        return 'bg-emerald-600 text-white';
      case 'BlockHead':
        return 'bg-amber-600 text-white';
      case 'MockAdministrator':
        return 'bg-purple-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-gray-200 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-3 font-bold text-xl">
            TR
          </div>
          <h2 className="text-xl font-bold text-gray-900">
            Mock Login & Role Switcher
          </h2>
          <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
            Select one of the 4 preset ARDD Tripura user profiles to immediately review the interface, scoping constraints, and role permissions.
          </p>
        </div>

        <div className="space-y-3">
          {presetUsers.map((user) => {
            const isSelected = currentUser.id === user.id;

            return (
              <button
                key={user.id}
                onClick={() => handleSelect(user)}
                className={`w-full text-left p-3.5 rounded-xl border-2 transition-all flex items-center justify-between group ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50/70 shadow-xs'
                    : 'border-gray-200 hover:border-emerald-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm shadow-xs ${getRoleColor(
                      user.role
                    )}`}
                  >
                    {user.name.split(' ').pop()?.[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-gray-900">{user.name}</span>
                      {isSelected && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-600 text-white px-2 py-0.2 rounded-full">
                          <Check className="w-3 h-3" /> Logged In
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-medium text-emerald-800">{user.designation}</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">{user.locationLabel}</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-bold text-gray-600 group-hover:text-emerald-700 transition-colors">
                    Login →
                  </span>
                </div>
              </button>
            );
          })}

          {/* Empty subdivision edge case */}
          <button
            onClick={() => {
              loginAsEmptySubdivisionDemo();
              onClose();
            }}
            className="w-full text-left p-3 rounded-xl border border-amber-300 bg-amber-50/60 hover:bg-amber-100/70 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-amber-900">
                  Edge Case Demo: Empty Subdivision (0 Blocks)
                </div>
                <div className="text-[11px] text-amber-700">
                  Logs in as Dr. Ratan Sen in Sabroom Special Zone to verify empty-state rendering
                </div>
              </div>
            </div>
            <span className="text-xs font-bold text-amber-800">Test →</span>
          </button>
        </div>
      </div>
    </div>
  );
};
