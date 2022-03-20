import React, { useState } from 'react';
import { StyleSheet, Text, View, Vibration, Platform } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

import { colors } from '../../utils/colors';
import { sizes } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { Timing } from './Timing';

const DEFAULT_TIME = 1;
export const Timer = ({ focusSubject }) => {
  useKeepAwake();

  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => { setProgress(progress) }
  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(10000);
    }
  }
  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
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