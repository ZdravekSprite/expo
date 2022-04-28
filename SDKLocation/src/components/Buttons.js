import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle, Rect, Path, G } from 'react-native-svg';
import { sizes, colors } from '../Utils';

export const MyButton = ({
  style = {},
  textStyle = {},
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[fix_styles.button, style]}
      onPress={props.onPress}
    >
      <Text style={[fix_styles.buttonLabel, textStyle]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export const SignButton = ({
  style = {},
  textStyle = {},
  type = '',
  size = sizes.xxx,
  onPress = () => { },
  speed = null,
  ...props
}) => {
  if (type == 'semafor') return <SemaforButton size={size} onPress={onPress} />
  if (type == 'b01') return <B01Button size={size} onPress={onPress} />
  if (type == 'b02') return <B02Button size={size} onPress={onPress} />
  if (type == 'b03') return <B03Button size={size} onPress={onPress} />
  if (type == 'b04') return <B04Button size={size} onPress={onPress} />
  if (type == 'b05') return <B05Button size={size} onPress={onPress} />
  if (type == 'b30') return <B30Button size={size} speed={speed} onPress={onPress} />
  if (type == 'b38') return <B38Button size={size} speed={speed} onPress={onPress} />
  if (type == 'c11') return <C11Button size={size} speed={speed} onPress={onPress} />
  if (type == 'c12') return <C12Button size={size} speed={speed} onPress={onPress} />
  if (type == 'c14') return <C14Button size={size} onPress={onPress} />
  if (type == 'c33') return <C33Button size={size} speed={speed} onPress={onPress} />
  if (type == 'c34') return <C34Button size={size} speed={speed} onPress={onPress} />
  if (type == 'a00') return <A00Button size={size} onPress={onPress} />
  if (type == 'a01') return <A01Button size={size} onPress={onPress} />
  if (type == 'a02') return <A02Button size={size} onPress={onPress} />
  if (type == 'a03') return <A03Button size={size} onPress={onPress} />
  if (type == 'a04') return <A04Button size={size} onPress={onPress} />
  if (type == 'a04-1') return <A041Button size={size} onPress={onPress} />
  if (type == 'a04-2') return <A042Button size={size} onPress={onPress} />
  return (
    <TouchableOpacity
      style={[styles(size).kraj, style]}
      onPress={props.onPress}
    >
      <Text style={[
        styles(size * 1.5).limit,
        textStyle,
        { transform: [{ translateY: - size / 15 }] }
      ]}>
        ?
      </Text>
    </TouchableOpacity>
  );
};

// A00 - trokut
export const A00Button = ({
  style = {},
  textStyle = {},
  size = sizes.xxx,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).svg, style]}
      onPress={props.onPress}
    >
      <Svg height={size} width={size} viewBox="0 0 720 720" {...props}>
        <Path
          d="M675,666 A 35 35 0 0 0 708 620 L 390,70 A 35 35 0 0 0 330 70 L 12,620 A 35 35 0 0 0 45 666 z"
          fill="#fff"
          stroke="#000"
          strokeWidth="2"
        />
        <Path
          d="M675,662 A 31.5 31.5 0 0 0 703 619 L 385,70 A 31.5 31.5 0 0 0 335 70 L 18,619 A 31.5 31.5 0 0 0 45 662 z"
          fill={colors.red}
          stroke="none"
        />
        <Path
          d="M610,590 360,170 110,590 z"
          fill="#fff"
        />
        {props.children}
      </Svg>
    </TouchableOpacity>
  );
};

//A01 - Opasnost na cesti
export const A01Button = ({
  style = {},
  textStyle = {},
  size = sizes.xxx,
  ...props
}) => {
  return (
    <A00Button size={size} onPress={props.onPress}>
      <Path
        d="M345,456 A 15 15 0 0 0 375 456 L 390,283.5 A 30 30 0 0 0 330 283.5 z"
        fill="#000"
      />
      <Circle cx="360" cy="523.5" r="30" fill="#000" stroke="none" />
    </A00Button>
  );
};

