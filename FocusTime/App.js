import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [focusSubject, setFocusSubject] = useState('Focus Subject!');
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Place for timer</Text>
      ) : (
        <Text>Place for input</Text>
      )}
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
