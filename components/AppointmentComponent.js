import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

function isoDate(Currentdate) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Devember",
  ];

  if (!Currentdate) {
    return null;
  }
  const date = new Date(Currentdate);

  const month = months[date.getMonth()];

  var day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  return day + " " + month + " " + date.getFullYear();
}

const AppointmentComponent = (props) => {
  const { AppointmentDateTime, ServiceProviderName, Description } =
    props?.object.item || {};

  const appointmentTime =
    AppointmentDateTime && formatAMPM(new Date(AppointmentDateTime));
  const appointmentDate =
    AppointmentDateTime && isoDate(new Date(AppointmentDateTime));

  return (
    <View style={styles.uppercontainer}>
      <Text style={styles.text}>
        {appointmentDate} | {appointmentTime}
      </Text>
      <View style={styles.mainContainer}>
        <View style={styles.timeStyle}>
          <Text style={{ fontSize: 15 }}>
            {Math.floor(Math.random(0, 1) * 60)}
          </Text>
          <Text style={{ fontSize: 15 }}>Mins</Text>
        </View>
        <View style={styles.detailStyle}>
          <Text style={{ fontSize: 15, padding: 2 }}>
            {ServiceProviderName}
          </Text>
          <Text style={{ fontSize: 10, padding: 2 }}>{Description}</Text>
          <Image
            source={require("../assets/call_icon.png")}
            style={{ width: 40, height: 40, alignSelf: "flex-end" }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  uppercontainer: {
    paddingVertical: 7,
    paddingHorizontal: 7,
  },
  text: {
    fontSize: 10,
    color: "white",
    fontWeight: "normal",
    padding: 10,
    backgroundColor: "#308DFF",
  },
  mainContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  timeStyle: {
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
    flexDirection: "column",
    borderRightColor: "lightgrey",
    borderRightWidth: 1,
  },
  detailStyle: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingTop: 5,
    justifyContent: "center",
  },
});

export default AppointmentComponent;
