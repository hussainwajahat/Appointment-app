import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const PasswordInputField = () => {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder="Password"
        password={true}
        secureTextEntry={true}
        style={{ fontSize: 15 }}
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

export default PasswordInputField;
