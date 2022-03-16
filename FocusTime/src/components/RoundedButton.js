import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
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
    borderColor: '#000',
    borderWidth: 2
  },
  text: {
    color: '#333',
    fontSize: size * 3 / 5
  },
})