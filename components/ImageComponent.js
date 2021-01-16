import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageComponent = (props) => {
  return (
    <View style={styles.text}>
      <Image style={styles.img} source={require("../assets/logo_icon.png")} />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    marginVertical: 15,
    fontWeight: "normal",
    color: "black",
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
});

export default ImageComponent;
