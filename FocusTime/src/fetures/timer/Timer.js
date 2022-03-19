import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { colors } from '../../utils/colors';
import { sizes } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => { setProgress(progress) }

  return (
    <View style={styles.container}>
      <Countdown isPaused={!isStarted} onProgress={onProgress} />
      <Text style={styles.title}>Focusing on:</Text>
      <Text style={styles.task}>{focusSubject}</Text>
      <ProgressBar
        progress={progress}
        color={colors.darkLight}
        style={styles.bar}
      />
      <RoundedButton
        style={styles.button}
        title={!isStarted ? 'start' : 'pause'}
        onPress={() => setIsStarted(!isStarted)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: sizes.xxl,
  },
  title: {
    marginTop: sizes.xl,
    color: colors.darkLight,
    textAlign: 'center',
  },
  task: {
    marginBottom: sizes.md,
    color: colors.darkLight,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bar: {
    height: sizes.sm,
  },
  button: {
    marginTop: sizes.xl,
    marginHorizontal: 'auto',
  },
})