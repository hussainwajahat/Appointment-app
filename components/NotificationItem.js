import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const NotificationItem = (props) => {
  return (
    <View style={styles.notif}>
      <View style={styles.txtCont}>
        <Text  style={{fontSize: 10}}>{props.itm.time}</Text>
      </View>
      <View style={styles.styl1}>
      <Image source={require('../assets/notif_icon.png')} style={styles.img} />
      <View style={styles.txts}>
        <Text style={{fontSize: 15}}>{props.itm.title}</Text>
        <Text style={{fontSize: 10}}>{props.itm.description}</Text>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notif: {
    width: "90%",
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 5,
    height: 80,
    flexDirection: "column",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  txtCont: {
    width: "100%",
    alignItems: "flex-end"
  },
  txts: {
    marginVertical: 15,
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 20
  },
  styl1: {
    flexDirection: "row",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "lightgrey"
  },
});

export default NotificationItem;
