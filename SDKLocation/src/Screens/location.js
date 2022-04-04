import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { DEFAULT_LOCATION } from '../Utils';

import { gpsLocation } from '../features/Location';

export const LocationScreen = () => {
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [errorMsg, setErrorMsg] = useState(null);

  const longToDate = (millisec) => {
    return (new Date(millisec).toString());
  };

  const getLocation = async () => {
    let gps = await gpsLocation(setLocation, setErrorMsg);
    if (gps.errorMsg) {
      console.log(gps.errorMsg);
    } else {
      setLocation(gps.location);
    }
  };

  useEffect(() => {
    getLocation();
    /*return () => {
      setLocation(null);
    };*/
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
          getLocation(setLocation, setErrorMsg);
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