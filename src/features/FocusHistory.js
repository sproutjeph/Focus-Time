import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSize, spacing } from "../utils/sizes";
export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return null;
  const renderItem = ({ item }) => <Text style={styles.item}>{item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things You Focused On:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSize.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSize.md,
    fontWeight: "bold",
  },
});
