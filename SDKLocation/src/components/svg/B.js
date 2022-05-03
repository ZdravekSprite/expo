import React from 'react';
import { Polygon, Line, Defs, ClipPath, Circle, Rect, Path, G } from 'react-native-svg';
import { SvgSign, SvgA00, SvgB001, Arr8a } from './Buttons';
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
        <SvgText fontSize="240" y="380" text='STOP' />
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
      <Circle fill="#FFF" stroke="#000" strokeWidth="1" cx="360" cy="360" r="350" />
      <Circle fill="#FFF" stroke={colors.red} strokeWidth="70" cx="360" cy="360" r="308" />
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
      <Circle fill="#FFF" stroke="#000" strokeWidth="1" cx="360" cy="360" r="350" />
      <Circle fill={colors.red} cx="360" cy="360" r="343" />
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

//B28 - Zabrana skretanja
export const SvgB28 = ({
  ...props
}) => {
  return (
    <SvgB00 {...props}>
      <Path stroke="#000" strokeWidth="56" d="m458,556 v-196 a98 98 0 0 0 -98 -98 h-140" />
      <Polygon fill="#000" points="150,262 255,192 255,332" />
    </SvgB00>
  );
};

//B28-1 - Zabrana skretanja
export const SvgB281 = ({
  ...props
}) => {
  return (
    <SvgB00 {...props}>
      <Path stroke="#000" strokeWidth="56" d="m248,556 v-196 a98 98 0 0 1 98 -98 h140" />
      <Polygon fill="#000" points="570,262 465,192 465,332" />
    </SvgB00>
  );
};

//B29 - Zabrana polukružnog okretanja
export const SvgB29 = ({
  ...props
}) => {
  return (
    <SvgB00 {...props}>
      <Path stroke="#000" strokeWidth="56" d="m458,556 v-280 a98 98 0 0 0 -196 0 v175" />
      <Polygon fill="#000" points="262,556 192,451 332,451" />
    </SvgB00>
  );
};

export const SvgB00 = ({
  ...props
}) => {
  return (
    <SvgB03 {...props}>
      <Defs>
        <ClipPath id="b00">
          <Circle cx="360" cy="360" r="343" />
        </ClipPath>
      </Defs>
      {props.children}
      <Line stroke={colors.red} strokeWidth="56" x1="10" y1="10" x2="710" y2="710" clipPath="url(#b00)" />
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

// B36 - Zabrana zaustavljanja i parkiranja
export const SvgB36 = ({
  ...props
}) => {
  return (
    <SvgB37 {...props}>
      <Line stroke={colors.red} strokeWidth="56" x1="10" y1="710" x2="710" y2="10" clipPath="url(#b00)" />
    </SvgB37>
  );
};

// B37 - Zabrana parkiranja
export const SvgB37 = ({
  ...props
}) => {
  return (
    <SvgSign {...props}>
      <Defs>
        <ClipPath id="b00">
          <Circle cx="360" cy="360" r="343" />
        </ClipPath>
      </Defs>
      <Circle fill="#FFF" stroke="#000" strokeWidth="1" cx="360" cy="360" r="350" />
      <Circle fill={colors.blue} stroke={colors.red} strokeWidth="70" cx="360" cy="360" r="308" />
      <Line stroke={colors.red} strokeWidth="56" x1="10" y1="10" x2="710" y2="710" clipPath="url(#b00)" />
      {props.children}
    </SvgSign>
  );
};

//B38 - Ograničenje brzine
export const SvgB38 = ({
  speed = null,
  ...props
}) => {
  return (
    <SvgB001 {...props}>
      <SpeedText speed={speed} />
      {props.children}
    </SvgB001>
  );
};

//B45 - Obavezan smjer
export const SvgB45 = ({
  ...props
}) => {
  return (
    <SvgB001 {...props}>
      <Arr8a />
    </SvgB001>
  );
};

//B45-1 - Obavezan smjer
export const SvgB451 = ({
  ...props
}) => {
  return (
    <SvgB001 {...props}>
      <G transform="rotate(90,360,360)">
        <Arr8a />
      </G>
    </SvgB001>
  );
};

//B45-2 - Obavezan smjer
export const SvgB452 = ({
  ...props
}) => {
  return (
    <SvgB001 {...props}>
      <G transform="rotate(-90,360,360)">
        <Arr8a />
      </G>
    </SvgB001>
  );
};

//B47 - Obavezno obilaženje
export const SvgB47 = ({
  ...props
}) => {
  return (
    <SvgB001 {...props}>
      <G transform="rotate(135,360,360)">
        <Arr8a />
      </G>
    </SvgB001>
  );
};

//B47-1 - Obavezno obilaženje
export const SvgB471 = ({
  ...props
}) => {
  return (
    <SvgB001 {...props}>
      <G transform="rotate(-135,360,360)">
        <Arr8a />
      </G>
    </SvgB001>
  );
};