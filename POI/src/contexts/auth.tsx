import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      // TODO: Try using multiget instead of 2 awaits
      const storageUser = await AsyncStorage.getItem('@reactNativeAuth:user');
      const storageToken = await AsyncStorage.getItem('@reactNativeAuth:token');

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
      }
    }

    loadStorageData();
  });

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);

    await AsyncStorage.setItem(
      '@reactNativeAuth:user',
      JSON.stringify(response.user),
    );
    await AsyncStorage.setItem('@reactNativeAuth:token', response.token);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user: user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;