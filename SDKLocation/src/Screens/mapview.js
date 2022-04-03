import * as React from 'react';
import { useState, useEffect } from 'react';
import MapView, { Polyline } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PolyFromRoute = ({ route = { data: [] }, stroke = 5, color = 'rgba(123,45,67,0.5)' }) => {
  let segments = [];
  route.data.forEach(({ coords, speedLimit, settlement, timestamp }) => {
    let newCord = {
      'latitude': coords.latitude,
      'longitude': coords.longitude,
    };
    let newSegment = {
      'timestamp': timestamp,
      'settlement': settlement,
      'speedLimit': speedLimit,
      'coords': [newCord],
    };
    if (segments.length > 0) {
      let lastSegment = segments[segments.length - 1];
      segments[segments.length - 1].coords[lastSegment.coords.length] = newCord;
      if (lastSegment.speedLimit !== speedLimit) {
        segments[segments.length] = newSegment;
      }
    } else {
      segments[segments.length] = newSegment;
    }
  });
  //console.log(segments[0].coords.map(({ latitude, longitude }) => ({ 'lat': latitude, 'lon': longitude })));
  //console.log(segments.map(({ timestamp, speedLimit, coords }) => ({ 'timestamp': timestamp, 'speedLimit': speedLimit, 'coords': coords })));
  return (
    <>
      {segments.map(({ timestamp, speedLimit, coords }) => {
        return (
          <Polyline
            key={timestamp}
            coordinates={[
              ...coords.map(({ latitude, longitude }) => ({ 'latitude': latitude, 'longitude': longitude })),
            ]}
            strokeWidth={speedLimit ? 5 : 2}
            strokeColor={color}
          />
        )
      })}
    </>
  );
}

export const MapViewScreen = () => {
  const [routesHistory, setRoutesHistory] = useState([]);
  const loadRoutesHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('routesHistory');

      if (history && JSON.parse(history).length) {
        setRoutesHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    loadRoutesHistory();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 45.78096,
          longitude: 15.89925,
          latitudeDelta: 0.3,
          longitudeDelta: 0.2,
        }}
      >
        {routesHistory.forEach(route => {
          console.log(route);
        })}
        <PolyFromRoute route={routesHistory[0]} />
        <PolyFromRoute route={routesHistory[1]} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});