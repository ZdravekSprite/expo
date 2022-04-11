import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { TextInput, List } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import { sizes } from '../Utils';
import { MyButton } from '../components/Buttons';

export const FileScreen = () => {
  const [text, setText] = React.useState("test");
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const [selectedLanguage, setSelectedLanguage] = React.useState();

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.label}>File Screen</Text>

      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

      <List.Section title="Accordions">
        <List.Accordion
          title="Uncontrolled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Controlled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={handlePress}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          label="Text"
          value={text}
          onChangeText={text => setText(text)}
          onSubmitEditing={({ nativeEvent }) => { setText(nativeEvent.text) }}
        />
      </View>
      </ScrollView>
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