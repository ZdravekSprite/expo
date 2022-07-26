import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-paper';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { gpsLocation } from '../services/location';
import { POI_TYPE } from '../constants/PoiTypes';

export interface Poi {
  name?: string;
  type?: number;
}

export default function TabTwoScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [poiName, setPOIName] = useState<string | undefined>(undefined);
  const [poiType, setPOIType] = useState<number | null>(null);

  useEffect(() => {
    handleGetLocationPress();
  }, []);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  }
  if (location) {
    //text = JSON.stringify(location);
    text = location.timestamp + '';
  }

  async function handleGetLocationPress() {
    let location = await gpsLocation();
    //console.log('location: ', location);
    location && location.location && setLocation(location.location);
    location && location.errorMsg && setErrorMsg(location.errorMsg);
    console.log('getLocation');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dodavanje POI-a</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.paragraph}>{text}</Text>
      <Text style={styles.paragraph}>{errorMsg}</Text>
      <Text style={styles.paragraph}>x: {location ? location.coords.longitude : ''}</Text>
      <Text style={styles.paragraph}>y: {location ? location.coords.latitude : ''}</Text>
      <Text style={styles.paragraph}>tip:</Text>
      <Picker
        selectedValue={poiType}
        onValueChange={(itemValue, itemIndex) => {
          setPOIType(itemValue)
          //setPoi({ ...poi, type: itemIndex })
        }
        }>
        {POI_TYPE.map(({ id, eng }) => {
          return (
            <Picker.Item key={id} label={eng} value={id} />
          )
        })}
      </Picker>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          label="Ime"
          value={poiName}
          //onChangeText={text => setText(text)}
          onSubmitEditing={({ nativeEvent }) => { setPOIName(nativeEvent.text ) }}
          placeholder="ime točke interesa"
        />
      </View>
      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleGetLocationPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Get new location
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 15,
  },
});