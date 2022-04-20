import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { sizes } from '../Utils';
import { MyButton } from '../components/Buttons';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MyButton
        title='Go to Traffic Signs'
        onPress={() => navigation.navigate('TrafficSigns')}
      />
      <MyButton
        title='Go to Routes'
        onPress={() => navigation.navigate('Routes')}
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
});