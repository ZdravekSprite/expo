import * as React from 'react';
import MapView, { Polyline } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export const MapViewScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 45.78096,
          longitude: 15.89925,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Polyline
          coordinates={[
            { latitude: 45.7825259, longitude: 15.8951431 },
            { latitude: 45.7896386, longitude: 15.891646 },
            { latitude: 45.7865248, longitude: 15.8961628 },
            { latitude: 45.7834153, longitude: 15.8977787 },
            { latitude: 45.7848605, longitude: 15.8996065 },
          ]}
          strokeWidth={5}
          strokeColor="rgba(123,45,67,0.5)"
        />
        <Polyline
          coordinates={[
            { latitude: 45.7848605, longitude: 15.8996065 },
            { latitude: 45.7835259, longitude: 15.8981431 },
            { latitude: 45.7835259, longitude: 15.8971431 },
            { latitude: 45.7835259, longitude: 15.8961431 },
            { latitude: 45.7825259, longitude: 15.8951431 },
          ]}
          strokeWidth={2}
          strokeColor="rgba(89,123,45,0.5)"
        />
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