//A02
export const A02Button = ({
  style = {},
  textStyle = {},
  size = sizes.xxx,
  ...props
}) => {
  return (
    <A00Button size={size} onPress={props.onPress}>
      <Rect fill="#000" x="247.5" y="448.5" width="225" height="45" transform="rotate(45,360,471)" />
      <Rect fill="#000" x="247.5" y="448.5" width="225" height="45" transform="rotate(-45,360,471)" />
    </A00Button>
  );
};

//A03
export const A03Button = ({
  style = {},
  textStyle = {},
  size = sizes.xxx,
  ...props
}) => {
  return (
    <A00Button size={size} onPress={props.onPress}>
      <G transform="scale(0.8824) translate(46 64)">
        <Path fill="#000" d="m 305.34093,366.1616 c 8.57198,-5.98839 18.20777,-10.84895 28.17687,-13.88847 40.14829,-12.26739 83.13081,2.5596 107.92154,34.2799 0.10938,0.13597 0.21862,0.27195 0.32527,0.4106 l 23.03368,-14.64035 c -0.13858,-0.18397 -0.27196,-0.37327 -0.41059,-0.55724 -31.30438,-41.67339 -86.92221,-61.36626 -138.81798,-45.51811 -12.56867,3.84472 -24.71342,9.95042 -35.54902,17.47456 l 8.04672,-43.68907 -22.13249,15.18159 -11.60616,62.52608 62.86735,12.2114 22.12983,-15.17893 z" />
        <Path fill="#000" d="m 321.21309,537.47173 c -9.50249,-4.36464 -18.56771,-10.21704 -26.23584,-17.27726 -30.89376,-28.42748 -39.84968,-73.00174 -25.03069,-110.4358 0.064,-0.16264 0.12538,-0.32528 0.18937,-0.48792 l -24.27881,-12.46203 c -0.0906,0.2133 -0.18657,0.42394 -0.27461,0.63457 -20.10881,48.08837 -8.95592,106.02584 30.96841,142.77201 9.67314,8.89725 21.08199,16.28275 33.05875,21.8232 l -41.75869,15.16026 24.29214,11.41153 59.80651,-21.62057 -21.2713,-60.40642 -24.28947,-11.41152 z" />
        <Path fill="#000" d="m 462.17179,443.09365 c 0.45593,10.44634 -0.61057,21.1833 -3.39146,31.22971 -11.18489,40.46558 -46.75525,68.78642 -86.82357,72.69513 -0.17337,0.016 -0.34661,0.0373 -0.51992,0.0533 v 27.289 c 0.22931,-0.016 0.45861,-0.0267 0.68789,-0.0453 51.96244,-4.06602 98.41907,-40.44158 112.88078,-92.73995 3.4981,-12.66999 4.86054,-26.19318 4.32197,-39.37508 l 32.55483,30.2272 -0.93851,-26.81974 -46.54461,-43.33713 -44.0277,46.50462 0.93585,26.81975 z" />
      </G>
    </A00Button>
  );
};

//A04
export const A04Button = ({
  style = {},
  textStyle = {},
  size = sizes.xxx,
  ...props
}) => {
  return (
    <A00Button size={size} onPress={props.onPress}>
      <Path fill="#000" d="m322.5,568.5 37.5,-37.5 37.5,37.5 0,-112.5 75,0 0,-30 -75,0 0,-105 -37.5,-37.5 -37.5,37.5 0,105 -75,0 0,30 75,0 z" />
    </A00Button>
  );
};

//A04-1
export const A041Button = ({
  style = {},
  textStyle = {},
  size = sizes.xxx,
  ...props
}) => {
  return (
    <A00Button size={size} onPress={props.onPress}>
      <Path fill="#000" d="m322.5,568.5 37.5,-37.5 37.5,37.5 0,-247.5 -37.5,-37.5 -37.5,37.5 0,105 -75,0 0,30 75,0 z" />
    </A00Button>
  );
};

