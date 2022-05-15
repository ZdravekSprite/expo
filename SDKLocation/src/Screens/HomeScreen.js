import { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

import { sizes } from '../Utils';
import { MyButton } from '../components/Buttons';

export const HomeScreen = ({ navigation }) => {
  const { userInfo, logout } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome {userInfo.user.name}</Text>
      <MyButton
        title='Go to Traffic Signs'
        onPress={() => navigation.navigate('TrafficSigns')}
      />
      <MyButton
        title='Go to Routes'
        onPress={() => navigation.navigate('Routes')}
      />
      <Button
        title='Logout'
        color='red'
        onPress={logout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizes.xx,
  },
  welcome: {
    fontSize: 18,
    marginBottom: 8,
  },
});