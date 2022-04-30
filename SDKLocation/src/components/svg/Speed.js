import React from 'react';
import { Text, G } from 'react-native-svg';

// C34 - Prestanak preporučene brzine
export const SpeedText = ({
  fill = '#fff',
  speed = null,
}) => {
  return (
    <>
      {speed < 100 ? (
        <G transform="scale(1,1)">
          <Text
            fill={fill}
            fontSize="350"
            fontWeight="bold"
            x="360"
            y="500"
            textAnchor="middle"
          >
            {speed}
          </Text>
        </G>
      ) : (
        <G transform="scale(0.75,1) translate(90,0)">
          <Text
            fill={fill}
            fontSize="350"
            fontWeight="bold"
            x="360"
            y="500"
            textAnchor="middle"
          >
            {speed}
          </Text>
        </G>
      )}
    </>
  );
};
