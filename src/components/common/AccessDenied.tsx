'use client';

import React from 'react';
import { ShieldAlert, ArrowLeft, KeyRound } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

interface AccessDeniedProps {
  onBackToDashboard: () => void;
}

export const AccessDenied: React.FC<AccessDeniedProps> = ({ onBackToDashboard }) => {
  const { currentUser, loginByPresetId } = useAuth();

  return (
    <div className="bg-white rounded-2xl border border-red-200 p-8 text-center max-w-xl mx-auto my-12 shadow-md">
      <div className="w-16 h-16 bg-red-100 border-2 border-red-200 rounded-full flex items-center justify-center mx-auto text-red-600 mb-4">
        <ShieldAlert className="w-8 h-8" />
      </div>
      <div className="inline-block bg-red-50 text-red-700 border border-red-200 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
        403 Forbidden Access
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Access Denied: Administration Module
      </h2>
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        Your current role (<strong className="text-gray-900">{currentUser.designation}</strong>) does not have authorization to view the Directorate Administration and Master Configuration module. Only users with the <span className="font-semibold text-purple-700">Mock Administrator</span> role are permitted.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          onClick={onBackToDashboard}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold rounded-lg transition-colors border border-gray-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Dashboard</span>
        </button>

        <button
          onClick={() => loginByPresetId('user-mock-admin')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold rounded-lg transition-colors shadow-xs"
        >
          <KeyRound className="w-4 h-4" />
          <span>Switch to Mock Administrator</span>
        </button>
      </div>
    </div>
  );
};
