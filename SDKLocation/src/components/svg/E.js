import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Svg, { Circle, Rect, Path, G } from 'react-native-svg';
import { SvgSign, SvgE00 } from './Buttons';
import { sizes, colors } from '../../Utils';

// E01 - Dopunska ploča
export const SvgE01 = ({
  speed = null,
  size = sizes.xxx,
  ...props
}) => {
  return (
    <SvgE00 {...props}>
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
    </SvgE00>
  );
};

