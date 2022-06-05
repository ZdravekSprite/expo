import React, { createContext, useState, useEffect } from 'react';
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
  loading: boolean;
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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStorageData() {
      setLoading(true);
      const storageUserInfo = await AsyncStorage.getItem('userInfo');
      console.log('storageUserInfo: ', storageUserInfo);

      if (storageUserInfo) {
        setUserInfo(JSON.parse(storageUserInfo));
        //console.log('storageUserInfo: ', storageUserInfo);
      }
      setLoading(false);
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
    <AuthContext.Provider value={{ signed: !!userInfo, loading, userInfo, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;