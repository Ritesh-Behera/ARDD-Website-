'use client';

import React, { useState } from 'react';
import { Wifi, WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <button
      onClick={() => setIsOnline(!isOnline)}
      title="Click to simulate offline / online network state"
      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
        isOnline
          ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
          : 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100 animate-pulse'
      }`}
    >
      {isOnline ? (
        <>
          <Wifi className="w-3.5 h-3.5 text-emerald-600" />
          <span>Online</span>
        </>
      ) : (
        <>
          <WifiOff className="w-3.5 h-3.5 text-amber-600" />
          <span>Offline Mode</span>
        </>
      )}
    </button>
  );
};
