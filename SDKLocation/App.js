import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TestScreen } from './src/screens/Test';
import { POIScreen } from './src/screens/POI';
import { RoutesScreen } from './src/screens/Routes';
import { MapViewScreen } from './src/screens/Mapview';
import { LocationScreen } from './src/screens/Location';
import { TrafficSignsScreen } from './src/screens/TrafficSigns';
import { HomeScreen } from './src/screens/Home';

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
        <Stack.Screen name="MapView" component={MapViewScreen} />
        <Stack.Screen name="Routes" component={RoutesScreen} />
        <Stack.Screen name="POI" component={POIScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}