//A04-2
export const A042Button = ({
  style = {},
  textStyle = {},
  size = sizes.xxx,
  ...props
}) => {
  return (
    <A00Button size={size} onPress={props.onPress}>
      <Path fill="#000" d="m322.5,568.5 37.5,-37.5 37.5,37.5 0,-112.5 75,0 0,-30 -75,0 0,-105 -37.5,-37.5 -37.5,37.5 z" />
    </A00Button>
  );
};

//A - crna kružnica
export const AButton = ({
  style = {},
  size = sizes.xxx,
  onPress = () => { },
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[{
        borderRadius: size / 2,
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: size / 100,
        margin: size / 30,
      }, style]}
      onPress={onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
};

//R - crveni krug

export const RButton = ({
  style = {},
  size = sizes.xl,
  onPress = () => { },
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[{
        borderRadius: size / 2,
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#FFF',
        borderWidth: size / 100,
        backgroundColor: colors.red,
        margin: size / 30,
      }, style]}
      onPress={onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
};

//B - plavi krug
export const BButton = ({
  size = sizes.xl,
  onPress = () => { },
  ...props
}) => {
  return (
    <RButton style={{ backgroundColor: colors.blue }} size={size} onPress={onPress}>
      {props.children}
    </RButton>
  );
};

//B03 - Zabrana prometa u oba smjera
export const B03Button = ({
  size = sizes.xl,
  ...props
}) => {
  return (
    <RButton size={size} onPress={props.onPress}>
      <View style={{
        borderRadius: size * 39 / 100,
        width: size * 39 / 50,
        height: size * 39 / 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
      }}>
        {props.children}
      </View>
    </RButton>
  );
};

//B04 - Zabrana prometa u jednom smjeru
export const B04Button = ({
  size = sizes.xl,
  ...props
}) => {
  return (
    <RButton size={size} onPress={props.onPress}>
      <View style={{
        width: size * 4 / 5,
        height: size / 5,
        backgroundColor: '#FFF',
      }} />
    </RButton>
  );
};

//B05 - Prednost prolaska za vozila iz suprotnog smjera
export const B05Button = ({
  size = sizes.xl,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <Svg height={size} width={size} viewBox="0 0 720 720" {...props}>
        <Circle
          fill="#FFF"
          stroke="#000"
          stroke-width="2"
          cx="362.5"
          cy="362.5"
          r="350"
        />
        <Circle
          fill="#FFF"
          stroke={colors.red}
          stroke-width="55"
          cx="362.5"
          cy="362.5"
          r="315"
        />
        <Path
          d="m168,437 91,91 91,-91 0,-56 -70,70 0,-259 -42,0 0,259 -70,-70 z"
          fill="#000"
        />
        <Path
          d="m552,283 -91,-91 -91,91 0,56 70,-70 0,259 42,0 0,-259 70,70 z"
          fill={colors.red}
        />
      </Svg>
    </TouchableOpacity>
  );
};

//B30 - Ograničenje brzine
export const B30Button = ({
  speed = null,
  size = sizes.xl,
  ...props
}) => {
  return (
    <B03Button size={size} onPress={props.onPress}>
      <Text style={{
        fontWeight: "bold",
        color: '#000',
        fontSize: size * 3 / 7,
        transform: [
          { scaleX: (speed > 99 ? 5 : 6) / 6 },
          { scaleY: 1.2 }
        ]
      }}>
        {speed}
      </Text>
    </B03Button>
  );
};

//B38 - Ograničenje brzine
export const B38Button = ({
  speed = null,
  size = sizes.xl,
  ...props
}) => {
  return (
    <BButton size={size} onPress={props.onPress}>
      <Text style={{
        fontWeight: "bold",
        color: '#FFF',
        fontSize: size * 3 / 7,
        transform: [
          { scaleX: (speed > 99 ? 5 : 6) / 6 },
          { scaleY: 1.2 }
        ]
      }}>
        {speed}
      </Text>
    </BButton>
  );
};

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = sizes.xl,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size).text, textStyle]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

