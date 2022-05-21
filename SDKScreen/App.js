import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation'

export default function App() {
  const [orientationIsLandscape, setOrientation] = useState(true)
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

  return (
    <View style={styles.container}>
      <Text >Screen Orientation</Text>
      <Button title="Change Orientation" onPress={toggleOrientation} />
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