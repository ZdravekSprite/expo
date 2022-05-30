import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';

import { sizes } from '../Utils';
import { gpsLocation } from '../features/Location';
import { MyButton, SignButton, PrestanakButton, SpeedLimitButton, RoundedButton } from '../components/Buttons';
import { EMenu, SignTypeMenu, SpeedMenu } from '../components/Menu';
import { SpeedSigns } from '../components/tabs/SpeedSigns';
import { ASigns } from '../components/tabs/ASigns';
import { CSigns } from '../components/tabs/CSigns';
import { BSigns } from '../components/tabs/BSigns';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

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
  const [dimensions, setDimensions] = useState({ window, screen });

  const [speed, setSpeed] = useState([]);
  const [speedType, setSpeedType] = useState('b30');
  const [eType, setEType] = useState(null);
  const [signType, setSignType] = useState('speed');

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

  useEffect(() => {
    console.log('[]')
    loadRoutesHistory();
    setDimensions({ window, screen });
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

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
      setDimensions({ window, screen });
    });
    return () => subscription?.remove();
  });

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
          <View style={{width : dimensions.window.width / dimensions.window.height < 1 ? '100%' : '75%'}}>
            <SignTypeMenu onPress={(e) => { e === 'speed' && speedType === null ? setSpeedType('b30') : null, setSignType(e) }} />
            {signType == 'speed' &&
              <SpeedMenu onPress={(e) => { setSpeedType(e) }} />
            }
            {signType == 'e' &&
              <EMenu onPress={(e) => { setEType(e) }} />
            }
            <ScrollView>
              <View style={styles.row}>
                <SignButton type='semafor' onPress={() => addSign('semafor')} />
                {signType == 'speed' &&
                  <SpeedSigns speedType={speedType} addSign={addSign} />
                }
                {signType == 'a' &&
                  <ASigns addSign={addSign} />
                }
                {signType == 'b' &&
                  <BSigns addSign={addSign} />
                }
                {signType == 'c' &&
                  <CSigns addSign={addSign} />
                }
                {signType == 'e' &&
                  <>
                    {eType ? (
                      <>
                        <SignButton type={eType} m={100} onPress={() => addSign(eType, 100)} />
                        <SignButton type={eType} m={200} onPress={() => addSign(eType, 200)} />
                        <SignButton type={eType} m={300} onPress={() => addSign(eType, 300)} />
                        <SignButton type={eType} m={400} onPress={() => addSign(eType, 400)} />
                        <SignButton type={eType} m={500} onPress={() => addSign(eType, 500)} />
                        <SignButton type={eType} m={600} onPress={() => addSign(eType, 600)} />
                        <SignButton type={eType} m={700} onPress={() => addSign(eType, 700)} />
                      </>
                    ) : (
                      <>
                        <SignButton type='e06' onPress={() => addSign('e06')} />
                        <SignButton type='e11' onPress={() => addSign('e11')} />
                        <SignButton type='e19' onPress={() => addSign('e19')} />
                      </>
                    )}
                  </>
                }
                {signType == 'x2' &&
                  <>
                    <SignButton type='c39e11' onPress={() => addSign('c39e11')} />
                  </>
                }
              </View>
            </ScrollView>
          </View>
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
          textStyle={rec ? styles.selectedLabel : null}
          onPress={() => {
            console.log('rec');
            activate
            setRec(true)
          }}
        />
        <MyButton
          title='PAUSE'
          style={[styles.button, styles.rec, !rec ? styles.selected : null]}
          textStyle={!rec ? styles.selectedLabel : null}
          onPress={() => setRec(false)}
        />
        <MyButton
          title='SAVE'
          style={[styles.button, styles.rec]}
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
const orientationStyles = (isPortrait) => StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'flex-start',
    width: isPortrait ? '100%' : '50%'
  },
});
