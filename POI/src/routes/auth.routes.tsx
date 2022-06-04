import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types';
import LogInScreen from '../screens/LogIn';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="LogIn" component={LogInScreen} />
    </AuthStack.Navigator>
);

export default AuthRoutes;