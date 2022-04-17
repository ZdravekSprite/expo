import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../config';

const formatTime = (time) => time < 10 ? `0${time}` : time;
const longToDate = (millisec) => {
  const d = new Date(millisec);
  return (d.toDateString() + ' ' + formatTime(d.getHours()) + ':' + formatTime(d.getMinutes()));
};

const Item = ({ item, onPress, onSend, onDelete, backgroundColor, textColor }) => (
  <View style={styles.row}>
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.item,
        backgroundColor,
        { flex: 1 },
      ]}
    >
      <Text style={[styles.title, textColor]}>
        {longToDate(item.title)}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={onSend}
      style={[styles.item, backgroundColor]}
    >
      <Text style={[styles.title, textColor]}>send</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={onDelete}
      style={[styles.item, backgroundColor]}
    >
      <Text style={[styles.title, textColor]}>X</Text>
    </TouchableOpacity>
  </View>
);

export const RoutesScreen = () => {
  const [selectedId, setSelectedId] = useState(null);
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

  const sendRoute = (routeId) => {
    console.log('send',routeId)
    /**/
    fetch(`${BASE_URL}/routes`, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
      body: JSON.stringify({ data: JSON.stringify(routesHistory.find(r => r.id == routeId)), })
    }).then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      }).catch((error) => {
        console.log("Error");
      });
      /**/
  }

  const removeRoute = (routeId) => {
    const newRoutesHistory = routesHistory.filter((r) => r.id !== routeId);
    setRoutesHistory(newRoutesHistory);
    setSelectedId(null);
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

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        onSend={() => sendRoute(item.id)}
        onDelete={() => removeRoute(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={routesHistory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        style={{ height: '75%' }}
      />
      <Text style={styles.route}>
        {routesHistory.length > 0 && selectedId ? routesHistory.find(r => r.id == selectedId).route : ''}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'flex-start'
  },
  item: {
    padding: 12,
    marginVertical: 4,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 16,
  },
  route: {
    flex: 1,
    fontSize: 32,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});