import React, { createContext, useState, useEffect, SetStateAction } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';

export interface UserInfo {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

interface AuthContextData {
  signed: boolean;
  userInfo: UserInfo | null;
  register(
    name: string | undefined,
    email: string | undefined,
    password: string | undefined,
    password_confirmation: string | undefined,
  ): Promise<void>;
  login(
    email: string | undefined,
    password: string | undefined,
  ): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storageUserInfo = await AsyncStorage.getItem('userInfo');

      if (storageUserInfo) {
        setUserInfo(JSON.parse(storageUserInfo));
        console.log('storageUserInfo: ', storageUserInfo);
      }
    }

    loadStorageData();
  }, []);

  async function register(name: string | undefined, email: string | undefined, password: string | undefined, password_confirmation: string | undefined) {
    auth.register(name, email, password, password_confirmation, setUserInfo);
  }

  async function login(email: string | undefined, password: string | undefined) {
    auth.login(email, password, setUserInfo);
  }

  function logout() {
    userInfo && auth.logout(userInfo, setUserInfo)
  }

  return (
    <AuthContext.Provider value={{ signed: !!userInfo, userInfo, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;