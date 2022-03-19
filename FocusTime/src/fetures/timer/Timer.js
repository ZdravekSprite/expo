import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { colors } from '../../utils/colors';
import { sizes } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { Timing } from './Timing';

export const Timer = ({ focusSubject }) => {
  const [minutes, setMinutes] = useState(1);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => { setProgress(progress) }
  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  }

  return (
    <View style={styles.container}>
      <Countdown
        minutes={minutes}
        isPaused={!isStarted}
        onProgress={onProgress}
      />
      <Text style={styles.title}>Focusing on:</Text>
      <Text style={styles.task}>{focusSubject}</Text>
      <ProgressBar
        progress={progress}
        color={colors.darkLight}
        style={styles.bar}
      />
      <View style={styles.buttonWrapper}>
        <Timing changeTime={changeTime} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={!isStarted ? 'start' : 'pause'}
          onPress={() => setIsStarted(!isStarted)}
        />
      </View>
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
  buttonWrapper: {
    flexDirection: 'row',
    padding: sizes.md,
    justifyContent: 'center',
    alignContent: 'center'
  }
})