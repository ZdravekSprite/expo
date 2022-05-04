import React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Circle, Line, Defs, ClipPath, Rect, Path, G } from 'react-native-svg';
import { sizes, colors } from '../../Utils';
import { SvgText } from './Speed';

export const SvgSign = ({
  type = '',
  speed = null,
  size = sizes.xxx,
  onPress = () => { },
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
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
        strokeWidth="1"
      />
      <Path fill={colors.red} d="M675,662 A 31.5 31.5 0 0 0 703 619 L 385,70 A 31.5 31.5 0 0 0 335 70 L 18,619 A 31.5 31.5 0 0 0 45 662 z" />
      <Path fill="#fff" d="M610,590 360,170 110,590 z" />
      {props.children}
    </SvgSign>
  );
};

//B001 - Plavi krug
export const SvgB001 = ({
  ...props
}) => {
  return (
    <SvgSign {...props}>
      <Circle fill="#FFF" stroke="#000" strokeWidth="1" cx="360" cy="360" r="350" />
      <Circle fill={colors.blue} cx="360" cy="360" r="343" />
      {props.children}
    </SvgSign>
  );
};

//Arrow8a
export const Arr8a = ({
  fill = "#fff"
}) => {
  return (
    <Path fill={fill} d="m535,255 -175,-175 -175,175 0,98 140,-140 0,420 70,0 0,-420 140,140 z" />
  );
};

// C00
export const SvgC00 = ({
  ...props
}) => {
  return (
    <SvgSign {...props} >
      <SvgCa />
      {props.children}
    </SvgSign>
  );
};

// Plavi kvadrat
export const SvgCa = () => {
  return (
    <>
      <Rect fill="#fff" stroke="#000" strokeWidth="1" x="10" y="10" width="700" height="700" rx="32" />
      <Rect fill={colors.blue} x="17" y="17" width="686" height="686" rx="25" />
    </>
  );
};

//
export const SvgC001 = ({
  ...props
}) => {
  return (
    <SvgC00 {...props}>
      <Rect fill="#fff" x="80" y="80" width="560" height="560" />
      {props.children}
    </SvgC00>
  );
};

//
export const SvgC002 = ({
  ...props
}) => {
  return (
    <SvgSign {...props}>
      <Defs>
        <ClipPath id="C002">
          <Circle cx="360" cy="360" r="343" />
        </ClipPath>
      </Defs>
      <Circle fill="#fff" stroke="#000" strokeWidth="1" cx="360" cy="360" r="350" />
      <Circle fill="#fff" stroke="#000" strokeWidth="7" cx="360" cy="360" r="339.5" />
      {props.children}
    </SvgSign>
  );
};

//
export const SvgC0026 = ({
  ...props
}) => {
  return (
    <SvgC002 {...props}>
      {props.children}
      <G clipPath="url(#C002)">
        <G transform="translate(360,360)" >
          <G transform="rotate(-45,0,0)">
            <Rect fill="#000" x="-500" y="-56" width="1000" height="7" />
            <Rect fill="#000" x="-500" y="-35" width="1000" height="7" />
            <Rect fill="#000" x="-500" y="-14" width="1000" height="7" />
            <Rect fill="#000" x="-500" y="7" width="1000" height="7" />
            <Rect fill="#000" x="-500" y="28" width="1000" height="7" />
            <Rect fill="#000" x="-500" y="49" width="1000" height="7" />
          </G>
        </G>
      </G>
    </SvgC002>
  );
};

// Zona
export const SvgZona = ({
  speed = null,
  ...props
}) => {
  return (
    <SvgSign {...props}>
      <Rect fill="#fff" stroke="#000" strokeWidth="1" x="10" y="10" width="700" height="700" rx="39" />
      <Rect fill="#fff" stroke="#000" strokeWidth="7" x="20.5" y="20.5" width="679" height="679" rx="28.5" />
      <G transform="scale(1,1.25)">
        <SvgText fill="#000" fontSize="130" y="520" text="ZONA" />
      </G>
      {props.children}
    </SvgSign>
  );
};

// Završetak zone
export const SvgZonaEnd = ({
  ...props
}) => {
  return (
    <>
      <Defs>
        <ClipPath id="clip">
          <Rect x="17" y="17" width="686" height="686" rx="32" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip)">
        <G transform="translate(360,360)" >
          <G transform="rotate(-45,0,0)">
            <Rect fill="#000" x="-500" y="-45.5" width="1000" height="7" />
            <Rect fill="#000" x="-500" y="-24.5" width="1000" height="7" />
            <Rect fill="#000" x="-500" y="-3.5" width="1000" height="7" />
            <Rect fill="#000" x="-500" y="17.5" width="1000" height="7" />
            <Rect fill="#000" x="-500" y="38.5" width="1000" height="7" />
          </G>
        </G>
      </G>
    </>
  );
};

// E00
export const SvgE00 = ({
  ...props
}) => {
  return (
    <SvgSign {...props} >
      <G transform="translate(0 175)">
        <SvgEa />
        {props.children}
      </G>
    </SvgSign>
  );
};

//
export const SvgEa = () => {
  return (
    <>
      <Rect fill="#fff" stroke="#000" strokeWidth="1" x="10" y="10" width="700" height="350" rx="25" />
      <Rect fill="#fff" stroke="#000" strokeWidth="7" x="20.5" y="20.5" width="679" height="329" rx="14.5" />
    </>
  );
};

//
export const SvgEi = () => {
  return (
    <>
      <Circle fill="#000" cx="375" cy="85" r="18" />
      <Circle fill="none" stroke="#000" strokeWidth="20" cx="390" cy="220" r="70" />
      <Path fill="#fff" stroke="#fff" strokeWidth="25" d="m270,270 30,-70 h80 v-70 h-80 z" />
      <Path fill="none" stroke="#000" strokeWidth="21" strokeLinecap="round" d="m265,260 30,-70 h80 v-70" />
      <Rect fill="#000" x="305" y="125" width="75" height="21" />
    </>
  );
};

