import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import HeaderScreen from "../../components/HeaderScreen";
import NotificationItem from "../../components/NotificationItem";

const NotificationScreen = ({ navigation }) => {
  const notifications = [
    {
      key: "0",
      title: "My Dental Clinic",
      description: "Thank you for booking an appointment with us",
      time: "2 hours ago",
    },
    {
      key: "1",
      title: "Psychiatrist",
      description: "This is the appointment booking with a Psychiatrist",
      time: "5 hours ago",
    },
    {
      key: "2",
      title: "Notification3",
      description: "Here goes the description for this notification",
      time: "6 hours ago",
    },
    {
      key: "3",
      title: "Notification4",
      description: "Here goes the description for this notification",
      time: "7 hours ago",
    },
  ];
  return (
    <View>
      <HeaderScreen title="Notification"/>
      <FlatList
        data={notifications}
        renderItem={(itemData) => (
          <View>
            <NotificationItem itm={itemData.item}/>
          </View>
        )} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default NotificationScreen;