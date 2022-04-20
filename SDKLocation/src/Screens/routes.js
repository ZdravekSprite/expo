import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../config';
import { Item } from '../components/Items';
import { sizes, colors } from '../Utils';

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
    console.log('send', routeId)
    fetch(`${BASE_URL}/routes`, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
      body: JSON.stringify({ data: JSON.stringify(routesHistory.find(r => r.id == routeId)), })
    }).then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      }).catch((e) => {
        console.log("Error",e);
      });
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
    const backgroundColor = item.id === selectedId ? colors.label : colors.button;
    const color = item.id === selectedId ? colors.button : colors.label;

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
  route: {
    flex: 1,
    fontSize: sizes.xl,
    padding: sizes.xx,
    marginVertical: sizes.sm,
    marginHorizontal: sizes.md,
  },
});