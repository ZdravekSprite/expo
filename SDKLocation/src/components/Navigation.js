import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthContext } from '../context/AuthContext';
import{ HomeScreen } from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashScreen';
// import { TrafficSignsScreen } from '../screens/EmulatorScreen';
import { TrafficSignsScreen } from '../screens/trafficSigns';
import { RoutesScreen } from '../screens/routes';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const { splashLoading, isLoading, userInfo } = useContext(AuthContext)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {splashLoading || isLoading ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : userInfo.token ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Overview' }}
            />
            <Stack.Screen
              name="TrafficSigns"
              component={TrafficSignsScreen}
              options={{ title: 'Traffic Signs' }}
            />
            <Stack.Screen name="Routes" component={RoutesScreen} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}