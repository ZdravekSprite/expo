import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { sizes, colors } from '../Utils';
import { SvgA00, SvgE00 } from './svg/Buttons';
import { SvgA01, SvgA02, SvgA03, SvgA04, SvgA041, SvgA042, SvgA043, SvgA044 } from './svg/A';
import { SvgB01, SvgB02, SvgB03, SvgB04, SvgB05, SvgB30, SvgB38 } from './svg/B';
import { SvgC01, SvgC05, SvgC06, SvgC07, SvgC12, SvgC22, SvgC23, SvgC24, SvgC25, SvgC33, SvgC34, SvgC36 } from './svg/C';

export const MyButton = ({
  style = {},
  textStyle = {},
  onPress = () => { },
  title = '',
}) => {
  return (
    <TouchableOpacity
      style={[fix_styles.button, style]}
      onPress={onPress}
    >
      <Text style={[fix_styles.buttonLabel, textStyle]}>
        {title}
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
  if (type == 'a00') return <SvgA00 size={size} onPress={onPress} />
  if (type == 'e00') return <SvgE00 size={size} onPress={onPress} />

  if (type == 'a01') return <SvgA01 size={size} onPress={onPress} />
  if (type == 'a02') return <SvgA02 size={size} onPress={onPress} />
  if (type == 'a03') return <SvgA03 size={size} onPress={onPress} />
  if (type == 'a04') return <SvgA04 size={size} onPress={onPress} />
  if (type == 'a04-1') return <SvgA041 size={size} onPress={onPress} />
  if (type == 'a04-2') return <SvgA042 size={size} onPress={onPress} />
  if (type == 'a04-3') return <SvgA043 size={size} onPress={onPress} />
  if (type == 'a04-4') return <SvgA044 size={size} onPress={onPress} />

  if (type == 'semafor') return <SemaforButton size={size} onPress={onPress} />

  if (type == 'b01') return <SvgB01 size={size} onPress={onPress} />
  if (type == 'b02') return <SvgB02 size={size} onPress={onPress} />
  if (type == 'b03') return <SvgB03 size={size} onPress={onPress} />
  if (type == 'b04') return <SvgB04 size={size} onPress={onPress} />
  if (type == 'b05') return <SvgB05 size={size} onPress={onPress} />

  if (type == 'c01') return <SvgC01 size={size} onPress={onPress} />
  if (type == 'c05') return <SvgC05 size={size} onPress={onPress} />
  if (type == 'c06') return <SvgC06 size={size} onPress={onPress} />
  if (type == 'c07') return <SvgC07 size={size} onPress={onPress} />
  if (type == 'c24') return <SvgC24 size={size} onPress={onPress} />
  if (type == 'c25') return <SvgC25 size={size} onPress={onPress} />

  if (type == 'b30') return <SvgB30 size={size} speed={speed} onPress={onPress} />
  if (type == 'b38') return <SvgB38 size={size} speed={speed} onPress={onPress} />
  if (type == 'c11') return <C11Button size={size} speed={speed} onPress={onPress} />
  if (type == 'c12') return <SvgC12 size={size} speed={speed} onPress={onPress} />
  if (type == 'c14') return <C14Button size={size} onPress={onPress} />
  if (type == 'c22') return <SvgC22 size={size} speed={speed} onPress={onPress} />
  if (type == 'c23') return <SvgC23 size={size} speed={speed} onPress={onPress} />
  if (type == 'c33') return <SvgC33 size={size} speed={speed} onPress={onPress} />
  if (type == 'c34') return <SvgC34 size={size} speed={speed} onPress={onPress} />
  if (type == 'c36') return <SvgC36 size={size} speed={speed} onPress={onPress} />
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
    paddingHorizontal: sizes.sm,
    paddingVertical: sizes.xs,
    borderRadius: sizes.xs,
    backgroundColor: colors.button,
    margin: sizes.xs,
    minWidth: "48%",
    textAlign: "center",
  },
  buttonLabel: {
    padding: sizes.xs,
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