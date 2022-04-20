import React from 'react';
import { StyleSheet, View } from 'react-native';
import { sizes } from '../Utils';
import { MyButton } from './Buttons'

const formatTime = (time) => time < 10 ? `0${time}` : time;
const longToDate = (millisec) => {
  const d = new Date(millisec);
  return (d.toDateString() + ' ' + formatTime(d.getHours()) + ':' + formatTime(d.getMinutes()));
};

export const Item = ({ item, onPress, onSend, onDelete, backgroundColor, textColor }) => (
  <View style={styles.row}>
    <MyButton
      title={longToDate(item.title)}
      style={[ styles.item, backgroundColor, { flex: 1 } ]}
      textStyle={[styles.title, textColor]}
      onPress={onPress}
    />
    <MyButton
      title='send'
      style={[ styles.item, backgroundColor ]}
      textStyle={[styles.title, textColor]}
      onPress={onSend}
    />
    <MyButton
      title='X'
      style={[ styles.item, backgroundColor ]}
      textStyle={[styles.title, textColor]}
      onPress={onDelete}
    />
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'flex-start'
  },
  item: {
    padding: sizes.xs,
    margin: sizes.xxs,
  },
  title: {
    fontSize: sizes.xx,
  },
});
