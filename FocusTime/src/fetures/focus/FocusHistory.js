import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";

import { colors, sizes } from "../../Utils";

const HistoryItem = ({ item }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>
}

export const FocusHistory = ({ focusHistory = [] }) => {

  return (
    <>
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.title}>Things we've focused on:</Text>
        {focusHistory.length ? (
          <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1, alignItems: 'center' }}
          data={focusHistory}
          renderItem={HistoryItem}
        />
      ) : (
          <Text>Nothing yet</Text>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.darkLight,
    fontSize: sizes.lg,
  },
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: sizes.md,
  }),
});
