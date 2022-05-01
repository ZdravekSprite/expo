import React from 'react';
import { Circle, Rect, Path, G } from 'react-native-svg';
import { SvgSign, SvgE00 } from './Buttons';
import { sizes, colors } from '../../Utils';
import { SvgText } from './Speed';

// E01 - Dopunska ploča
export const SvgE01 = ({
  speed = null,
  fill = '#000',
  ...props
}) => {
  return (
    <SvgE00 {...props}>
      <SvgText fill={fill} fontSize="350" y="490" speed={speed}/>
    </SvgE00>
  );
};

