import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { sizes } from '../Utils';
import { MyButton } from '../components/Buttons';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Home Screen
      </Text>
      <MyButton
        title='Go to Traffic Signs'
        onPress={() => navigation.navigate('TrafficSigns')}
      />
      <MyButton
        title='Go to Location'
        onPress={() => navigation.navigate('Location')}
      />
      <MyButton
        title='Go to Map View'
        onPress={() => navigation.navigate('MapView')}
      />
      <MyButton
        title='Go to Routes'
        onPress={() => navigation.navigate('Routes')}
      />
      <MyButton
        title='Go to POI'
        onPress={() => navigation.navigate('POI')}
      />
      <MyButton
        title='Go to Test'
        onPress={() => navigation.navigate('Test')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizes.xx,
  },
  label: {
    padding: sizes.md,
    fontSize: sizes.xl,
    fontWeight: "900",
  },
});