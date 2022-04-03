import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LocationScreen } from './src/Screens/location';
import { TrafficSignsScreen } from './src/Screens/trafficSigns';
import { HomeScreen } from './src/Screens/home';

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
        <Stack.Screen name="Location" component={LocationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}