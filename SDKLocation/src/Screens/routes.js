import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const longToDate = (millisec) => {
  const d = new Date(millisec);
  return (d.toDateString() + ' ' + d.getHours() + ':' + d.getMinutes());
};

const Item = ({ item, onPress, onDelete, backgroundColor, textColor }) => (
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

  const removeRoute = (routeId) => {
    const newRoutesHistory = routesHistory.filter((r) => r.id !== routeId);
    setRoutesHistory(newRoutesHistory);
  };

  useEffect(() => {
    loadRoutesHistory();
    //setRoutesHistory([]);
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
      />
      <Text style={styles.route}>
        {selectedId ? routesHistory.find(r => r.id == selectedId).route : ''}
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