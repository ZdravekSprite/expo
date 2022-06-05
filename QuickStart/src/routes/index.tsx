import { useContext } from 'react';

import AuthContext from '../contexts/AuthContext';

import AuthRoutes from './auth';
import AppRoutes from './app';
import { View } from '../components/Themed';
import { ActivityIndicator } from 'react-native';

export default function Routes() {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    )
  }
  return signed ? <AppRoutes /> : <AuthRoutes />;
};