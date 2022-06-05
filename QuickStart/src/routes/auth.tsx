import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import LogInScreen from '../screens/LogIn';
import RegisterScreen from '../screens/Register';

const AuthStack = createNativeStackNavigator<RootStackParamList>();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="LogIn" component={LogInScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
);

export default AuthRoutes;