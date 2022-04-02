import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
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
  text: {
    fontWeight: '600',
    color: colors.darkLight,
    fontSize: size / 3
  },
})