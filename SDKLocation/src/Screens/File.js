import * as React from 'react';
import { Button, View, Text } from 'react-native';
import * as FileSystem from 'expo-file-system';

export const FileScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>File Screen</Text>
      <Button
        title="save file"
        onPress={() => saveFile()}
      />
      <Button
        title="load file"
        onPress={() => loadFile()}
      />
      <Button
        title="getTextFromFile"
        onPress={() => getTextFromFile()}
      />
      <Button
        title="test"
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