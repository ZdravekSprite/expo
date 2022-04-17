import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { sizes, DEFAULT_LOCATION } from '../Utils';
import { MyButton, PrestanakButton, SpeedLimitButton, RoundedButton } from '../components/Buttons';

import { gpsLocation } from '../features/Location';

export const TrafficSignsScreen = ({ navigation }) => {
  const [rec, setRec] = useState(false);
  const [route, setRoute] = useState([]);
  const [settlement, setSettlement] = useState(true);
  const [speedLimit, setSpeedLimit] = useState(null);
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [errorMsg, setErrorMsg] = useState(null);
  const [routesHistory, setRoutesHistory] = useState([]);
  const interval = React.useRef(null);

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
    return () => {
      setRoutesHistory([]);
    };
  }, []);

  useEffect(() => {
    saveRoutesHistory();
  }, [routesHistory]);

  const getLocation = async () => {
    let gps = await gpsLocation(setLocation, setErrorMsg);
    if (gps.errorMsg) {
      console.log(gps.errorMsg);
    } else {
      setLocation({
        ...gps.location,
        settlement: settlement,
        speedLimit: speedLimit,
      });
    }
  };

  const changeSpeed = (speed) => {
    setSpeedLimit(speed);
  }

  const addLocation = () => {
    const lastLocation = route.length > 0 ? route[route.length - 1] : DEFAULT_LOCATION;
    if (lastLocation.timestamp !== location.timestamp) {
      setRoute([
        ...route,
        {
          ...location,
          key: String(route.length + 1),
        }
      ]);
    }
  }
  useEffect(() => {
    /*
    if (!rec) {
      if (interval.current) clearInterval(interval.current)
      return;
    }
    */
    setRoute([
      ...route,
      {
        ...location,
        key: String(route.length + 1),
        timestamp: new Date(),
        settlement: settlement,
        speedLimit: speedLimit,
        }
    ]);
    setLocation({
      ...location,
      settlement: settlement,
      speedLimit: speedLimit,
    });
    interval.current = setInterval(getLocation, 1000);
    return () => clearInterval(interval.current)
  }, [rec, speedLimit, settlement]);

  useEffect(() => {
    if (rec) {
      addLocation();
    }
  }, [location]);

  const addRoute = () => {
    //console.log(route,routesHistory)
    if (route.length > 1) {
      setRoutesHistory([
        ...routesHistory,
        {
          //key: String(routesHistory.length + 1),
          id: route[0].timestamp,
          title: route[0].timestamp,
          route: String(route.length) + ' dots',
          data: route,
        }
      ]);
    }
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
        <MyButton
          title='Naselje'
          style={[styles.button, settlement ? styles.selected : null]}
          textStyle={[styles.buttonLabel, settlement ? styles.selectedLabel : null]}
          onPress={() => setSettlement(true)}
        />
        <MyButton
          title='Van naselja'
          style={[styles.button, !settlement ? styles.selected : styles.button]}
          textStyle={[styles.buttonLabel, !settlement ? styles.selectedLabel : styles.buttonLabel]}
          onPress={() => setSettlement(false)}
        />
        <View style={styles.row}>
          <Text>
            Trenutno ograničenje: {speedLimit ?? 'nema'}{"\n"}
            {errorMsg ?? 'nema greške'}{"\n"}
            {location.timestamp ?? 'nema lokacije'} {route.length} {routesHistory.length}
          </Text>
          <RoundedButton
          style={var_styles(location.coords.accuracy ?? null).gps}
          />
        </View>
        <View style={styles.row}>
          <MyButton
            title='REC'
            style={[styles.button, styles.rec, rec ? styles.selected : null]}
            textStyle={[styles.buttonLabel, rec ? styles.selectedLabel : null]}
            onPress={() => setRec(true)}
          />
          <MyButton
            title='PAUSE'
            style={[styles.button, styles.rec, !rec ? styles.selected : null]}
            textStyle={[styles.buttonLabel, !rec ? styles.selectedLabel : null]}
            onPress={() => setRec(false)}
          />
          <MyButton
            title='EJECT'
            style={[styles.button, styles.rec]}
            textStyle={styles.buttonLabel}
            onPress={() => {
              console.log('eject');
              if (route.length) {
                addRoute();
                setRoute([]);
                setRec(false);
              }
              navigation.navigate('Routes');
            }}
          />
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
    justifyContent: 'flex-start',
    width: '100%'
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
    color: "oldlace",
  },
});
const var_styles = (gps) => StyleSheet.create({
  gps: {
    backgroundColor: gps == null || gps > 20 ? "red" : gps > 10 ? "orange" : "green",
    borderWidth: 1,
    marginLeft: sizes.xxxl,
  }
});
