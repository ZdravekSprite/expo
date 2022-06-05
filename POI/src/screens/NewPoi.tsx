import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { gpsLocation } from '../services/location';

export default function TabTwoScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let location = await gpsLocation();
      console.log('location: ', location);
      location && location.location && setLocation(location.location);
      location && location.errorMsg && setErrorMsg(location.errorMsg);
    })();
  }, []);

  let text = 'Waiting...';
  console.log('text: ', text);
  if (errorMsg) {
    text = errorMsg;
  }
  if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dodavanje POI-a</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.paragraph}>{text}</Text>
      <Text style={styles.paragraph}>{errorMsg}</Text>
      <Text style={styles.paragraph}>{location ? location.timestamp : ''}</Text>
      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleGetLocationPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Get Location
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function handleGetLocationPress() {
  console.log('getLocation');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});