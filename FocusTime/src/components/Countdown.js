import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../utils/colors';
import { sizes } from '../utils/sizes';

export const Countdown = () => {
  return (
    <Text style={styles.text}>Countdown timer goes here</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.md,
    fontWeight: 'bold',
    color: colors.darkLight,
    padding: sizes.lg,
    backgroundColor: colors.darkAlfa,
    textAlign: 'center',
  },
})