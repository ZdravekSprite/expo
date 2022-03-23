import React, { useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';

import { Focus } from './src/fetures/focus/Focus';
import { Timer } from './src/fetures/timer/Timer';

import { colors, sizes } from './src/Utils';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithStatus = (subject, status) => {
    setFocusHistory([...focusHistory, {subject, status}])
  };
  console.log(focusHistory);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          subject={focusSubject}
          clearSubject={(status) => {
            addFocusHistorySubjectWithStatus(focusSubject, status)
            setFocusSubject(null);
          }}
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
