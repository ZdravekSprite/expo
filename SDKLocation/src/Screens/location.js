import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Device from 'expo-device';
import * as Location from 'expo-location';

export const LocationScreen = () => {
  const [location, setLocation] = useState({
    timestamp: 0,
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
    return (new Date(millisec).toString());
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
      <TouchableOpacity
        onPress={() => {
          getLocation();
        }}
        style={styles.button}
      >
        <Text style={styles.buttonLabel}>
          Location ... again
        </Text>
      </TouchableOpacity>
      {location.timestamp ? (
        <>
          <Text style={styles.paragraph}>timestamp: {longToDate(location.timestamp)}</Text>
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
  button: {
    borderRadius: 4,
    backgroundColor: "oldlace",
    marginHorizontal: "auto",
    marginBottom: 24,
    textAlign: "center",
  },
  buttonLabel: {
    padding: 6,
    fontSize: 24,
    fontWeight: "500",
    color: "coral",
  },
});