import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './src/screens/Home';
import { TrafficSignsScreen } from './src/screens/TrafficSigns';
import { RoutesScreen } from './src/screens/Routes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Overview' }}
        />
        <Stack.Screen name="TrafficSigns" component={TrafficSignsScreen} />
        <Stack.Screen name="Routes" component={RoutesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}