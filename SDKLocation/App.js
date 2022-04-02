import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Device from 'expo-device';
import * as Location from 'expo-location';

import { RoundedButton } from './src/Components';

export default function App() {
  const [location, setLocation] = useState({
    timestemp: 0,
    coords: {
      accuracy: null,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      latitude: null,
      longitude: null,
      speed: null,
    }
  });
  const [errorMsg, setErrorMsg] = useState(null);

  const longToDate = (millisec) => {
    //var length = millisec.length - 7;
    //var date = parseInt(millisec.substring(6, length));
    return (new Date(millisec).toUTCString());
  };

  const getLocation = async () => {
    if (Platform.OS === 'android' && !Device.isDevice) {
      setErrorMsg(
        'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
      );
      return;
    }
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    getLocation();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = 'location:';
  }

  return (
    <View style={styles.container}>
      <RoundedButton
        title='X'
        onPress={() => {
          getLocation();
        }}
      />
      {location.timestamp ? (
        <>
          <Text style={styles.paragraph}>timestamp: {longToDate(location.timestamp)}</Text>
          <Text style={styles.paragraph}>timestamp: {location.timestamp}</Text>
          <Text style={styles.paragraph}>accuracy: {location.coords.accuracy}</Text>
          <Text style={styles.paragraph}>altitude: {location.coords.altitude}</Text>
          <Text style={styles.paragraph}>altitudeAccuracy: {location.coords.altitudeAccuracy}</Text>
          <Text style={styles.paragraph}>heading: {location.coords.heading}</Text>
          <Text style={styles.paragraph}>latitude: {location.coords.latitude}</Text>
          <Text style={styles.paragraph}>longitude: {location.coords.longitude}</Text>
          <Text style={styles.paragraph}>speed: {location.coords.speed}</Text>
        </>
      ) : (
        <Text style={styles.paragraph}>{text}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});