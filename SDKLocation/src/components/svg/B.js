import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle, Rect, Path, G } from 'react-native-svg';
import { SvgSign, SvgA00 } from './Buttons';
import { sizes, colors } from '../../Utils';

// B01 - Raskrižje s cestom s prednošću prolaska
export const SvgB01 = ({
  ...props
}) => {
  return (
    <SvgA00
      {...props}
      style={{
        transform: [
          { rotate: "180deg" }
        ]
      }}>
    </SvgA00>
  );
};

// B02 - Obavezno zaustavljanje
export const SvgB02 = ({
  size = sizes.xxx,
  ...props
}) => {
  return (
    <SvgSign {...props}>
      <Path
        d="m220,710 280,0 210,-210 0,-280 -210,-210 -280,0 -210,210 0,280 z"
        fill="#fff"
        stroke="#000"
        strokeWidth="2"
      />
      <Path
        d="m230,682 260,0 192,-192 0,-260 -192,-192 -260,0 -192,192 0,260 z"
        fill={colors.red}
        stroke="none"
      />
      <Text style={{
        fontWeight: "bold",
        color: "#fff",
        fontSize: size / 3,
        transform: [
          { scaleY: 1.33 },
          { translateY: size / 5 },
          { translateX: size / 12 },
        ]
      }}>
        STOP
      </Text>
    </SvgSign>
  );
};

// B03 - Zabrana prometa u oba smjera
export const SvgB03 = ({
  ...props
}) => {
  return (
    <SvgSign {...props}>
      <Circle fill="#FFF" stroke="#000" strokeWidth="2" cx="362.5" cy="362.5" r="350" />
      <Circle fill="#FFF" stroke="#c00" strokeWidth="55" cx="362.5" cy="362.5" r="315" />
      {props.children}
    </SvgSign>
  );
};

// B04 - Zabrana prometa u jednom smjeru
export const SvgB04 = ({
  ...props
}) => {
  return (
    <SvgSign {...props}>
      <Circle fill="#FFF" stroke="#000" strokeWidth="2" cx="362.5" cy="362.5" r="350" />
      <Circle fill="#c00" stroke="#c00" strokeWidth="55" cx="362.5" cy="362.5" r="315" />
      <Rect fill="#fff" x="80" y="290" width="560" height="140" />
    </SvgSign>
  );
};

//B05 - Prednost prolaska za vozila iz suprotnog smjera
export const SvgB05 = ({
  ...props
}) => {
  return (
    <SvgB03 {...props}>
      <Path
        d="m168,437 91,91 91,-91 0,-56 -70,70 0,-259 -42,0 0,259 -70,-70 z"
        fill="#000"
      />
      <Path
        d="m552,283 -91,-91 -91,91 0,56 70,-70 0,259 42,0 0,-259 70,70 z"
        fill={colors.red}
      />
    </SvgB03>
  );
};

//B30 - Ograničenje brzine
export const SvgB30 = ({
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
        <Circle fill="#FFF" stroke="#000" strokeWidth="2" cx="362.5" cy="362.5" r="350" />
        <Circle fill="#FFF" stroke="#c00" strokeWidth="55" cx="362.5" cy="362.5" r="315" />
        <Text style={{
          textAlign: 'center',
          fontWeight: "bold",
          color: '#000',
          fontSize: size * 3 / 7,
          transform: [
            { scaleX: (speed > 99 ? 5 : 6) / 6 },
            { scaleY: 1.25 },
            { translateY: size / 7 },
           ]
        }}>
          {speed}
        </Text>
      </Svg>
    </TouchableOpacity>

  );
};

