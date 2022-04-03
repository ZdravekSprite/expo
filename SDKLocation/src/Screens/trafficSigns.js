import React, { useState, useEffect } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Device from 'expo-device';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { PrestanakButton, SpeedLimitButton } from '../Components';

export const TrafficSignsScreen = () => {
  const [rec, setRec] = useState(false);
  const [route, setRoute] = useState([]);
  const [settlement, setSettlement] = useState(true);
  const [speedLimit, setSpeedLimit] = useState(null);
  const [location, setLocation] = useState({
    timestamp: 0,
    coords: {
      accuracy: null,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      latitude: null,
      longitude: null,
      speed: null,
    },
    settlement: false,
    speedLimit: null,
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [routesHistory, setRoutesHistory] = useState([]);

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
    loadRoutesHistory();
  }, []);

  useEffect(() => {
    saveRoutesHistory();
  }, [routesHistory]);

  const getLocation = async () => {
    if (Platform.OS === 'android' && !Device.isDevice) {
      setErrorMsg(
        'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
      );
      return;
    }
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation({
      ...location,
      settlement: settlement,
      speedLimit: speedLimit,
    });
  };

  const changeSpeed = (speed) => {
    setSpeedLimit(speed);
  }

  const addLocation = () => {
    setRoute([
      ...route,
      {
        ...location,
        key: String(route.length + 1),
      }
    ]
    );
  }
  useEffect(() => {
    if (rec) {
      getLocation();
    }
  }, [rec, speedLimit, settlement]);

  useEffect(() => {
    if (rec) {
      addLocation();
    }
  }, [location]);

  const addRoute = () => {
    setRoutesHistory([
      ...routesHistory,
      {
        //key: String(routesHistory.length + 1),
        id: route[0].timestamp,
        title: route[0].timestamp,
        route: String(route.length) + ' dots',
        data: route,
      }
    ]
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
      </View>
      <View style={styles.row}>
        <SpeedLimitButton speed='30' onPress={() => changeSpeed(30)} />
        <SpeedLimitButton speed='40' onPress={() => changeSpeed(40)} />
        <SpeedLimitButton speed='50' onPress={() => changeSpeed(50)} />
        <SpeedLimitButton speed='60' onPress={() => changeSpeed(60)} />
        <SpeedLimitButton speed='70' onPress={() => changeSpeed(70)} />
        <SpeedLimitButton speed='80' onPress={() => changeSpeed(80)} />
        <SpeedLimitButton speed='90' onPress={() => changeSpeed(90)} />
        <SpeedLimitButton speed='100' onPress={() => changeSpeed(100)} />
        <SpeedLimitButton speed='110' onPress={() => changeSpeed(110)} />
        <SpeedLimitButton speed='120' onPress={() => changeSpeed(120)} />
        <SpeedLimitButton speed='130' onPress={() => changeSpeed(130)} />
        <PrestanakButton speed={speedLimit} onPress={() => changeSpeed(null)} />
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => setSettlement(true)}
          style={[
            styles.button,
            settlement ? styles.selected : styles.button
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              settlement ? styles.selectedLabel : styles.buttonLabel
            ]}
          >
            Naselje
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSettlement(false)}
          style={[
            styles.button,
            !settlement ? styles.selected : styles.button
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              !settlement ? styles.selectedLabel : styles.buttonLabel
            ]}
          >
            Van naselja
          </Text>
        </TouchableOpacity>
        <Text>
          Trenutno ograničenje: {speedLimit ?? 'nema'}{"\n"}
          {errorMsg ?? 'nema greške'}{"\n"}
          {location.timestamp ?? 'nema lokacije'} {route.length} {routesHistory.length}
        </Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => setRec(true)}
            style={[
              styles.button,
              styles.rec,
              rec ? styles.selected : null
            ]}
          >
            <Text
              style={[
                styles.buttonLabel,
                rec ? styles.selectedLabel : null
              ]}
            >
              REC
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setRec(false)}
            style={[
              styles.button,
              styles.rec,
              !rec ? styles.selected : null
            ]}
          >
            <Text
              style={[
                styles.buttonLabel,
                !rec ? styles.selectedLabel : null
              ]}
            >
              PAUSE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              //console.log('eject');
              addRoute();
            }}
            style={[
              styles.button,
              styles.rec,
            ]}
          >
            <Text
              style={[
                styles.buttonLabel,
              ]}
            >
              EJECT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
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
    justifyContent: 'flex-start'
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 4,
    minWidth: "48%",
    textAlign: "center",
  },
  rec: {
    minWidth: "30%",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    padding: 4,
    fontSize: 24,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
});