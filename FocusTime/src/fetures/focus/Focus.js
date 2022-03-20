import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { colors, sizes } from '../../Utils';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What would you like to focus on?</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onSubmitEditing={({ nativeEvent }) => { setSubject(nativeEvent.text) }}
        />
        <RoundedButton
          size={sizes.xxl}
          title='+'
          onPress={() => { addSubject(subject) }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.darkLight,
    fontWeight: 'bold',
    fontSize: sizes.xx,
  },
  inputContainer: {
    paddingTop: sizes.xx,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: sizes.xx,
  },
});