// C11 - Prestanak ograničenja brzine
export const C11Button = ({
  speed = null,
  size = sizes.xxx,
  ...props
}) => {
  return (
    <C14Button size={size} onPress={props.onPress}>
      <Text style={{
        fontWeight: "bold",
        color: '#000',
        fontSize: size * 3 / 7,
        transform: [
          { scaleX: (speed > 99 ? 5 : 6) / 6 },
          { scaleY: 1.2 }
        ]
      }}>
        {speed}
      </Text>
    </C14Button>
  );
};

// C12 - Prestanak najmanje dopuštene brzine
export const C12Button = ({
  style = {},
  textStyle = {},
  size = sizes.xxx,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).lowSpeed, style]}
      onPress={props.onPress}
    >
      <Text style={[
        props.speed < 100 ? styles(size).limit : styles(size).limit100,
        fix_styles.low,
        textStyle,
        { transform: [{ translateY: size / 25 }] }
      ]}>
        {props.speed ?? ' '}
      </Text>
      <View style={{
        transform: [
          { translateY: props.speed < 100 ? - size / 3 : - size / 3.8 },
          { rotate: "-45deg" }
        ]
      }}>
        <View style={[styles(size).red]} />
      </View>
    </TouchableOpacity>
  );
};

// C14 - Prestanak svih zabrana
export const C14Button = ({
  size = sizes.xxx,
  ...props
}) => {
  return (
    <AButton size={size} onPress={props.onPress} >
      <View style={{
        flexDirection: "row",
        transform: [
          { translateY: props.children ? size / 4 + size / 25 : 0 },
          { rotate: "45deg" }
        ]
      }}>
        <View style={styles(size).strokes} />
        <View style={styles(size).strokes} />
        <View style={styles(size).strokes} />
      </View>
      <View style={{
        transform: [
          { translateY: props.children ? -size / 2 : 0 },
        ]
      }}>
        {props.children}
      </View>
    </AButton>
  );
};

export const SemaforButton = ({
  style = {},
  textStyle = {},
  size = sizes.xxx,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).semafor, style]}
      onPress={props.onPress}
    >
      <View>
        <View style={[styles(size).svjetla, fix_styles.red]} />
        <View style={[styles(size).svjetla, fix_styles.yellow]} />
        <View style={[styles(size).svjetla, fix_styles.green]} />
      </View>
    </TouchableOpacity>
  );
};

export const B01Button = ({
  style = {},
  textStyle = {},
  size = sizes.xxx,
  ...props
}) => {
  return (
    <A00Button style={{
      transform: [
        { rotate: "180deg" }
      ]
    }} size={size} onPress={props.onPress}>
    </A00Button>
  );
};

/*
<path id="path16" style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:#231f20;stroke-width:2.83500004;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 250.504,1.41797 H 602.727 L 851.809,250.5 V 602.727 L 602.727,851.809 H 250.504 L 1.41797,602.727 V 250.5 L 250.504,1.41797" />
<path id="path18" style="fill:#ee2c30;fill-opacity:1;fill-rule:nonzero;stroke:none" d="M 264.164,34.4336 H 589.063 L 818.789,264.16 V 589.063 L 589.063,818.789 H 264.164 L 34.4336,589.063 V 264.16 L 264.164,34.4336" />

*/
export const B02Button = ({
  style = {},
  textStyle = {},
  size = sizes.xxx,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).svg, style]}
      onPress={props.onPress}
    >
      <Svg height={size} width={size} viewBox="0 0 720 720" {...props}>
        <Path
          d="m220,710 280,0 210,-210 0,-280 -210,-210 -280,0 -210,210 0,280 z"
          fill="#fff"
          stroke="#000"
          strokeWidth="2"
        />
        <Path
          d="m230,682 260,0 192,-192 0,-260 -192,-192 -260,0 -192,192 0,260 z"
          fill={colors.red}
          stroke="none"
        />
        <Text style={[styles(size).stop, textStyle]}>
          STOP
        </Text>
      </Svg>
    </TouchableOpacity>
  );
};

