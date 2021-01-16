import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import DatePicker from "react-native-datepicker";
import Top from "../../components/Top";
import InputField from "../../components/InputField";
import { fetchWrapper } from "./../../services/restApi";
import { persistState } from "../../utils/persist";

const Login = ({ navigation }) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dob, setDob] = React.useState("03/07/1991");
  const [postCode, setPostCode] = React.useState("");
  const [isError, setIsError] = React.useState(true);
  const [isErrorMessage, setIsErrorMessage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={{ marginBottom: 350 }}>
          <Top />

          <View style={styles.container}>
            <Text style={styles.heading}> Login to your Account.... </Text>
            <InputField
              pholder="First Name"
              kbType="default"
              onChangeText={setFirstName}
              value={firstName}
            />
            <InputField
              pholder="Last Name"
              kbType="default"
              onChangeText={setLastName}
              value={lastName}
            />
            <InputField
              pholder="Email"
              kbType="default"
              onChangeText={setEmail}
              value={email}
            />
            <DatePicker
              style={{ width: "80%" }}
              date={dob}
              mode="date"
              placeholder="select date"
              format="DD/MM/YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={(date) => {
                setDob(date);
              }}
            />
            <InputField
              pholder="post Code"
              kbType="default"
              onChangeText={setPostCode}
              value={postCode}
            />
            {isErrorMessage && !isLoading && (
              <Text style={styles.errorMessage}>{isErrorMessage}</Text>
            )}

            {isLoading && <Text>Loading....</Text>}

            <TouchableOpacity
              onPress={async () => {
                setIsLoading(true);

                const isUserLogin = await fetchWrapper(
                  "POST",
                  "https://uat.remoteforms.co.uk/api/members/authenticate",
                  {
                    MemberType: "PATIENT",
                    Member: {
                      FirstName: firstName,
                      LastName: lastName,
                      Email: email,
                      DateOfBirth: dob,
                      Address: {
                        PostCode: postCode,
                      },
                    },
                  },
                  { "x-api-key": "8967305C-13F4-4A15-A84B-358E3F85C010" }
                );

                setIsLoading(false);

                if (isUserLogin?.Address) {
                  const practices = isUserLogin.Practices[0];

                  persistState("code", practices.PatientCode);
                  setIsError(true);
                  setIsErrorMessage(null);
                  navigation.navigate("Home");
                } else {
                  setIsErrorMessage(isUserLogin);
                }
              }}
              style={styles.loginButtonContainer}
            >
              <Text style={styles.loginButtonText}> Sign In </Text>
            </TouchableOpacity>
            <Text
              style={styles.bottomText}
              onPress={() => navigation.navigate("SignUp")}
            >
              Don't have an account? Click here
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    margin: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  loginButtonContainer: {
    margin: 20,
    elevation: 8,
    backgroundColor: "#308DFF",
    width: "80%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  loginButtonText: {
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  bottomText: {
    margin: 20,
    fontSize: 10,
    fontWeight: "bold",
    color: "#308DFF",
  },
  errorMessage: { color: "red" },
});

export default Login;
