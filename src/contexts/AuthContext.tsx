import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, ModuleProgress } from '@/types/course';
import { modules } from '@/data/courseData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProgress: (moduleId: number, completed: boolean, score?: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('pixellearn_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in production, this would call your C# backend
    if (email && password.length >= 4) {
      const initialProgress: ModuleProgress[] = modules.map((module, index) => ({
        moduleId: module.id,
        completed: false,
      }));

      const newUser: User = {
        id: crypto.randomUUID(),
        email,
        name: email.split('@')[0],
        progress: initialProgress,
      };

      setUser(newUser);
      localStorage.setItem('pixellearn_user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('pixellearn_user');
  };

  const updateProgress = (moduleId: number, completed: boolean, score?: number) => {
    if (!user) return;

    const updatedProgress = user.progress.map((p) =>
      p.moduleId === moduleId
        ? { ...p, completed, quizScore: score }
        : p
    );

    const updatedUser = { ...user, progress: updatedProgress };
    setUser(updatedUser);
    localStorage.setItem('pixellearn_user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, updateProgress }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
