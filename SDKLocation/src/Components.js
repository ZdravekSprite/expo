import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { sizes, colors } from './Utils';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = sizes.xl,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size).text, textStyle]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export const SpeedLimitButton = ({
  style = {},
  textStyle = {},
  size = sizes.xxxx,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).speed, style]}
      onPress={props.onPress}
    >
      <Text style={[props.speed < 100 ? styles(size).limit : styles(size).limit100, textStyle]}>
        {props.speed}
      </Text>
    </TouchableOpacity>
  );
};

export const PrestanakButton = ({
  style = {},
  textStyle = {},
  size = sizes.xxxx,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).kraj, style]}
      onPress={props.onPress}
    >
      <Text style={[
        props.speed < 100 ? styles(size).limit : styles(size).limit100,
        textStyle,
        { transform: [{ translateY: size / 25 }] }
      ]}>
        {props.speed}
      </Text>
      <View style={{
        transform: [
          { translateY: props.speed < 100 ? - size / 3 : - size / 3.8 },
          { rotate: "-45deg" }
        ]
      }}>
        <View style={styles(size).strokes} />
        <View style={styles(size).strokes} />
        <View style={styles(size).strokes} />
      </View>
    </TouchableOpacity>
  );
};

const styles = (size) => StyleSheet.create({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.darkHeavy,
    borderWidth: 2
  },
  speed: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: size / 10,
    margin: size / 30,
  },
  kraj: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    margin: size / 30,
  },
  text: {
    fontWeight: '600',
    color: colors.darkLight,
    fontSize: size / 3
  },
  limit: {
    fontWeight: "bold",
    color: colors.darkHeavy,
    fontSize: size / 2
  },
  limit100: {
    fontWeight: "bold",
    color: colors.darkHeavy,
    fontSize: size / 2.5,
    transform: [{ scaleY: 1.2 }]
  },
  strokes: {
    width: size,
    height: size / 25,
    margin: size / 100,
    borderWidth: 1,
  },
})