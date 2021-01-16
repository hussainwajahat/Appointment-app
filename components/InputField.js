import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const InputField = ({ pholder, kbType, onChangeText, value }) => {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder={pholder}
        style={{ fontSize: 15 }}
        keyboardType={kbType}
        onChangeText={(userName) => onChangeText(userName)}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    padding: 10,
    borderColor: "grey",
    borderWidth: 0.5,
    margin: 10,
  },
});

export default InputField;
