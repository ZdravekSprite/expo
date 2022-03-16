import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Focus } from './src/fetures/focus/Focus';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Place for timer</Text>
      ) : (
        <Focus addSubject={setFocusSubject}/>
      )}
      <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
