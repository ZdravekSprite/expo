import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils/colors';
import { sizes } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <Countdown isPaused={!isStarted}/>
      <Text style={styles.title}>Focusing on:</Text>
      <Text style={styles.task}>{focusSubject}</Text>
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
    color: colors.darkLight,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    marginTop: sizes.xl,
    marginHorizontal: 'auto',
  },
})