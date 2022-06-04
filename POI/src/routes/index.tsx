import React, { useContext } from 'react';

import AuthContext from '../contexts/AuthContext';

import AuthRoutes from './auth';
import AppRoutes from './app';

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;