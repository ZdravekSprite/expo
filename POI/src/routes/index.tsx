import { useContext } from 'react';

import AuthContext from '../contexts/AuthContext';

import AuthRoutes from './auth';
import AppRoutes from './app';

export default function Routes() {
  const { signed } = useContext(AuthContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
};