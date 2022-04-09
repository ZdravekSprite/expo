import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { sizes, colors } from '../Utils';
import { MyMapView } from '../components/MapView';
import { gpsLocation } from '../features/Location';

export const POIScreen = () => {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getRegion = async () => {
    let gps = await gpsLocation(setLocation, setErrorMsg);
    if (gps.errorMsg) {
      console.log(gps.errorMsg);
    } else {
      setRegion({
        latitude: gps.location.coords.latitude,
        longitude: gps.location.coords.longitude,
        latitudeDelta: 0.0005,
        longitudeDelta: 0.0005,
      });
    }
  };

  useEffect(() => {
    getRegion();
    return () => {
      setRegion(null);
    };
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.label}>POI Screen</Text>
      {region ? (
        <MyMapView
          style={styles.map}
          region={region}
          onUserLocationChange={(e) => {
            //console.log(e.nativeEvent.coordinate.timestamp - (location ? location.coordinate.timestamp : 0))
            //setLocation(e.nativeEvent)
          }}
          onLongPress={(e) => {
            console.log(e.nativeEvent)
          }}
        >
        </MyMapView>
      ) : (
        <Text style={styles.label}>još nema lokacije</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brightLight,
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