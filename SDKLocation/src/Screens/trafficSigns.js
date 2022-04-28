import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';

import { sizes } from '../Utils';
import { gpsLocation } from '../features/Location';
import { MyButton, SignButton, PrestanakButton, SpeedLimitButton, RoundedButton } from '../components/Buttons';

export const TrafficSignsScreen = () => {
  const [location, setLocation] = useState(null);
  const [gpsLocationState, setGpsLocationState] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [rec, setRec] = useState(false);
  const [path, setPath] = useState([]);
  const [signs, setSigns] = useState([]);
  const [trafficSigns, setTrafficSigns] = useState([]);
  const [routesHistory, setRoutesHistory] = useState([]);
  const interval = React.useRef(null);

  const [speed, setSpeed] = useState([]);
  const [speedType, setSpeedType] = useState('b30');

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
    let gps = await gpsLocation();
    if (gps.errorMsg) {
      setErrorMsg(gps.errorMsg);
      console.log(gps.errorMsg);
    } else {
      //console.log('getLocation:' + gps.location.timestamp)
      setGpsLocationState(gps.location);
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

  useEffect(() => {
    if ((location ? location.timestamp : null) !== (gpsLocationState ? gpsLocationState.timestamp : null)) {
      //console.log((location ? location.timestamp : null) + ' ', gpsLocationState.timestamp)
      setLocation(gpsLocationState);
    }
  }, [gpsLocationState]);

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
      console.log(sign.coords)
    });
  }, [trafficSigns]);

  useEffect(() => {
    if (rec) {
      addLocation();
    }
    let signsAgain = [];
    if (signs.length) {
      signs.forEach(sign => {
        //console.log(sign.before)
        //console.log('before',sign.before.timestamp)
        //console.log('click',sign.time)
        //console.log('now',location.timestamp)
        if (location.timestamp < sign.time) {
          signsAgain = [
            ...signsAgain,
            {
              ...sign,
              before: location
            }
          ]
        } else {
          let p = (location.timestamp - sign.before.timestamp) / (location.timestamp - sign.time)
          setTrafficSigns([
            ...trafficSigns,
            {
              timestamp: sign.time,
              type: sign.sign,
              coords: {
                latitude: location.coords.latitude - (location.coords.latitude - sign.before.coords.latitude) / p,
                longitude: location.coords.longitude - (location.coords.longitude - sign.before.coords.longitude) / p,
                accuracy: location.coords.accuracy - (location.coords.accuracy - sign.before.coords.accuracy) / p,
                altitude: location.coords.altitude - (location.coords.altitude - sign.before.coords.altitude) / p,
                altitudeAccuracy: location.coords.altitudeAccuracy - (location.coords.altitudeAccuracy - sign.before.coords.altitudeAccuracy) / p,
                heading: location.coords.heading - (location.coords.heading - sign.before.coords.heading) / p,
                speed: location.coords.speed - (location.coords.speed - sign.before.coords.speed) / p,
              },
            }
          ])
        }
      });
      setSigns(signsAgain);
    }
  }, [location]);

  const addSign = ((type, speed = null) => {
    console.log(type, speed)
    let now = new Date
    setSigns([
      ...signs,
      {
        before: location,
        sign: type + (speed ? '-' + speed : ''),
        time: now.getTime()
      }
    ])
    setSpeed(speed);
  });

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
          route: String(path.length) + ' dots and ' + String(trafficSigns.length) + ' signs',
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
        <SafeAreaView>
          {location ? (
            <>
              <View style={styles.row}>
                <SignButton size={37} type='b30' speed={'??'} onPress={() => setSpeedType('b30')} />
                <SignButton size={37} type='b38' speed={'??'} onPress={() => setSpeedType('b38')} />
                <SignButton size={37} type='c33' speed={'??'} onPress={() => setSpeedType('c33')} />
                <SignButton size={37} type='c11' speed={'??'} onPress={() => setSpeedType('c11')} />
                <SignButton size={37} type='c12' speed={'??'} onPress={() => setSpeedType('c12')} />
                <SignButton size={37} type='c34' speed={'??'} onPress={() => setSpeedType('c34')} />
                <SignButton size={37} type='a00' onPress={() => setSpeedType(null)} />
              </View>
              <ScrollView>
                {speedType ? (
                  <View style={styles.row}>
                    <SignButton type={speedType} speed={5} onPress={() => addSign(speedType, 5)} />
                    <SignButton type={speedType} speed={10} onPress={() => addSign(speedType, 10)} />
                    <SignButton type={speedType} speed={15} onPress={() => addSign(speedType, 15)} />
                    <SignButton type={speedType} speed={20} onPress={() => addSign(speedType, 20)} />
                    <SignButton type={speedType} speed={30} onPress={() => addSign(speedType, 30)} />
                    <SignButton type={speedType} speed={40} onPress={() => addSign(speedType, 40)} />
                    <SignButton type={speedType} speed={50} onPress={() => addSign(speedType, 50)} />
                    <SignButton type={speedType} speed={60} onPress={() => addSign(speedType, 60)} />
                    <SignButton type={speedType} speed={70} onPress={() => addSign(speedType, 70)} />
                    <SignButton type={speedType} speed={80} onPress={() => addSign(speedType, 80)} />
                    <SignButton type={speedType} speed={90} onPress={() => addSign(speedType, 90)} />
                    <SignButton type={speedType} speed={100} onPress={() => addSign(speedType, 100)} />
                    <SignButton type={speedType} speed={110} onPress={() => addSign(speedType, 110)} />
                    <SignButton type={speedType} speed={120} onPress={() => addSign(speedType, 120)} />
                    <SignButton type={speedType} speed={130} onPress={() => addSign(speedType, 130)} />
                  </View>
                ) : (
                  <View style={styles.row}>
                    <SignButton type='b01' onPress={() => addSign('b01')} />
                    <SignButton type='b02' onPress={() => addSign('b02')} />
                    <SignButton type='b03' onPress={() => addSign('b03')} />
                    <SignButton type='b04' onPress={() => addSign('b04')} />
                    <SignButton type='b05' onPress={() => addSign('b05')} />
                    <SignButton type='c14' onPress={() => addSign('c14')} />
                    <SignButton type='semafor' onPress={() => addSign('semafor')} />
                    <SignButton type='a01' onPress={() => addSign('a01')} />
                    <SignButton type='a02' onPress={() => addSign('a02')} />
                    <SignButton type='a03' onPress={() => addSign('a03')} />
                    <SignButton type='a04' onPress={() => addSign('a04')} />
                    <SignButton type='a04-1' onPress={() => addSign('a04-1')} />
                    <SignButton type='a04-2' onPress={() => addSign('a04-2')} />
                  </View>
                )}
              </ScrollView>
            </>
          ) : (
            <View style={styles.container}><Text>Traži se lokacija</Text></View>
          )}
        </SafeAreaView>
      </View>
      <View style={styles.row}>
        <Text>
          Trenutno ograničenje: {speed ? speed : 'nema'}{"\n"}
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
