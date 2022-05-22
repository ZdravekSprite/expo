import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation'
import * as Brightness from 'expo-brightness';

export default function App() {
  const [orientationIsLandscape, setOrientation] = useState(true)

  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === 'granted') {
        Brightness.setSystemBrightnessAsync(0.1);
      }
    })();
  }, []);

  async function changeScreenOrientation() {
    if (orientationIsLandscape == true) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    }
    else if (orientationIsLandscape == false) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    }
  }
  const toggleOrientation = () => {
    setOrientation(!orientationIsLandscape)
    changeScreenOrientation()
  }
  async function unlockOrientation() {
    ScreenOrientation.unlockAsync()
  }

  return (
    <View style={styles.container}>
      <Text >Screen Orientation</Text>
      <Button title="Change Orientation" onPress={toggleOrientation} />
      <Button title="Unlock Orientation" onPress={() => unlockOrientation()} />
      <Text>Brightness Module Example</Text>
      <StatusBar style="none" />
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

});