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

// C00
export const SvgC00 = ({
  ...props
}) => {
  return (
    <SvgSign {...props} >
      <Rect fill="#fff" stroke="#000" strokeWidth="1" x="10" y="10" width="700" height="700" rx="32" />
      <Rect fill={colors.blue} x="17" y="17" width="686" height="686" rx="25" />
      {props.children}
    </SvgSign>
  );
};

// E00
export const SvgE00 = ({
  ...props
}) => {
  return (
    <SvgSign {...props} >
      <G transform="translate(0 175)">
        <Path
          d="M685,360 A 25 25 0 0 0 710 335 L 710,35 A 25 25 0 0 0 685 10 L 35,10 A 25 25 0 0 0 10 35 L 10,335 A 25 25 0 0 0 35 360 z"
          fill="#fff"
          stroke="#000"
          strokeWidth="2"
        />
        <Path
          d="M685,349.5 A 14.5 14.5 0 0 0 699.5 335 L 699.5,35 A 14.5 14.5 0 0 0 685 20.5 L 35,20.5 A 14.5 14.5 0 0 0 20.5 35 L 20.5,335 A 14.5 14.5 0 0 0 35 349.5 z"
          fill="#fff"
          stroke="#000"
          strokeWidth="7"
        />
        {props.children}
      </G>
    </SvgSign>
  );
};