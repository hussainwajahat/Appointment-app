import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const AppointmentHeader = () => {
  return (
    <View style={styles.text}>
      <Text style={{ paddingLeft: 20, fontSize: 15, color: "white" }}>
        Next Appointment
      </Text>
      <Text
        style={{
          paddingLeft: 20,
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
        }}
      >
        12 Jan 2020
      </Text>
      <Text
        style={{
          paddingLeft: 20,
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
        }}
      >
        09:30 - 09:40
      </Text>
      <Image
        source={require("../assets/call_icon_2.png")}
        style={styles.imgStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    height: 270,
    borderBottomRightRadius: 80,
    backgroundColor: "#308DFF",
    flexDirection: "column",
    justifyContent: "center",
  },
  imgStyle: {
    position: "absolute",
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    left: "65%",
    top: 240,
    width: 60,
    height: 60,
  },
});

export default AppointmentHeader;
