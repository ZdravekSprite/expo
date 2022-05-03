import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MyButton, SignButton } from './Buttons';

export const SignTypeMenu = ({ onPress = (e) => { console.log(e) } }) => {
  return (
    <View style={styles.row}>
      <MyButton title='?' style={styles.menu} onPress={() => { onPress('speed'); }} />
      <MyButton title='A' style={styles.menu} onPress={() => { onPress('a'); }} />
      <MyButton title='B' style={styles.menu} onPress={() => { onPress('b'); }} />
      <MyButton title='C' style={styles.menu} onPress={() => { onPress('c'); }} />
      <MyButton title='E' style={styles.menu} onPress={() => { onPress('e'); }} />
      <MyButton title='2' style={styles.menu} onPress={() => { onPress('x2'); }} />
    </View>
  )
}

export const SpeedMenu = ({ onPress = () => { } }) => {
  let size = 36
  return (
    <View style={styles.row}>
      <SignButton size={size} type='b30' speed={'??'} onPress={() => { onPress('b30') }} />
      <SignButton size={size} type='b38' speed={'??'} onPress={() => { onPress('b38') }} />
      <SignButton size={size} type='c22' speed={'??'} onPress={() => { onPress('c22') }} />
      <SignButton size={size} type='c33' speed={'??'} onPress={() => { onPress('c33') }} />
      <SignButton size={size} type='c11' speed={'??'} onPress={() => { onPress('c11') }} />
      <SignButton size={size} type='c12' speed={'??'} onPress={() => { onPress('c12') }} />
      <SignButton size={size} type='c23' speed={'??'} onPress={() => { onPress('c23') }} />
      <SignButton size={size} type='c34' speed={'??'} onPress={() => { onPress('c34') }} />
    </View>
  )
}

export const EMenu = ({ onPress = () => { } }) => {
  let size = 70
  return (
    <View style={styles.row}>
      <SignButton size={size} type='e00' onPress={() => { onPress(null) }} />
      <SignButton size={size} type='e01' m={'??'} onPress={() => { onPress('e01') }} />
      <SignButton size={size} type='e02' m={'??'} onPress={() => { onPress('e02') }} />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'flex-start',
    width: '100%'
  },
  menu: {
    minWidth: "14%",
  },
});