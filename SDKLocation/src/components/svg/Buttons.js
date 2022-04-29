import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle, Rect, Path, G } from 'react-native-svg';
import { sizes, colors } from '../../Utils';

export const SvgSign = ({
  type = '',
  speed = null,
  size = sizes.xxx,
  onPress = () => { },
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Svg height={size} width={size} viewBox="0 0 720 720" {...props}>
        {props.children}
      </Svg>
    </TouchableOpacity>
  );
};

// A00 - A triangle
export const SvgA00 = ({
  ...props
}) => {
  return (
    <SvgSign {...props}>
      <Path
        d="M675,666 A 35 35 0 0 0 708 620 L 390,70 A 35 35 0 0 0 330 70 L 12,620 A 35 35 0 0 0 45 666 z"
        fill="#fff"
        stroke="#000"
        strokeWidth="2"
      />
      <Path
        d="M675,662 A 31.5 31.5 0 0 0 703 619 L 385,70 A 31.5 31.5 0 0 0 335 70 L 18,619 A 31.5 31.5 0 0 0 45 662 z"
        fill={colors.red}
        stroke="none"
      />
      <Path
        d="M610,590 360,170 110,590 z"
        fill="#fff"
      />
      {props.children}
    </SvgSign>
  );
};