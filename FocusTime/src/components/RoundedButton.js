import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { sizes } from '../utils/sizes';
import { colors } from '../utils/colors';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = sizes.xxxx,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]}>
      <Text
        style={[styles(size).text, textStyle]}
        onPress={props.onPress}>
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
    borderColor: colors.darkHeavy,
    borderWidth: 2
  },
  text: {
    color: colors.darkLight,
    fontSize: size * 3 / 5
  },
})