export const C33Button = ({
  style = {},
  textStyle = {},
  size = sizes.xxx,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).low, style]}
      onPress={props.onPress}
    >
      <Text style={[
        props.speed < 100 ? styles(size).limit : styles(size).limit100,
        fix_styles.low,
        textStyle,
      ]}>
        {props.speed ?? ' '}
      </Text>
    </TouchableOpacity>
  );
};

export const C34Button = ({
  style = {},
  textStyle = {},
  size = sizes.xxx,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).low, style]}
      onPress={props.onPress}
    >
      <Text style={[
        props.speed < 100 ? styles(size).limit : styles(size).limit100,
        fix_styles.low,
        textStyle,
      ]}>
        {props.speed ?? ' '}
      </Text>
      <View style={{
        transform: [
          { translateY: props.speed < 100 ? - size / 3 : - size / 3.8 },
          { rotate: "-45deg" }
        ]
      }}>
        <View style={[styles(size).noRed]} />
      </View>
    </TouchableOpacity>
  );
};

const styles = (size) => StyleSheet.create({
  svg: {
    width: size,
    height: size,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: size / 2,
    borderRightWidth: size / 2,
    borderTopWidth: size,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: colors.red,
  },
  triangleW: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: size / 2 - 15,
    borderRightWidth: size / 2 - 15,
    borderTopWidth: size - 30,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#fff",
    transform: [
      { translateY: - size + 10 },
      { translateX: - size / 2 + 15 },
    ]
  },
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.darkHeavy,
    borderWidth: 2
  },
  speed: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#ee2c30",
    borderWidth: size / 10,
    margin: size / 30,
  },
  lowSpeed: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#59e",
    margin: size / 30,
  },
  low: {
    borderRadius: size / 16,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#59e",
    margin: size / 30,
  },
  kraj: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    margin: size / 30,
  },
  svjetla: {
    borderRadius: size / 8,
    width: size / 4,
    height: size / 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: size / 40,
    borderWidth: 1,
  },
  semafor: {
    borderRadius: size / 20,
    width: size / 2,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginHorizontal: size / 30 + size / 4,
    marginVertical: size / 30,
    backgroundColor: colors.darkAlfa,
  },
  text: {
    fontWeight: '600',
    color: colors.darkLight,
    fontSize: size / 3
  },
  limit: {
    fontWeight: "bold",
    color: colors.darkHeavy,
    fontSize: size / 2
  },
  limit100: {
    fontWeight: "bold",
    color: colors.darkHeavy,
    fontSize: size / 2.5,
    transform: [{ scaleY: 1.2 }]
  },
  stop: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: size / 3,
    transform: [
      { scaleY: 1.33 },
      { translateY: size / 5 },
      { translateX: size / 12 },
    ]
  },
  strokes: {
    width: size / 25,
    height: size,
    margin: size / 100,
    borderWidth: 1,
  },
  red: {
    width: size,
    height: size / 15,
    margin: size / 100,
    backgroundColor: colors.red,
  },
  noRed: {
    width: size * 1.4,
    height: size / 15,
    margin: size / 100,
    backgroundColor: colors.red,
  },
})

const fix_styles = StyleSheet.create({
  button: {
    borderRadius: sizes.xs,
    backgroundColor: colors.button,
    margin: sizes.sm,
  },
  buttonLabel: {
    padding: sizes.sm,
    fontSize: sizes.lg,
    fontWeight: "500",
    color: colors.label,
  },
  red: {
    backgroundColor: colors.red,
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  green: {
    backgroundColor: 'green',
  },
  blue: {
    backgroundColor: '#59e',
  },
  low: {
    color: '#fff',
    backgroundColor: '#59e',
  },
})