import React from 'react';
import { Line, Defs, ClipPath, Circle, Rect, Path, G } from 'react-native-svg';
import { SvgSign, SvgC00, SvgZona, SvgZonaEnd } from './Buttons';
import { colors } from '../../Utils';
import { SpeedText, SvgText, ZonaSpeed } from './Speed';
import { SvgB38 } from './B';

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
      <Rect fill="#fff" stroke="#000" strokeWidth="1" x="10" y="10" width="700" height="700" rx="32" />
      <Rect fill={colors.blue} x="17" y="17" width="686" height="686" rx="25" />
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

