import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import { sizes, colors } from '../Utils';
import { POI_TYPE } from '../consts/POIType';
import { MyMapView } from '../components/MapView';

export const POIScreen = () => {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [poi, setPoi] = useState(null);
  const [text, setText] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const decToDeg = (dec) => {
    const step = Math.floor(dec);
    const mins = Math.floor((dec - step) * 60);
    const secs = Math.floor(((dec - step) * 60 - mins) * 60);
    return step + '°' + mins + "'" + secs + '"'
  }

  return (
    <View style={styles.container}>
      {poi ? (
        <ScrollView>
          <Text style={styles.label}>POI</Text>
          <Text>latitude: {poi.latitude}</Text>
          <Text>longitude: {poi.longitude}</Text>
          <Text>name: {poi.name}</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}

              label="Ime"
              value={text}
              //onChangeText={text => setText(text)}
              onSubmitEditing={({ nativeEvent }) => { setPoi({ ...poi, name: nativeEvent.text }) }}
              placeholder="ime poia"
            />
          </View>

          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            {POI_TYPE.forEach(([key, value]) => {
              return (
                <Picker.Item label={value} value={key} />
              )
            })}
          </Picker>
        </ScrollView>
      ) : (
        <Text style={styles.label}>POI Screen</Text>
      )}
      <MyMapView
        style={style(region, poi).map}
        region={region}
        onUserLocationChange={(e) => {
          //console.log(e.nativeEvent.coordinate.timestamp - (location ? location.coordinate.timestamp : 0))
          //console.log(e.nativeEvent)
          //setLocation(e.nativeEvent)
          if (!region) {
            setRegion({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
              latitudeDelta: 0.0005,
              longitudeDelta: 0.0005,
            });
          }
          //console.log(region, markers, e.nativeEvent)
        }}
        onLongPress={(e) => {
          console.log(e.nativeEvent)
          setPoi({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          })
          setRegion({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: 0.0005,
            longitudeDelta: 0.0005,
          })
          setMarkers([...markers, {
            latlng: e.nativeEvent.coordinate,
            title: 'x:' + decToDeg(e.nativeEvent.coordinate.longitude) + ' y:' + decToDeg(e.nativeEvent.coordinate.latitude),
            description: 'kordinate'
          }])
        }}
        markers={markers}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brightLight,
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
const style = (region, poi) => StyleSheet.create({
  map: {
    display: region ? 'flex' : 'none',
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width / (poi ? 2 : 1) - 20,
  },
});