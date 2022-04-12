import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView, { Marker } from 'react-native-maps';

import { MyButton } from '../components/Buttons';

export const TestScreen = () => {
  const [poi, setPoi] = useState(null);
  const [pois, setPois] = useState([]);
  const [region, setRegion] = useState(null);

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
      <MapView
      style={style(region, poi).map}
      region={region}
      showsUserLocation={true}
      followUserLocation={true}
      userLocationUpdateInterval={0}
      
      onUserLocationChange={(e) => {
        //console.log(e.nativeEvent)
        if (!region) {
          setRegion({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: e.nativeEvent.coordinate.accuracy * 0.00002,
            longitudeDelta: e.nativeEvent.coordinate.accuracy * 0.00002,
          });
        }
      }}
      >
      </MapView>
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
const style = (region, poi) => StyleSheet.create({
  map: {
    display: region ? 'flex' : 'none',
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width / (poi ? 2 : 1) - 20,
  },
});