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
  if (type == 'b30') return <B30Button size={size} speed={speed} onPress={onPress} />
  if (type == 'b38') return <B38Button size={size} speed={speed} onPress={onPress} />
  if (type == 'c11') return <C11Button size={size} speed={speed} onPress={onPress} />
  if (type == 'c12') return <C12Button size={size} speed={speed} onPress={onPress} />
  if (type == 'c14') return <C14Button size={size} onPress={onPress} />
  if (type == 'c33') return <C33Button size={size} speed={speed} onPress={onPress} />
  if (type == 'c34') return <C34Button size={size} speed={speed} onPress={onPress} />
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

//A01 - Opasnost na cesti

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

//R - crveni krug

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
    <C14Button size = {size} onPress={props.onPress}>
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
    <AButton size = {size} onPress={props.onPress} >
      <View style={{
        flexDirection: "row",
        transform: [
          { translateY: props.children ? size/4 + size/25 : 0 },
          { rotate: "45deg" }
        ]
      }}>
        <View style={styles(size).strokes} />
        <View style={styles(size).strokes} />
        <View style={styles(size).strokes} />
      </View>
      <View style={{
        transform: [
          { translateY: props.children ? -size/2 : 0 },
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
    <TouchableOpacity
      style={[styles(size).triangle, style]}
      onPress={props.onPress}
    >
      <View style={[styles(size).triangleW, style]} />
    </TouchableOpacity>
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
      <Svg height={size} width={size} viewBox="0 0 113.76 113.76" {...props}>
        <G transform="matrix(1.3333333,0,0,-1.3333333,0,113.76)" id="g10">
          <G transform="scale(0.1)" id="g12">
            <Path
              d="M 250.504,1.41797 H 602.727 L 851.809,250.5 V 602.727 L 602.727,851.809 H 250.504 L 1.41797,602.727 V 250.5 L 250.504,1.41797"
              fill="#ffffff"
              stroke="#231f20"
              strokeWidth="2.83500004"
            />
            <Path
              d="M 264.164,34.4336 H 589.063 L 818.789,264.16 V 589.063 L 589.063,818.789 H 264.164 L 34.4336,589.063 V 264.16 L 264.164,34.4336"
              fill="#ee2c30"
              stroke="none"
            />
            <Text style={[styles(size).stop, textStyle]}>
              STOP
            </Text>
          </G>
        </G>
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
    borderTopColor: "red",
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
    backgroundColor: 'red',
  },
  noRed: {
    width: size * 1.4,
    height: size / 15,
    margin: size / 100,
    backgroundColor: 'red',
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
    backgroundColor: 'red',
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