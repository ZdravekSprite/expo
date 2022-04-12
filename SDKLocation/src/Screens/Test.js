import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MyButton } from '../components/Buttons';

export const TestScreen = () => {
  const [poi, setPoi] = useState(null);
  const [pois, setPois] = useState([]);

  const savePois = async () => {
    try {
      AsyncStorage.setItem('pois', JSON.stringify(pois));
    } catch (e) {
      console.log(e);
    }
  };
  const loadPois = async () => {
    try {
      const load = await AsyncStorage.getItem('pois');

      if (load && JSON.parse(load).length) {
        setPois(JSON.parse(load));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadPois();
    return () => {
      setPois([]);
    };
  }, []);

  useEffect(() => {
    savePois();
  }, [pois]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <MyButton
          title='print'
          onPress={() => {
            console.log(poi, pois)
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'flex-start',
    width: '100%'
  },
});