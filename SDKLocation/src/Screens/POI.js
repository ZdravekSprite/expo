import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

import { sizes, colors } from '../Utils';
import { MyMapView } from '../components/MapView';

export const POIScreen = () => {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [markers, setMarkers] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>POI Screen</Text>
      <MyMapView
        style={style(region).map}
        region={region}
        onUserLocationChange={(e) => {
          //console.log(e.nativeEvent.coordinate.timestamp - (location ? location.coordinate.timestamp : 0))
          //console.log(e.nativeEvent)
          //setLocation(e.nativeEvent)
          if (!region) {
            setRegion({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
              latitudeDelta: 0.0005,
              longitudeDelta: 0.0005,
            });
          }
          //console.log(region, markers, e.nativeEvent)
        }}
        onLongPress={(e) => {
          console.log(e.nativeEvent)
          setMarkers([...markers, {
            latlng: e.nativeEvent.coordinate,
            title: 'x',
            description: 'desc'
          }])
        }}
        markers={markers}
      />
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
});
const style = (bool) => StyleSheet.create({
  map: {
    display: bool ? 'flex' : 'none',
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width - 20,
  },
});