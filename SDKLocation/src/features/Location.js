import { Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Location from 'expo-location';

export const gpsLocation = async () => {
  let errorMsg = null;
  if (Platform.OS === 'android' && !Device.isDevice) {
    errorMsg = 'Oops, this will not work on Snack in an Android emulator. Try it on your device!';
    return { 'errorMsg': errorMsg };
  }
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    errorMsg = 'Permission to access location was denied'
    return { 'errorMsg': errorMsg };
  }
  let location = await Location.getCurrentPositionAsync({});
  return { 'errorMsg': errorMsg, 'location': location }
};