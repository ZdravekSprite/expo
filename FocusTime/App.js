import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Focus } from './src/fetures/focus/Focus';
import { Timer } from './src/fetures/timer/Timer';

import { colors } from './src/utils/colors';
import { sizes } from './src/utils/sizes';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => { setFocusSubject(null) }}
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
