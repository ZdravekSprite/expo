import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import { sizes, colors } from '../Utils';
import { POI_TYPE } from '../consts/POIType';
import { MyMapView } from '../components/MapView';
import { MyButton } from '../components/Buttons';

export const POIScreen = () => {
  const [lock, setLock] = useState(false);
  const [region, setRegion] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [poi, setPoi] = useState(null);
  //const [text, setText] = useState(null);
  const [poiType, setPOIType] = useState(null);

  const decToDeg = (dec) => {
    const step = Math.floor(dec);
    const mins = Math.floor((dec - step) * 60);
    const secs = Math.floor(((dec - step) * 60 - mins) * 6000) / 100;
    return step + '°' + mins + "'" + secs + '"'
  }

  const onSave = () => {
    console.log('save')
    //console.log(poi, markers)
    console.log(poi, markers[markers.length-1])
    setPoi(null)
  }

  return (
    <View style={styles.container}>
      {poi ? (
        <ScrollView>
          <Text style={styles.label}>POI</Text>
          <Text>latitude: {poi.latlng.latitude}</Text>
          <Text>longitude: {poi.latlng.longitude}</Text>
          <Text>name: {poi.name}</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              label="Ime"
              //value={text}
              //onChangeText={text => setText(text)}
              onSubmitEditing={({ nativeEvent }) => { setPoi({ ...poi, name: nativeEvent.text }) }}
              placeholder="ime točke interesa"
            />
          </View>

          <Picker
            selectedValue={poiType}
            onValueChange={(itemValue, itemIndex) => {
              setPOIType(itemValue)
              setPoi({ ...poi, type: itemIndex })
            }
            }>
            {POI_TYPE.map(({ id, eng }) => {
              return (
                <Picker.Item key={id} label={eng} value={id} />
              )
            })}
          </Picker>
          <View style={styles.row}>
            <MyButton
              title='save'
              onPress={onSave}
            />
            <MyButton
              title='cancle'
              onPress={() => console.log('cancle')}
            />
          </View>
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
          poi ? ({}) : (
            setPoi({
              latlng: e.nativeEvent.coordinate,
            }),
            setRegion({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
              latitudeDelta: 0.0005,
              longitudeDelta: 0.0005,
            }),
            setMarkers([...markers, {
              latlng: e.nativeEvent.coordinate,
              title: 'x:' + decToDeg(e.nativeEvent.coordinate.longitude) + ' y:' + decToDeg(e.nativeEvent.coordinate.latitude),
              description: 'kordinata ' + markers.length
            }]),
            setLock(true)
          )
        }}
        markers={markers}
        onDragEnd={(e, index) => {
          let latlng = e.nativeEvent.coordinate;
          //if (index == markers.length - 1) setPoi({ ...poi, 'latlng': latlng })
          //setMarkers(markers.map(m => m.index == index ? {  ...m, latlng: latlng } : m))

          console.log('move', index, latlng)
          console.log('poi', { ...poi, 'latlng': latlng })
          markers[index].latlng = latlng
          console.log('markers', markers)
        }}
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
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'flex-start',
    width: '100%'
  },
});
const style = (region, poi) => StyleSheet.create({
  map: {
    display: region ? 'flex' : 'none',
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width / (poi ? 2 : 1) - 20,
  },
});