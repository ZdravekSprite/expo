import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import {
  DEFAULT_LOCATION,
  DEFAULT_REGION,
  sizes,
} from '../Utils';
import { MyButton } from '../Components';
import { gpsLocation } from '../features/Location';

const test = async (test) => {
  console.log('test', await test);
}

export const POIScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocation = async () => {
    let gps = await gpsLocation(setLocation, setErrorMsg);
    if (gps.errorMsg) {
      console.log(gps.errorMsg);
    } else {
      setLocation(gps.location);
    }
  };

  const getRegion = () => {
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>POI Screen</Text>
      <MyButton
        title='test'
        onPress={() => {
          getLocation()
          test(location)
        }}
      />
      {location ? (
        <MapView
          style={styles.map}
          region={getRegion()}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title='x'
            description='tu sam'
            draggable
            onDragEnd={e => {
              setLocation({
                coords: {
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude,
                },
              })
              console.log('move',e.nativeEvent)
            }}
            onCalloutPress={e => console.log('save',e.nativeEvent)}
          />
        </MapView>
      ) : (
        <Text style={styles.label}>još nema lokacije</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizes.xx,
  },
  label: {
    padding: sizes.md,
    fontSize: sizes.xl,
    fontWeight: "900",
  },
  map: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width - 20,
  },
});