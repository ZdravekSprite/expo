import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../../../components/Themed';
import { AuthStackScreenProps } from '../../../types';

export default function SignIn({ navigation }: AuthStackScreenProps<'SignIn'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In.</Text>
      <TouchableOpacity onPress={() => { }} style={styles.link}>
        <Text style={styles.linkText}>Sign In</Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
