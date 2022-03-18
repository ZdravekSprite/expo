import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils/colors';
import { sizes } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';

export const Timer = ({ focusSubject }) => {
  return (
    <View style={styles.container}>
      <Countdown />
      <Text style={styles.title}>Focusing on:</Text>
      <Text style={styles.task}>{focusSubject}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: sizes.xxl,
  },
  title: {
    color: colors.darkLight,
    textAlign: 'center',
  },
  task: {
    color: colors.darkLight,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})