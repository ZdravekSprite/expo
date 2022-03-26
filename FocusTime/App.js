import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Focus } from './src/fetures/focus/Focus';
import { FocusHistory } from './src/fetures/focus/FocusHistory';
import { Timer } from './src/fetures/timer/Timer';

import { colors, sizes } from './src/Utils';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithStatus = (subject, status) => {
    setFocusHistory([...focusHistory, { key: String(focusHistory.length + 1), subject, status }])
  };

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
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory
            focusHistory={focusHistory}
            setFocusHistory={setFocusHistory}
          />
        </>
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
