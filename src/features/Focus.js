import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { Card, TextInput } from "react-native-paper";
import { RoundedBtn } from "../components/RounedBtn";
import { spacing } from "../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="What will you like to Focus on?"
          onChangeText={setSubject}
          style={styles.textInput}
        />
        <View style={styles.btn}>
          <RoundedBtn title="+" size={50} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
  },
  btn: {
    justifyContent: "center",
    marginLeft: spacing.sm,
  },
});
