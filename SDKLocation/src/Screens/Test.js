import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView, { Marker } from 'react-native-maps';

import { sizes, colors } from '../Utils';
import { MyButton } from '../components/Buttons';
import { BASE_URL } from '../config';

export const TestScreen = () => {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [poi, setPoi] = useState(null);
  const [poiList, setPoiList] = useState([]);
  const [route, setRoute] = useState([]);
  const [routesHistory, setRoutesHistory] = useState([]);

  const savePoiList = async () => {
    try {
      AsyncStorage.setItem('poiList', JSON.stringify(poiList));
    } catch (e) {
      console.log(e);
    }
  };
  const loadPoiList = async () => {
    try {
      const load = await AsyncStorage.getItem('poiList');

      if (load && JSON.parse(load).length) {
        setPoiList(JSON.parse(load));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const saveRoutesHistory = async () => {
    try {
      AsyncStorage.setItem('routesHistory', JSON.stringify(routesHistory));
    } catch (e) {
      console.log(e);
    }
  };
  const loadRoutesHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('routesHistory');

      if (history && JSON.parse(history).length) {
        setRoutesHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadPoiList();
    loadRoutesHistory();
    return () => {
      setPoiList([]);
      setRoutesHistory([]);
    };
  }, []);

  useEffect(() => {
    savePoiList();
  }, [poiList]);

  useEffect(() => {
    saveRoutesHistory();
  }, [routesHistory]);

  const newPoi = () => {
    console.log('new poi')
    if (location) {
      setPoi(
        {
          latitude: location.latitude,
          longitude: location.longitude,
        }
      )
    }
  }

  const canclePoi = () => {
    console.log('cancle poi')
    setPoi(null)
  }

  const recRoute = () => {
    console.log('rec route')
    setRoute([...route, location])
  }

  const saveRoute = () => {
    console.log('save route')
    if (route.length > 1) {
      setRoutesHistory([...routesHistory, route]);
    }
    setRoute([])
    setRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: location.accuracy * 0.00002,
      longitudeDelta: location.accuracy * 0.00002,
    });
  }

  const sendTest = () => {
    console.log('send')
    fetch(`${BASE_URL}/routes`, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
      body: JSON.stringify({ data: JSON.stringify(location), })
    }).then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      }).catch((error) => {
        console.log("Error");
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          numberOfLines={4}
          editable
          maxLength={40}
          onChangeText={text => onChangeText(text)}
          style={styles.input}
          value={JSON.stringify(location)}
        //onChangeText={text => setText(text)}
        //onSubmitEditing={({ nativeEvent }) => { setPoi({ ...poi, name: nativeEvent.text }) }}
        />
      </View>


      <View style={styles.row}>
        <MyButton
          title='print'
          onPress={() => {
            console.log('----------print----------')
            //console.log('l ', location)
            //console.log('r ', region)
            //console.log('p ', poi)
            //console.log('pl ', poiList)
            console.log('ro ', route)
            //console.log('rl ', routesHistory)
            console.log('-------------------------')
          }}
        />
        <MyButton
          title='send'
          onPress={sendTest}
        />
      </View>
      <View style={styles.row}>
        <MyButton
          title='new'
          onPress={newPoi}
        />
        <MyButton
          title='save'
          onPress={() => {
            console.log('save')
          }}
        />
        <MyButton
          title='cancle'
          onPress={canclePoi}
        />
      </View>
      <View style={styles.row}>
        <MyButton
          title='rec'
          onPress={recRoute}
        />
        <MyButton
          title='pause'
          onPress={() => {
            console.log('pause')
          }}
        />
        <MyButton
          title='save'
          onPress={saveRoute}
        />
      </View>
      <MapView
        style={style(region, poi, route).map}
        //region={region}
        showsUserLocation={true}
        followUserLocation={false}
        userLocationUpdateInterval={0}
        onUserLocationChange={(e) => {
          //console.log(e.nativeEvent.coordinate.timestamp - location.timestamp)
          console.log(e.nativeEvent.coordinate)
          setLocation(e.nativeEvent.coordinate)
          if (!poi) setRegion({
            ...region,
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: region ? region.latitudeDelta : e.nativeEvent.coordinate.accuracy * 0.00002,
            longitudeDelta: region ? region.longitudeDelta : e.nativeEvent.coordinate.accuracy * 0.00002,
          });
        }}
        onRegionChangeComplete={(e) => {
          //console.log(e)
          setRegion(e);
        }}
      >
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'flex-start',
    width: '100%'
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
const style = (region, poi, route) => StyleSheet.create({
  map: {
    display: region && !route.length ? 'flex' : 'none',
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width / (poi ? 2 : 1) - 20,
  },
});