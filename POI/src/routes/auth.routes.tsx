import React from 'react';
import SignIn from '../pages/SignIn/index';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
);

export default AuthRoutes;