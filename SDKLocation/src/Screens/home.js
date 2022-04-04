import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Home Screen
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('TrafficSigns')}
        style={styles.button}
      >
        <Text style={styles.buttonLabel}>
          Go to Traffic Signs
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Location')}
        style={styles.button}
      >
        <Text style={styles.buttonLabel}>
          Go to Location
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('MapView')}
        style={styles.button}
      >
        <Text style={styles.buttonLabel}>
          Go to Map View
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Routes')}
        style={styles.button}
      >
        <Text style={styles.buttonLabel}>
          Go to Routes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('File')}
        style={styles.button}
      >
        <Text style={styles.buttonLabel}>
          Go to File
        </Text>
      </TouchableOpacity>
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
  label: {
    padding: 16,
    fontSize: 32,
    fontWeight: "900",
  },
  button: {
    borderRadius: 4,
    backgroundColor: "oldlace",
    margin: 8,
  },
  buttonLabel: {
    padding: 8,
    fontSize: 24,
    fontWeight: "500",
    color: "coral",
  },
});