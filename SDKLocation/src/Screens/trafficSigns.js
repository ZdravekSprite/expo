import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { PrestanakButton, SpeedLimitButton } from '../Components';

export const TrafficSignsScreen = () => {
  const [settlement, setSettlement] = useState(true);
  const [speedLimit, setSpeedLimit] = useState(null);
  const changeSpeed = (speed) => {
    setSpeedLimit(speed);
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
          Trenutno ograničenje brzine: {speedLimit ?? 'nema' }
        </Text>
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
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    padding: 6,
    fontSize: 24,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
});