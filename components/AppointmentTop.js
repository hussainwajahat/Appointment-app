import React from "react";
import { Text, StyleSheet, View } from "react-native";

const AppointmentTop = (props) => {
  return (
    <View style={styles.text}>
      <Text style={styles.upcomming}>Upcommings</Text>
      <Text style={styles.OPNUM}>{props.Num}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 7,
    justifyContent: "space-between",
    paddingHorizontal: 7,
  },
  upcomming: {
    fontSize: 15,
    fontWeight: "normal",
    borderBottomWidth: 1,
    borderBottomColor: "#308DFF",
    paddingHorizontal: 5,
  },
  OPNUM: {
    fontSize: 15,
    fontWeight: "normal",
    paddingHorizontal: 3,
  },
});

export default AppointmentTop;
