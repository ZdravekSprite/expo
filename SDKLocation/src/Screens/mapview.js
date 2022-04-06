import * as React from 'react';
import { useState, useEffect } from 'react';
import MapView, { Polyline } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DEFAULT_REGION = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0,
  longitudeDelta: 0,
};

const PolyFromRoute = ({
  route = { data: [] },
  color = 'rgba(123,45,67,0.5)',
}) => {
  let segments = [];
  route.data.forEach(({ coords, speedLimit, settlement, timestamp }) => {
    let newCord = {
      'latitude': coords.latitude,
      'longitude': coords.longitude,
    };
    let newSegment = {
      'timestamp': timestamp,
      'settlement': settlement,
      'speedLimit': speedLimit,
      'coords': [newCord],
    };
    if (segments.length > 0) {
      let lastSegment = segments[segments.length - 1];
      segments[segments.length - 1].coords[lastSegment.coords.length] = newCord;
      if (lastSegment.speedLimit !== speedLimit) {
        segments[segments.length] = newSegment;
      }
    } else {
      segments[segments.length] = newSegment;
    }
  });
  //console.log(segments.map(({ timestamp, speedLimit, coords }) => ({ 'timestamp': timestamp, 'speedLimit': speedLimit, 'coords': coords })));
  return (
    <>
      {segments.map(({ timestamp, speedLimit, coords }) => {
        return (
          <Polyline
            key={timestamp}
            coordinates={[
              ...coords.map(({ latitude, longitude }) => ({ 'latitude': latitude, 'longitude': longitude })),
            ]}
            strokeWidth={speedLimit ? 5 : 2}
            strokeColor={color}
          />
        )
      })}
    </>
  );
}

export const MapViewScreen = () => {
  const [routesHistory, setRoutesHistory] = useState([]);
  const [region, setRegion] = useState(DEFAULT_REGION);

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
      setRoutesHistory({});
    };
  }, []);

  useEffect(() => {
    if (routesHistory.length) {
      setRegion({
        latitude: routesHistory[0].data[0].coords.latitude,
        longitude: routesHistory[0].data[0].coords.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      })
      /*
      routesHistory.forEach(({data}) => {
        data.forEach(({ coords }) => {
          let oldRegion = region;
          if (region.latitude < coords.latitude) setRegion({ ...region, latitude: coords.latitude })
          if (region.longitude < coords.longitude) setRegion({ ...region, longitude: coords.longitude })
        });
      });
      */
    }
  }, [routesHistory]);
  /*
  route format
  data: {[{coords:{latitude:0,longitude:0},{coords:{latitude:0,longitude:0}}]}
  */

  var myArray = routesHistory.length > 0 ? routesHistory[2].data : [];

  let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function (previousValue, currentValue) {
      return previousValue.concat(currentValue)
    },
    []
  )
  Array.prototype.hasMin = function (attrib) {
    const checker = (o, i) => typeof (o) === 'object' && o[i]
    return (this.length && this.reduce(function (prev, curr) {
      const prevOk = checker(prev.coords, attrib);
      const currOk = checker(curr.coords, attrib);
      if (!prevOk && !currOk) return {};
      if (!prevOk) return curr;
      if (!currOk) return prev;
      return prev < curr.coords[attrib] ? prev : curr.coords[attrib];
    })) || null;
  }

  console.log(myArray.hasMin('longitude'))
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
      >
        {routesHistory.length > 0 ? routesHistory.map((route, i) => <PolyFromRoute route={route} key={i} />) : null}
        {console.log('test')}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});