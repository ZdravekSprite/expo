import { Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Location from 'expo-location';

const fakeGps = {
  'timestamp': Number(new Date()),
  'mocked': true,
  'coords': {
    'altitude': Math.floor(Math.random() * 10000)/100,
    'heading': Math.floor(Math.random() * 1000)/10,
    'altitudeAccuracy': 999,
    'latitude': Math.floor(Math.random() * 10000)/100,
    'speed': 0,
    'longitude': Math.floor(Math.random() * 10000)/100,
    'accuracy': 999,
  }
};
export const gpsLocation = async () => {
  let errorMsg = null;
  if (Platform.OS === 'android' && !Device.isDevice) {
    errorMsg = 'Oops, this will not work on Snack in an Android emulator. Try it on your device!';
    return { 'errorMsg': errorMsg, 'location': fakeGps };
  }
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    errorMsg = 'Permission to access location was denied'
    return { 'errorMsg': errorMsg };
  }
  let location = await Location.getCurrentPositionAsync({});
  return { 'errorMsg': errorMsg, 'location': location }
};