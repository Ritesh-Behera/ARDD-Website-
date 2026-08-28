'use client';

import React, { useState } from 'react';
import { RefreshCw, CheckCircle2 } from 'lucide-react';

export const SyncStatus: React.FC = () => {
  const [syncing, setSyncing] = useState(false);
  const [lastSyncedTime, setLastSyncedTime] = useState('Just now');

  const triggerSync = () => {
    if (syncing) return;
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setLastSyncedTime('Just now');
    }, 900);
  };

  return (
    <button
      onClick={triggerSync}
      title="Simulate data sync with State Central Database"
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600 transition-colors"
    >
      <RefreshCw className={`w-3 h-3 text-gray-500 ${syncing ? 'animate-spin text-emerald-600' : ''}`} />
      <span>{syncing ? 'Syncing...' : `Synced: ${lastSyncedTime}`}</span>
    </button>
  );
};
