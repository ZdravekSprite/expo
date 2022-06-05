import { useContext, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import AuthContext from '../contexts/AuthContext';

export default function LogInScreen({ navigation }: RootStackScreenProps<'LogIn'>) {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const { login } = useContext(AuthContext);

  async function handleLogIn() {
    console.log('login');
    const response = await login(email, password);
    console.log('response: ', response);
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder='Enter email'
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder='Enter password'
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={handleLogIn} style={styles.link}>
        <Text style={styles.linkText}>Sign In</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.link}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.link}>
          <Text style={styles.linkText}>Register</Text>
        </TouchableOpacity>
      </View>
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
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
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
