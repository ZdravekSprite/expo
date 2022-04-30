import React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Line, Defs, ClipPath, Circle, Rect, Path, G } from 'react-native-svg';
import { SvgSign, SvgC00 } from './Buttons';
import { sizes, colors } from '../../Utils';
import { SpeedText } from './Speed';

// C01 - Prednost prolaza prema vozilima iz suprotnog smjera
export const SvgC01 = ({
  ...props
}) => {
  return (
    <SvgC00 {...props}>
      <Path
        d="m136,458 112,112 112,-112 0,-77 -84,84 0,-315 -56,0 0,315 -84,-84 z"
        fill={colors.red}
      />
      <Path
        d="m584,248 -112,-112 -112,112 0,77 84,-84 0,315 56,0 0,-315 84,84 z"
        fill="#fff"
      />
    </SvgC00>
  );
};

// C05 - Cesta s jednosmjernim prometom
export const SvgC05 = ({
  ...props
}) => {
  return (
    <SvgC00 {...props}>
      <Path
        d="m535,255 -175,-175 -175,175 0,98 140,-140 0,420 70,0 0,-420 140,140 z"
        fill="#fff"
      />
    </SvgC00>
  );
};

// C06 - Cesta s prednošću prolaska
export const SvgC06 = ({
  ...props
}) => {
  return (
    <SvgSign {...props}>
      <G transform="translate(360,360)">
        <G transform="scale(0.71) rotate(-45,0,0)">
          <Rect fill="#fff" stroke="#000" strokeWidth="1" x="-350" y="-350" width="700" height="700" rx="25" />
          <Rect fill="#fff" stroke="#000" strokeWidth="7" x="-339.5" y="-339.5" width="679" height="679" rx="14.5" />
          <Rect fill={colors.yellow} stroke="#000" strokeWidth="7" x="-206.5" y="-206.5" width="413" height="413" />
          {props.children}
        </G>
      </G>
    </SvgSign>
  );
};

// C07 - Završetak ceste s prednošću prolaska
export const SvgC07 = ({
  ...props
}) => {
  return (
    <SvgC06 {...props}>
      <Rect fill="#000" x="-343" y="-35" width="686" height="14" />
      <Rect fill="#000" x="-343" y="-7" width="686" height="14" />
      <Rect fill="#000" x="-343" y="21" width="686" height="14" />
    </SvgC06>
  );
};

//C12 - Prestanak najmanje dopuštene brzine
export const SvgC12 = ({
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
        <Defs>
          <ClipPath id="clip">
            <Circle cx="360" cy="360" r="343" />
          </ClipPath>
        </Defs>
        <Circle fill="#FFF" stroke="#000" strokeWidth="1" cx="360" cy="360" r="350" />
        <Circle fill={colors.blue} cx="360" cy="360" r="343" />
        <SpeedText speed={speed} fill='#fff'/>
        <Line stroke={colors.red} strokeWidth="50" x1="10" y1="710" x2="710" y2="10" clipPath="url(#clip)" />
      </Svg>
    </TouchableOpacity>
  );
};

// C33 - Brzina koja se preporučuje
export const SvgC33 = ({
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
        <Rect fill="#fff" stroke="#000" strokeWidth="1" x="10" y="10" width="700" height="700" rx="32" />
        <Rect fill={colors.blue} x="17" y="17" width="686" height="686" rx="25" />
        <SpeedText speed={speed} fill='#fff'/>
      </Svg>
    </TouchableOpacity>
  );
};

// C34 - Prestanak preporučene brzine
export const SvgC34 = ({
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
        <Defs>
          <ClipPath id="clip">
            <Rect x="17" y="17" width="686" height="686" rx="25" />
          </ClipPath>
        </Defs>
        <Rect fill="#fff" stroke="#000" strokeWidth="1" x="10" y="10" width="700" height="700" rx="32" />
        <Rect fill={colors.blue} x="17" y="17" width="686" height="686" rx="25" />
        <SpeedText speed={speed} fill='#fff'/>
        <Line stroke={colors.red} strokeWidth="50" x1="10" y1="710" x2="710" y2="10" clipPath="url(#clip)" />
      </Svg>
    </TouchableOpacity>
  );
};
