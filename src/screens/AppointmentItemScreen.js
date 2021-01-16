import React from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import AppointmentHeader from "../../components/AppointmentHeader";

const AppointmentItemScreen = ({ navigation }) => {
  const keyValue = navigation.getParam("object").key;
  var img1 = null;
  var img2 = null;
  var checkInText = null;
  if (keyValue == "0") {
    img1 = (
      <Image
        source={require("../../assets/img1_tick.png")}
        style={styles.imgStyle}
      />
    );
    img2 = (
      <Image
        source={require("../../assets/img2_tick.png")}
        style={styles.imgStyle}
      />
    );
    checkInText = (
      <View style={styles.checkInSuccessfullStyle}>
        <Text style={styles.checkInSuccessfullText}>
          You are successfully checked In
        </Text>
      </View>
    );
  } else if (keyValue == "1") {
    img2 = (
      <Image
        source={require("../../assets/img1.png")}
        style={styles.imgStyle}
      />
    );
    img1 = (
      <Image
        source={require("../../assets/img2.png")}
        style={styles.imgStyle}
      />
    );
    checkInText = (
      <View style={styles.checkInUnsuccessfullStyle}>
        <Text style={styles.checkInUnsuccessfullText}>
          You are not in range to be automatically checked In
        </Text>
      </View>
    );
  } else if (keyValue == "2") {
    img1 = (
      <Image
        source={require("../../assets/img1.png")}
        style={styles.imgStyle}
      />
    );
    img2 = (
      <Image
        source={require("../../assets/img2_tick.png")}
        style={styles.imgStyle}
      />
    );
    checkInText = (
      <View style={styles.checkInSuccessfullStyle}>
        <Text style={styles.checkInSuccessfullText}>
          You are successfully checked In
        </Text>
      </View>
    );
  } else {
    img2 = (
      <Image
        source={require("../../assets/img1.png")}
        style={styles.imgStyle}
      />
    );
    img1 = (
      <Image
        source={require("../../assets/img2.png")}
        style={styles.imgStyle}
      />
    );
    checkInText = (
      <View style={styles.checkInSuccessfullStyle}>
        <Text style={styles.checkInSuccessfullText}>
          You are successfully checked In
        </Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <AppointmentHeader />
      <View style={{ marginTop: 40, padding: 20 }}>
        <Text style={styles.titleStyle}>
          {navigation.getParam("object").appointmentTitle}
        </Text>
        <Text style={styles.descStyle}>
          {navigation.getParam("object").appointmentDesc}
        </Text>
      </View>
      <View style={styles.imgViewStyle}>
        {img1}
        {img2}
      </View>
      {checkInText}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    width: "60%",
    fontWeight: "bold",
  },
  descStyle: {
    fontSize: 10,
    width: "60%",
    fontWeight: "bold",
    color: "grey",
  },
  imgViewStyle: {
    marginTop: 20,
    height: 100,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  imgStyle: {
    borderRadius: 100,
    width: 80,
    height: 80,
  },
  checkInSuccessfullStyle: {
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 100,
  },
  checkInSuccessfullText: {
    color: "white",
    fontSize: 10,
    padding: 5,
  },
  checkInUnsuccessfullStyle: {
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey",
    borderRadius: 100,
  },
  checkInUnsuccessfullText: {
    color: "black",
    fontSize: 10,
    padding: 5,
  },
});

export default AppointmentItemScreen;
