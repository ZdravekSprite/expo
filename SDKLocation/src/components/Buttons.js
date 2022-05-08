import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { sizes, colors } from '../Utils';
import { SvgA00, SvgE00 } from './svg/Buttons';
import { SvgA01, SvgA02, SvgA03, SvgA04, SvgA041, SvgA042, SvgA043, SvgA044, SvgA05, SvgA051, SvgA052, SvgA053, SvgA08, SvgA081, SvgA082, SvgA14, SvgA141, SvgA16, SvgA20, SvgA21 } from './svg/A';
import { SvgB01, SvgB02, SvgB03, SvgB04, SvgB05, SvgB21, SvgB28, SvgB281, SvgB29, SvgB30, SvgB36, SvgB37, SvgB38, SvgB45, SvgB451, SvgB452, SvgB47, SvgB471 } from './svg/B';
import { SvgC01, SvgC02, SvgC05, SvgC06, SvgC07, SvgC11, SvgC12, SvgC14, SvgC22, SvgC23, SvgC24, SvgC25, SvgC33, SvgC34, SvgC36, SvgC37, SvgC38, SvgC39, SvgC391, SvgC39E11 } from './svg/C';
import { SvgE01, SvgE02, SvgE06, SvgE11, SvgE19 } from './svg/E';

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

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = sizes.xl,
  onPress = () => { },
  title = '',
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={onPress}
    >
      <Text style={[styles(size).text, textStyle]}>
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
  m = null,
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
  if (type == 'a05') return <SvgA05 size={size} onPress={onPress} />
  if (type == 'a05-1') return <SvgA051 size={size} onPress={onPress} />
  if (type == 'a05-2') return <SvgA052 size={size} onPress={onPress} />
  if (type == 'a05-3') return <SvgA053 size={size} onPress={onPress} />
  if (type == 'a08') return <SvgA08 size={size} onPress={onPress} />
  if (type == 'a08-1') return <SvgA081 size={size} onPress={onPress} />
  if (type == 'a08-2') return <SvgA082 size={size} onPress={onPress} />
  if (type == 'a14') return <SvgA14 size={size} onPress={onPress} />
  if (type == 'a14-1') return <SvgA141 size={size} onPress={onPress} />
  if (type == 'a16') return <SvgA16 size={size} onPress={onPress} />
  if (type == 'a20') return <SvgA20 size={size} onPress={onPress} />
  if (type == 'a21') return <SvgA21 size={size} onPress={onPress} />

  if (type == 'semafor') return <SemaforButton size={size} onPress={onPress} />

  if (type == 'b01') return <SvgB01 size={size} onPress={onPress} />
  if (type == 'b02') return <SvgB02 size={size} onPress={onPress} />
  if (type == 'b03') return <SvgB03 size={size} onPress={onPress} />
  if (type == 'b04') return <SvgB04 size={size} onPress={onPress} />
  if (type == 'b05') return <SvgB05 size={size} onPress={onPress} />
  if (type == 'b21') return <SvgB21 size={size} onPress={onPress} />
  if (type == 'b28') return <SvgB28 size={size} onPress={onPress} />
  if (type == 'b28-1') return <SvgB281 size={size} onPress={onPress} />
  if (type == 'b29') return <SvgB29 size={size} onPress={onPress} />
  if (type == 'b36') return <SvgB36 size={size} onPress={onPress} />
  if (type == 'b37') return <SvgB37 size={size} onPress={onPress} />
  if (type == 'b45') return <SvgB45 size={size} onPress={onPress} />
  if (type == 'b45-1') return <SvgB451 size={size} onPress={onPress} />
  if (type == 'b45-2') return <SvgB452 size={size} onPress={onPress} />
  if (type == 'b47') return <SvgB47 size={size} onPress={onPress} />
  if (type == 'b47-1') return <SvgB471 size={size} onPress={onPress} />

  if (type == 'c01') return <SvgC01 size={size} onPress={onPress} />
  if (type == 'c02') return <SvgC02 size={size} onPress={onPress} />
  if (type == 'c05') return <SvgC05 size={size} onPress={onPress} />
  if (type == 'c06') return <SvgC06 size={size} onPress={onPress} />
  if (type == 'c07') return <SvgC07 size={size} onPress={onPress} />
  if (type == 'c14') return <SvgC14 size={size} onPress={onPress} />
  if (type == 'c24') return <SvgC24 size={size} onPress={onPress} />
  if (type == 'c25') return <SvgC25 size={size} onPress={onPress} />
  if (type == 'c36') return <SvgC36 size={size} onPress={onPress} />
  if (type == 'c37') return <SvgC37 size={size} onPress={onPress} />
  if (type == 'c38') return <SvgC38 size={size} onPress={onPress} />
  if (type == 'c39') return <SvgC39 size={size} onPress={onPress} />
  if (type == 'c39-1') return <SvgC391 size={size} onPress={onPress} />

  if (type == 'e06') return <SvgE06 size={size} onPress={onPress} />
  if (type == 'e11') return <SvgE11 size={size} onPress={onPress} />
  if (type == 'e19') return <SvgE19 size={size} onPress={onPress} />

  if (type == 'e01') return <SvgE01 size={size} m={m} onPress={onPress} />
  if (type == 'e02') return <SvgE02 size={size} m={m} onPress={onPress} />

  if (type == 'b30') return <SvgB30 size={size} speed={speed} onPress={onPress} />
  if (type == 'b38') return <SvgB38 size={size} speed={speed} onPress={onPress} />
  if (type == 'c11') return <SvgC11 size={size} speed={speed} onPress={onPress} />
  if (type == 'c12') return <SvgC12 size={size} speed={speed} onPress={onPress} />
  if (type == 'c22') return <SvgC22 size={size} speed={speed} onPress={onPress} />
  if (type == 'c23') return <SvgC23 size={size} speed={speed} onPress={onPress} />
  if (type == 'c33') return <SvgC33 size={size} speed={speed} onPress={onPress} />
  if (type == 'c34') return <SvgC34 size={size} speed={speed} onPress={onPress} />

  if (type == 'c39e11') return <SvgC39E11 size={size} onPress={onPress} />
  return (
    <TouchableOpacity
      style={[styles(size).kraj, style]}
      onPress={onPress}
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

export const SemaforButton = ({
  style = {},
  size = sizes.xxx,
  onPress = () => { },
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).semafor, style]}
      onPress={onPress}
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
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.darkHeavy,
    borderWidth: 2
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
})

const fix_styles = StyleSheet.create({
  button: {
    paddingHorizontal: sizes.sm,
    paddingVertical: sizes.xs,
    borderRadius: sizes.xs,
    backgroundColor: colors.button,
    margin: sizes.xs,
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
})