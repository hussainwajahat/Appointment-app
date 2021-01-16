import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileDetail = (props) => {
  return (
    <View style={styles.input}>
      <Text style={styles.Leftdetail}>{props.name}</Text>
      <Text style={styles.Rightdetail}>{props.detail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  Leftdetail: {
    fontSize: 15,
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
  },
  Rightdetail: {
    fontSize: 12,
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
  },
});

export default ProfileDetail;
