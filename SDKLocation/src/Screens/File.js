import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';

import { sizes } from '../Utils';
import { MyButton } from '../components/Buttons';

export const FileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>File Screen</Text>
      <MyButton
        title='save file'
        onPress={() => saveFile()}
      />
      <MyButton
        title='load file'
        onPress={() => loadFile()}
      />
      <MyButton
        title='getTextFromFile'
        onPress={() => getTextFromFile()}
      />
      <MyButton
        title='test'
        onPress={() => test()}
      />
    </View>
  );
}
const saveFile = async () => {
  let filename = FileSystem.documentDirectory + "text.txt";
  console.log(filename);
  await FileSystem.writeAsStringAsync(filename, "Hello World test", { encoding: FileSystem.EncodingType.UTF8 });
}

const loadFile = async () => {
  let filename = FileSystem.documentDirectory + "text.txt";
  let file = await FileSystem.readAsStringAsync(filename, { encoding: FileSystem.EncodingType.UTF8 });
  return file;
}

const getTextFromFile = async () => {
  let value = await loadFile();
  //alert(value);
  console.log(value);
}

const test = async () => {
  console.log('test');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizes.xx,
  },
  label: {
    padding: sizes.md,
    fontSize: sizes.xl,
    fontWeight: "900",
  },
});