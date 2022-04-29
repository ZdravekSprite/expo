import React from 'react';
import { Circle, Rect, Path, G } from 'react-native-svg';
import { SvgA00 } from './Buttons';

//A01 - Opasnost na cesti
export const SvgA01 = ({
  ...props
}) => {
  return (
    <SvgA00 {...props}>
      <Path
        d="M345,456 A 15 15 0 0 0 375 456 L 390,283.5 A 30 30 0 0 0 330 283.5 z"
        fill="#000"
      />
      <Circle cx="360" cy="523.5" r="30" fill="#000" stroke="none" />
    </SvgA00>
  );
};

//A02 - Raskrižje cesta iste važnosti
export const SvgA02 = ({
  ...props
}) => {
  return (
    <SvgA00 {...props}>
      <Rect fill="#000" x="247.5" y="448.5" width="225" height="45" transform="rotate(45,360,471)" />
      <Rect fill="#000" x="247.5" y="448.5" width="225" height="45" transform="rotate(-45,360,471)" />
    </SvgA00>
  );
};

//A03 - Raskrižje s kružnim tokom prometa
export const SvgA03 = ({
  ...props
}) => {
  return (
    <SvgA00 {...props}>
      <G transform="scale(0.8824) translate(46 64)">
        <Path fill="#000" d="m 305.34093,366.1616 c 8.57198,-5.98839 18.20777,-10.84895 28.17687,-13.88847 40.14829,-12.26739 83.13081,2.5596 107.92154,34.2799 0.10938,0.13597 0.21862,0.27195 0.32527,0.4106 l 23.03368,-14.64035 c -0.13858,-0.18397 -0.27196,-0.37327 -0.41059,-0.55724 -31.30438,-41.67339 -86.92221,-61.36626 -138.81798,-45.51811 -12.56867,3.84472 -24.71342,9.95042 -35.54902,17.47456 l 8.04672,-43.68907 -22.13249,15.18159 -11.60616,62.52608 62.86735,12.2114 22.12983,-15.17893 z" />
        <Path fill="#000" d="m 321.21309,537.47173 c -9.50249,-4.36464 -18.56771,-10.21704 -26.23584,-17.27726 -30.89376,-28.42748 -39.84968,-73.00174 -25.03069,-110.4358 0.064,-0.16264 0.12538,-0.32528 0.18937,-0.48792 l -24.27881,-12.46203 c -0.0906,0.2133 -0.18657,0.42394 -0.27461,0.63457 -20.10881,48.08837 -8.95592,106.02584 30.96841,142.77201 9.67314,8.89725 21.08199,16.28275 33.05875,21.8232 l -41.75869,15.16026 24.29214,11.41153 59.80651,-21.62057 -21.2713,-60.40642 -24.28947,-11.41152 z" />
        <Path fill="#000" d="m 462.17179,443.09365 c 0.45593,10.44634 -0.61057,21.1833 -3.39146,31.22971 -11.18489,40.46558 -46.75525,68.78642 -86.82357,72.69513 -0.17337,0.016 -0.34661,0.0373 -0.51992,0.0533 v 27.289 c 0.22931,-0.016 0.45861,-0.0267 0.68789,-0.0453 51.96244,-4.06602 98.41907,-40.44158 112.88078,-92.73995 3.4981,-12.66999 4.86054,-26.19318 4.32197,-39.37508 l 32.55483,30.2272 -0.93851,-26.81974 -46.54461,-43.33713 -44.0277,46.50462 0.93585,26.81975 z" />
      </G>
    </SvgA00>
  );
};

//A04 - Raskrižje sa sporednom cestom pod određenim kutom
export const SvgA04 = ({
  ...props
}) => {
  return (
    <SvgA00 {...props}>
      <Path fill="#000" d="m322.5,568.5 37.5,-37.5 37.5,37.5 0,-112.5 75,0 0,-30 -75,0 0,-105 -37.5,-37.5 -37.5,37.5 0,105 -75,0 0,30 75,0 z" />
    </SvgA00>
  );
};

//A04-1
export const SvgA041 = ({
  ...props
}) => {
  return (
    <SvgA00 {...props}>
      <Path fill="#000" d="m322.5,568.5 37.5,-37.5 37.5,37.5 0,-247.5 -37.5,-37.5 -37.5,37.5 0,105 -75,0 0,30 75,0 z" />
    </SvgA00>
  );
};

//A04-2
export const SvgA042 = ({
  ...props
}) => {
  return (
    <SvgA00 {...props}>
      <Path fill="#000" d="m322.5,568.5 37.5,-37.5 37.5,37.5 0,-112.5 75,0 0,-30 -75,0 0,-105 -37.5,-37.5 -37.5,37.5 z" />
    </SvgA00>
  );
};

//A04-3
export const SvgA043 = ({
  ...props
}) => {
  return (
    <SvgA00 {...props}>
      <Path fill="#000" d="m322.5,568.5 37.5,-37.5 37.5,37.5 0,-247.5 -37.5,-37.5 -37.5,37.5 0,90 -82.3,142.5 26,15 56.3,-97.5 z" />
    </SvgA00>
  );
};

//A04-4
export const SvgA044 = ({
  ...props
}) => {
  return (
    <SvgA00 {...props}>
      <Path fill="#000" d="m322.5,568.5 37.5,-37.5 37.5,37.5 0,-97.5 56.3,97.5 26,-15 -82.3,-142.5 0,-90 -37.5,-37.5 -37.5,37.5 z" />
    </SvgA00>
  );
};

