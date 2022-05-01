import React from 'react';
import { Circle, Rect, Path, G } from 'react-native-svg';
import { SvgSign, SvgA00 } from './Buttons';
import { colors } from '../../Utils';
import { SpeedText, SvgText } from './Speed';

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
  speed = 'STOP',
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
      <Path fill={colors.red} d="m230,682 260,0 192,-192 0,-260 -192,-192 -260,0 -192,192 0,260 z" />
      <G transform="scale(1,1.2)">
        <SvgText fontSize="240" y="380" speed='STOP' />
      </G>
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
      <Circle fill="#FFF" stroke={colors.red} strokeWidth="55" cx="362.5" cy="362.5" r="315" />
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
      <Circle fill={colors.red} stroke={colors.red} strokeWidth="55" cx="362.5" cy="362.5" r="315" />
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
      <Path fill="#000" d="m168,437 91,91 91,-91 0,-56 -70,70 0,-259 -42,0 0,259 -70,-70 z" />
      <Path fill={colors.red} d="m552,283 -91,-91 -91,91 0,56 70,-70 0,259 42,0 0,-259 70,70 z" />
    </SvgB03>
  );
};

//B30 - Ograničenje brzine
export const SvgB30 = ({
  speed = null,
  ...props
}) => {
  return (
    <SvgB03 {...props}>
      <SpeedText speed={speed} fill='#000' />
      {props.children}
    </SvgB03>
  );
};

//B38 - Ograničenje brzine
export const SvgB38 = ({
  speed = null,
  ...props
}) => {
  return (
    <SvgSign {...props}>
      <Circle fill="#FFF" stroke="#000" strokeWidth="2" cx="362.5" cy="362.5" r="350" />
      <Circle fill={colors.blue} stroke={colors.blue} strokeWidth="55" cx="362.5" cy="362.5" r="315" />
      <SpeedText speed={speed} />
      {props.children}
    </SvgSign>
  );
};

