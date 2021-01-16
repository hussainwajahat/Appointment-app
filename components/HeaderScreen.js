import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HeaderScreen = (props) => {
  return (
    <View style={styles.text}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#308dff",
  },
  title: {
    fontSize: 30,
    fontWeight: "normal",
    color: "white",
  },
});

export default HeaderScreen;
