import React from 'react';
import { StyleSheet, View } from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';

export const Timing = ({ changeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton title='0,1' onPress={() => changeTime(0.1)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton title='15' onPress={() => changeTime(15)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton title='20' onPress={() => changeTime(20)} />
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center'
  },
})