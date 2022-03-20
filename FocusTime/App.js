import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Focus } from './src/fetures/focus/Focus';
import { Timer } from './src/fetures/timer/Timer';

import { colors, sizes } from './src/Utils';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          subject={focusSubject}
          clearSubject={() => { setFocusSubject(null) }}
        />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.xx,
    backgroundColor: colors.brightHeavy,
  },
});
