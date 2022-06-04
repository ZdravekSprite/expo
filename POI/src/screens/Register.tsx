import { useContext, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import AuthContext from '../contexts/AuthContext';

export default function RegisterScreen({ navigation }: RootStackScreenProps<'Register'>) {
  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [password_confirmation, setPassword_confirmation] = useState<string | undefined>(undefined);
  const { register } = useContext(AuthContext);

  async function handleRegister() {
    console.log('register');
    const response = await register(name, email, password, password_confirmation);
    console.log('response: ', response);
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder='Enter name'
          onChangeText={text => setName(text)}
        />
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
        <TextInput
          style={styles.input}
          value={password_confirmation}
          placeholder='Confirm password'
          onChangeText={text => setPassword_confirmation(text)}
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={handleRegister} style={styles.link}>
        <Text style={styles.linkText}>Register</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.link}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')} style={styles.link}>
          <Text style={styles.linkText}>Login</Text>
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
