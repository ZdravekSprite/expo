import React, { useState } from 'react';
import { StyleSheet, Text, View, Vibration, Platform } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

import { colors, sizes } from '../../Utils';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { Timing } from './Timing';

const DEFAULT_TIME = 1;
const VIBRATE_SEC = 1;
const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2
};

export const Timer = ({ subject, clearSubject }) => {
  useKeepAwake();

  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => { setProgress(progress) }
  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), VIBRATE_SEC * 1000);
    } else {
      Vibration.vibrate(VIBRATE_SEC * 1000);
    }
  }
  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    clearSubject(STATUSES.COMPLETE);
  }
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
        onEnd={onEnd}
      />
      <Text style={styles.title}>Focusing on:</Text>
      <Text style={styles.task}>{subject}</Text>
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
          size={sizes.xxxx}
          onPress={() => setIsStarted(!isStarted)}
        />
      </View>
      <RoundedButton
        title={'-'}
        size={sizes.xxl}
        onPress={() => clearSubject(STATUSES.CANCELLED)}
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
  buttonWrapper: {
    flexDirection: 'row',
    padding: sizes.md,
    justifyContent: 'center',
    alignContent: 'center'
  },
  clear: {
    paddingBottom: sizes.lg,
    paddingLeft: sizes.lg,
  }
})