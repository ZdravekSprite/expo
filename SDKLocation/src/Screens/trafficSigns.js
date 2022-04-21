import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';

import { sizes } from '../Utils';
import { gpsLocation } from '../features/Location';
import { MyButton, SignButton, PrestanakButton, SpeedLimitButton, RoundedButton, SemaforButton, B01Button, B02Button } from '../components/Buttons';

const formatTime = (time) => time < 10 ? `0${time}` : time;
const longToDate = (millisec) => {
  const d = new Date(millisec);
  return (d.toDateString() + ' ' + formatTime(d.getHours()) + ':' + formatTime(d.getMinutes()));
};

export const TrafficSignsScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [rec, setRec] = useState(false);
  const [path, setPath] = useState([]);
  const [signs, setSigns] = useState([]);
  const [trafficSigns, setTrafficSigns] = useState([]);
  const [routesHistory, setRoutesHistory] = useState([]);
  const interval = React.useRef(null);

  const [speed, setSpeed] = useState([]);

  const saveRoutesHistory = async () => {
    try {
      AsyncStorage.setItem('routesHistory', JSON.stringify(routesHistory));
    } catch (e) { console.log(e); }
  };
  const loadRoutesHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('routesHistory');
      if (history && JSON.parse(history).length) { setRoutesHistory(JSON.parse(history)); }
    } catch (e) { console.log(e); }
  };
  const getLocation = async () => {
    let gps = await gpsLocation(setLocation, setErrorMsg);
    if (gps.errorMsg) {
      console.log(gps.errorMsg);
    } else {
      //console.log(gps.time);
      if (location ? location.timestamp : null !== gps.location.timestamp)
        setLocation({
          ...gps.location,
        });
    }
  };

  useEffect(() => {
    console.log('[]')
    loadRoutesHistory();
    interval.current = setInterval(getLocation, 500);
    return () => {
      clearInterval(interval.current);
      setRoutesHistory([]);
    }
  }, []);

  useEffect(() => {
    console.log('routesHistory', routesHistory.length)
    saveRoutesHistory();
  }, [routesHistory]);


  const changeSpeed = (speed) => {
    console.log(speed)
    let now = new Date
    setSigns([
      ...signs,
      {
        before: location,
        sign: speed,
        time: now.getTime()
      }
    ])
    //setSpeedLimit(speed);
  }

  const activate = () => {
    activateKeepAwake();
    alert('Activated!');
  };

  const deactivate = () => {
    deactivateKeepAwake();
    alert('Deactivated!');
  };

  const addLocation = () => {
    if (location) {
      if (!path.length) {
        setPath([{ location: location, }]);
      } else if (path[path.length - 1].location.timestamp !== location.timestamp) {
        //console.log('add',location.timestamp - (path.length ? path[path.length - 1].location.timestamp : 0))
        setPath([
          ...path,
          {
            location: location,
          }
        ]);
      } else {
      }
      //console.log('addLocation', path.map(l => l.location.timestamp))
    }
  }

  useEffect(() => {
    console.log('trafficSigns', trafficSigns.length)
    trafficSigns.forEach(sign => {
      console.log('before', sign.before.timestamp)
      console.log('click_', sign.time)
      console.log('affter', sign.affter.timestamp)
    });
  }, [trafficSigns]);

  useEffect(() => {
    if (rec) {
      addLocation();
    }
    if (signs.length) {
      signs.forEach(sign => {
        //console.log('before',sign.before.timestamp)
        //console.log('click',sign.time)
        //console.log('now',location.timestamp)
        setTrafficSigns([
          ...trafficSigns,
          {
            ...sign,
            affter: location,
            location: {
              before: sign.before.timestamp,
              click_: sign.before.timestamp,
              affter: location.timestamp,
            }
          }
        ])
      });
      setSigns([]);
    }
  }, [location]);

  const addRoute = () => {
    //console.log(route,routesHistory)
    if (path.length > 1) {
      let now = new Date
      setRoutesHistory([
        ...routesHistory,
        {
          //key: String(routesHistory.length + 1),
          id: now,
          title: now,
          route: String(path.length) + ' dots & ' + String(trafficSigns.length) + ' signs',
          path: path,
          signs: trafficSigns,
        }
      ]);
    }
    setPath([]);
    setTrafficSigns([]);
    setRec(false);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.row, { flex: 1 }]}>
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
        <PrestanakButton speed={null} onPress={() => changeSpeed(null)} />
        <SignButton type='semafor' onPress={() => changeSpeed(null)} />
        <SignButton type='b01' onPress={() => changeSpeed(null)} />
        <B01Button onPress={() => changeSpeed(null)} />
        <B02Button onPress={() => changeSpeed(null)} />
      </View>
      <View style={styles.row}>
        <Text>
          Trenutno ograničenje: {'nema'}{"\n"}
          {errorMsg ?? ''}
          {location ? location.timestamp : 'nema lokacije'} {path.length} {routesHistory.length}
        </Text>
        <RoundedButton
          style={var_styles(location ? location.coords.accuracy : null).gps}
        />
      </View>
      <View style={styles.row}>
        <MyButton
          title='REC'
          style={[styles.button, styles.rec, rec ? styles.selected : null]}
          textStyle={[styles.buttonLabel, rec ? styles.selectedLabel : null]}
          onPress={() => {
            console.log('rec');
            activate
            setRec(true)
          }}
        />
        <MyButton
          title='PAUSE'
          style={[styles.button, styles.rec, !rec ? styles.selected : null]}
          textStyle={[styles.buttonLabel, !rec ? styles.selectedLabel : null]}
          onPress={() => setRec(false)}
        />
        <MyButton
          title='SAVE'
          style={[styles.button, styles.rec]}
          textStyle={styles.buttonLabel}
          onPress={() => {
            console.log('save');
            deactivate
            addRoute();
          }}
        />
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
