import React from 'react';
import { Line, Polyline, Defs, ClipPath, Circle, Rect, Path, G } from 'react-native-svg';
import { SvgSign, SvgC00, SvgZona, SvgZonaEnd, SvgC001, Arr8a, SvgC002, SvgC0026, SvgCa, SvgEa, SvgEi } from './Buttons';
import { colors } from '../../Utils';
import { SpeedText, SvgText, ZonaSpeed } from './Speed';
import { SvgB38 } from './B';

// C01 - Prednost prolaza prema vozilima iz suprotnog smjera
export const SvgC01 = ({
  ...props
}) => {
  return (
    <SvgC00 {...props}>
      <Path fill={colors.red} d="m136,458 112,112 112,-112 0,-77 -84,84 0,-315 -56,0 0,315 -84,-84 z" />
      <Path fill="#fff" d="m584,248 -112,-112 -112,112 0,77 84,-84 0,315 56,0 0,-315 84,84 z" />
    </SvgC00>
  );
};

// C05 - Cesta s jednosmjernim prometom
export const SvgC05 = ({
  ...props
}) => {
  return (
    <SvgC00 {...props}>
      <Arr8a />
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

// C11 - Prestanak ograničenja brzine
export const SvgC11 = ({
  speed = null,
  ...props
}) => {
  return (
    <SvgC0026 {...props}>
      <SpeedText speed={speed} fill='#000' />
    </SvgC0026>
  );
};

//C12 - Prestanak najmanje dopuštene brzine
export const SvgC12 = ({
  ...props
}) => {
  return (
    <SvgB38 {...props}>
      <Defs>
        <ClipPath id="clip">
          <Circle cx="360" cy="360" r="343" />
        </ClipPath>
      </Defs>
      <Line stroke={colors.red} strokeWidth="50" x1="10" y1="710" x2="710" y2="10" clipPath="url(#clip)" />
    </SvgB38>
  );
};

//
export const SvgC14 = ({
  ...props
}) => {
  return (
    <SvgC002 {...props}>
      {props.children}
      <G clipPath="url(#C002)">
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
    </SvgC002>
  );
};

// C22 - Zona u kojoj je ograničena brzina
export const SvgC22 = ({
  speed = null,
  ...props
}) => {
  return (
    <SvgZona {...props}>
      <Circle fill="#FFF" stroke={colors.red} strokeWidth="42" cx="360" cy="290" r="189" />
      <ZonaSpeed speed={speed} />
      {props.children}
    </SvgZona>
  );
};

// C23 - Završetak zone u kojoj je ograničena brzina
export const SvgC23 = ({
  ...props
}) => {
  return (
    <SvgC22 {...props}>
      <SvgZonaEnd />
    </SvgC22>
  );
};

// C24 - Zona u kojoj je ograničeno trajanje parkiranja
export const SvgC24 = ({
  ...props
}) => {
  return (
    <SvgZona {...props}>
      <Defs>
        <ClipPath id="clipc24">
          <Circle cx="360" cy="290" r="210" />
        </ClipPath>
      </Defs>
      <Circle fill={colors.blue} stroke={colors.red} strokeWidth="42" cx="360" cy="290" r="189" />
      <Line stroke={colors.red} strokeWidth="35" x1="150" y1="80" x2="570" y2="500" clipPath="url(#clipc24)" />
      {props.children}
    </SvgZona>
  );
};

// C23 - Završetak zone u kojoj je ograničena brzina
export const SvgC25 = ({
  ...props
}) => {
  return (
    <SvgC24 {...props}>
      <SvgZonaEnd />
    </SvgC24>
  );
};

// C33 - Brzina koja se preporučuje
export const SvgC33 = ({
  speed = null,
  ...props
}) => {
  return (
    <SvgC00 {...props}>
      <SpeedText speed={speed} fill='#fff' />
      {props.children}
    </SvgC00>
  );
};

// C34 - Prestanak preporučene brzine
export const SvgC34 = ({
  ...props
}) => {
  return (
    <SvgC33 {...props}>
      <Defs>
        <ClipPath id="clip">
          <Rect x="17" y="17" width="686" height="686" rx="25" />
        </ClipPath>
      </Defs>
      <Line stroke={colors.red} strokeWidth="50" x1="10" y1="710" x2="710" y2="10" clipPath="url(#clip)" />
    </SvgC33>
  );
};

// C36 - Bolnica
export const SvgC36 = ({
  ...props
}) => {
  return (
    <SvgSign {...props}>
      <G transform="translate(360,360)">
        <G transform="scale(0.65)">
          <Rect fill="#fff" stroke="#000" strokeWidth="1" x="-350" y="-525" width="700" height="1050" rx="32" />
          <Rect fill={colors.blue} x="-343" y="-518" width="686" height="1036" />
          <Path fill="#fff" d="m-140,35 h70 v-175 h140 v175 h70 v-420 h-70 v175 h-140 v-175 h-70 z" />
          <SvgText speed="Bolnica" fontSize="150" x="0" y="385" />
        </G>
      </G>
    </SvgSign>
  );
};

// C37 - Ustanova hitne medicinske pomoći
export const SvgC37 = ({
  ...props
}) => {
  return (
    <SvgC001 {...props}>
      <Rect fill={colors.red} x="290" y="150" width="140" height="420" />
      <Rect fill={colors.red} x="150" y="290" width="420" height="140" />
    </SvgC001>
  );
};

// C38 - Policijska postaja
export const SvgC38 = ({
  ...props
}) => {
  return (
    <SvgC001 {...props}>
      <G transform="scale(1,1.4)">
        <SvgText speed="Policija" fill="#000" fontSize="150" y="310" />
      </G>
    </SvgC001>
  );
};

// C39 - Parkiralište
export const SvgC39 = ({
  ...props
}) => {
  return (
    <SvgC00 {...props}>
      <SvgText speed="P" fontSize="550" y="550" />
    </SvgC00>
  );
};

// C39E11 - Parkiralište
export const SvgC39E11 = ({
  ...props
}) => {
  return (
    <SvgSign {...props} >
      <G transform="scale(0.68)">
        <SvgCa />
        <SvgText speed="P" fontSize="550" y="550" />
        <G transform="translate(0 700)">
          <SvgEa />
          <SvgEi />
        </G>
      </G>
    </SvgSign>
  );
};

// C39-1 - Parkiralište u garaži
export const SvgC391 = ({
  ...props
}) => {
  return (
    <SvgC00 {...props}>
      <Polyline
        points="108,199 350,83.5 612,199"
        fill="none"
        stroke="#fff"
        strokeWidth="35"
      />
      <SvgText speed="P" fontSize="525" y="600" />
    </SvgC00>
  );
};

