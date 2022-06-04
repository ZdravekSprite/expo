import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import AuthContext from '../contexts/AuthContext';

export default function ModalScreen() {
  const {logOut} = useContext(AuthContext);

  async function handleLogOut() {
    await logOut();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogOut} style={styles.link}>
        <Text style={styles.linkText}>Sign Out</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
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
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
