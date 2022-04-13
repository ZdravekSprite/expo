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
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [poi, setPoi] = useState(null);
  const [poiList, setPoiList] = useState([]);

  const savePoiList = async () => {
    try {
      AsyncStorage.setItem('poiList', JSON.stringify(poiList));
    } catch (e) {
      console.log(e);
    }
  };
  const loadPoiList = async () => {
    try {
      const load = await AsyncStorage.getItem('poiList');

      if (load && JSON.parse(load).length) {
        setPoiList(JSON.parse(load));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadPoiList();
    return () => {
      setPoiList([]);
    };
  }, []);

  useEffect(() => {
    savePoiList();
  }, [poiList]);

  const newPoi = () => {
    console.log('new poi')
    if (location) {
      setPoi(
        {
          latitude: location.latitude,
          longitude: location.longitude,
        }
      )
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <MyButton
          title='print'
          onPress={() => {
            console.log(location, poi, poiList)
          }}
        />
      </View>
      <View style={styles.row}>
        <MyButton
          title='new'
          onPress={() => newPoi()}
        />
      </View>
      <View style={styles.row}>
        <MyButton
          title='rec'
          onPress={() => {
            console.log('rec')
          }}
        />
        <MyButton
          title='pause'
          onPress={() => {
            console.log('pause')
          }}
        />
        <MyButton
          title='save'
          onPress={() => {
            console.log('save')
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
          setLocation(e.nativeEvent.coordinate)
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