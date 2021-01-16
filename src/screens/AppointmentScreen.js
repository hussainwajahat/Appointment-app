import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import AppointmentTop from "../../components/AppointmentTop";
import AppointmentComponent from "../../components/AppointmentComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import { loadState } from "../../utils/persist";
import { fetchWrapper } from "./../../services/restApi";

const AppointmentScreen = ({ navigation }) => {
  const [appointmentData, setAppointmentData] = React.useState([]);

  async function fetchData() {
    const customerCode = await loadState("code");

    const appointmentData = await fetchWrapper(
      "POST",
      "http://108.61.173.176/AppointmentorWebsite/OnlineServices/RestServices.svc/GetCustomerFutureAppointments",
      {
        CustomerCode: customerCode,
      }
    );
    setAppointmentData(appointmentData);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  const obj = [
    {
      key: "0",
      appointmentDate: "22 May 2020",
      appointmentTime: "10:00 AM",
      appointmentTimeLeft: "10",
      appointmentTitle: "Dr. Khalisur Rahman",
      appointmentDesc: "Recal Exam | Hygiene",
    },
    {
      key: "1",
      appointmentDate: "23 May 2020",
      appointmentTime: "10:00 AM",
      appointmentTimeLeft: "30",
      appointmentTitle: "Dr. Drake Romeray",
      appointmentDesc: "Recal Exam | Hygiene",
    },
    {
      key: "2",
      appointmentDate: "24 May 2020",
      appointmentTime: "10:00 AM",
      appointmentTimeLeft: "120",
      appointmentTitle: "Dr. Drake Romeray",
      appointmentDesc: "Recal Exam | Hygiene",
    },
    {
      key: "3",
      appointmentDate: "24 May 2020",
      appointmentTime: "11:00 AM",
      appointmentTimeLeft: "180",
      appointmentTitle: "Dr. Khalisur Rahman",
      appointmentDesc: "Recal Exam | Hygiene",
    },
  ];

  return (
    <View style={styles.container}>
      <AppointmentTop Num={appointmentData.length} />
      <FlatList
        data={appointmentData.reverse()}
        renderItem={(itemData) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AppointmentItem", {
                object: itemData,
              })
            }
          >
            <AppointmentComponent object={itemData} />
          </TouchableOpacity>
        )}
        style={{ marginBottom: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 7,
    paddingTop: 5,
    paddingBottom: 30,
  },
});

export default AppointmentScreen;
