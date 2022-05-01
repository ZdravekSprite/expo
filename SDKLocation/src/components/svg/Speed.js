import React from 'react';
import { Text, G } from 'react-native-svg';

export const SvgText = ({
  fill = '#fff',
  speed = null,
  fontSize = 350,
  x = 360,
  y = 500,
}) => {
  return (
    <Text fontWeight="bold" textAnchor="middle"
      fill={fill}
      fontSize={fontSize}
      x={x}
      y={y}
    >
      {speed}
    </Text>
  );
};

export const SpeedText = ({
  fill = '#fff',
  speed = null,
}) => {
  return (
    <>
      {speed < 100 ? (
        <G transform="scale(1,1)">
          <SvgText fill={fill} fontSize="350" y="480" speed={speed} />
        </G>
      ) : (
        <G transform="scale(0.8,1) translate(85,0)">
          <SvgText fill={fill} fontSize="350" y="480" speed={speed} />
        </G>
      )}
    </>
  );
};

export const ZonaSpeed = ({
  fill = '#000',
  speed = null,
}) => {
  return (
    <>
      {speed < 100 ? (
        <G transform="scale(1,1)">
          <SvgText fill={fill} fontSize="230" y="370" speed={speed} />
        </G>
      ) : (
        <G transform="scale(0.75,1) translate(110,0)">
          <SvgText fill={fill} fontSize="230" y="370" speed={speed} />
        </G>
      )}
    </>
  );
};
