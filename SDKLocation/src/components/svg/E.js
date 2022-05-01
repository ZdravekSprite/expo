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
      <SvgText fill={fill} fontSize="350" y="490" speed={speed} />
    </SvgE00>
  );
};

// E06 - Dopunska ploča
export const SvgE06 = ({
  ...props
}) => {
  return (
    <SvgE00 {...props}>
      <Rect fill="#000" x="258.5" y="80" width="297.5" height="143.5" />
      <Path fill="#000" d="m164,262 h357 l35,-13 v-15 h-304.5 v-108.5 h-56 l-31.5,52.5 z" />
      <Circle fill="#000" stroke="#fff" strokeWidth="7" cx="220" cy="260" r="30" />
      <Circle fill="#000" stroke="#fff" strokeWidth="7" cx="493" cy="260" r="30" />
      <Path fill="#fff" d="m173,178 h70 v-44 h-44 z" />
    </SvgE00>
  );
};

// E11 - Dopunska ploča
export const SvgE11 = ({
  ...props
}) => {
  return (
    <SvgE00 {...props}>
      <Circle fill="#000" cx="375" cy="85" r="18" />
      <Circle fill="none" stroke="#000" strokeWidth="20" cx="390" cy="220" r="70" />
      <Path fill="#fff" stroke="#fff" strokeWidth="25" d="m270,270 30,-70 h80 v-70 h-80 z" />
      <Path fill="none" stroke="#000" strokeWidth="21" strokeLinecap="round" d="m265,260 30,-70 h80 v-70" />
      <Rect fill="#000" x="305" y="125" width="75" height="21" />
    </SvgE00>
  );
};

// E19 - Dopunska ploča
export const SvgE19 = ({
  ...props
}) => {
  return (
    <SvgE00 {...props}>
      <Path fill="#000" d="m80,220 h560 v-35 h-140 a250 250 0 0 0 -280 0 h-140 z" />
    </SvgE00>
  );
};