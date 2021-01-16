import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Top = () => {
  return <View style={styles.text}>
    <Image source={require('../assets/logo_icon.png')} style={{width: 180, height: 180}} />
  </View>;
};

const styles = StyleSheet.create({
  text: {
    height: 270,
    borderBottomRightRadius: 80,
    backgroundColor: "#308DFF",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Top;