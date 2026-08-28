'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CurrentUser } from '@/types/ardd';
import { PRESET_USERS, EMPTY_SUBDIVISION_USER } from '@/data/mockData';

interface AuthContextType {
  currentUser: CurrentUser;
  presetUsers: CurrentUser[];
  loginAs: (user: CurrentUser) => void;
  loginByPresetId: (presetId: string) => void;
  loginAsEmptySubdivisionDemo: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Default logged in as District Head (West Tripura)
  const [currentUser, setCurrentUser] = useState<CurrentUser>(PRESET_USERS[0]);

  const loginAs = (user: CurrentUser) => {
    setCurrentUser(user);
  };

  const loginByPresetId = (presetId: string) => {
    const found = PRESET_USERS.find((u) => u.id === presetId);
    if (found) {
      setCurrentUser(found);
    }
  };

  const loginAsEmptySubdivisionDemo = () => {
    setCurrentUser(EMPTY_SUBDIVISION_USER);
  };

  const logout = () => {
    // Reset to District Head preset or show login modal
    setCurrentUser(PRESET_USERS[0]);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        presetUsers: PRESET_USERS,
        loginAs,
        loginByPresetId,
        loginAsEmptySubdivisionDemo,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
