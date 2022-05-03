import React from 'react';
import { Circle, Rect, Path, G } from 'react-native-svg';
import { SvgSign, SvgE00, SvgEi } from './Buttons';
import { sizes, colors } from '../../Utils';
import { SvgText } from './Speed';

// E01 - Dopunska ploča
export const SvgE01 = ({
  m = null,
  fill = '#000',
  ...props
}) => {
  return (
    <SvgE00 {...props}>
      <G transform="scale(1,1.3)">
        <SvgText fill={fill} fontSize="180" y="200" text={m + ' m'} />
      </G>
    </SvgE00>
  );
};

// E02 - Dopunska ploča
export const SvgE02 = ({
  m = null,
  fill = '#000',
  ...props
}) => {
  return (
    <SvgE00 {...props}>
      <G transform="scale(1,1.3)">
        <SvgText fill={fill} fontSize="140" y="190" text={m + ' m'} />
      </G>
      <Path fill={fill} d="m59,178 l24.5,-7 v87.5 h21 v-87.5 l24.5,-7 -35,-63  z" />
      <Path fill={fill} d="m591,178 l24.5,-7 v87.5 h21 v-87.5 l24.5,-7 -35,-63  z" />
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
      <SvgEi />
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