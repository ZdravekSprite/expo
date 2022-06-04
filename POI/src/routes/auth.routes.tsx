import React from 'react';
import LogIn from '../screens/LogInScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="LogIn" component={LogIn} />
    </AuthStack.Navigator>
);

export default AuthRoutes;