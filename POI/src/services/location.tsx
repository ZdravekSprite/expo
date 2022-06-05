import { Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Location from 'expo-location';

export const gpsLocation = async () => {
  let errorMsg = null;
  if (Platform.OS === 'android' && !Device.isDevice) {
    errorMsg = 'Oops, this will not work on Snack in an Android emulator. Try it on your device!';
    return { 'errorMsg': errorMsg, 'location': {
      'timestamp': Number(new Date()),
      'mocked': true,
      'coords': {
        'altitude': Math.random() * 100,
        'heading': Math.random() * 100,
        'altitudeAccuracy': 999,
        'latitude': Math.random() * 10 + 40,
        'speed': 0,
        'longitude': Math.random() * 10 + 10,
        'accuracy': 999,
      }
    } };
  }
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    errorMsg = 'Permission to access location was denied'
    return { 'errorMsg': errorMsg };
  }
  let location = await Location.getCurrentPositionAsync({});
  return { 'errorMsg': errorMsg, 'location': location }
};