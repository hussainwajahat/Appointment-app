import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Top from "../../components/Top";
import { AuthSession } from "expo";

class Verification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: "",
      pin5: "",
      pin6: "",
    };
  }
  componentDidMount = () => {
    this.refs.otp1.focus();
  };

  render() {
    const { pin1, pin2, pin3, pin4, pin5, pin6 } = this.state;
    return (
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={{ marginBottom: 350 }}>
            <Top />

            <View style={styles.container}>
              <Text style={styles.heading}>
                {" "}
                Please enter the 6-digit code{" "}
              </Text>

              <View style={styles.pinContainer}>
                <TextInput
                  ref={"otp1"}
                  style={styles.pinText}
                  keyboardType="numeric"
                  maxLength={1}
                  onChangeText={(pin1) => {
                    this.setState({ pin1: pin1 });
                    if (pin1 != "") {
                      this.refs.otp2.focus();
                    }
                  }}
                  value={pin1}
                />

                <TextInput
                  ref={"otp2"}
                  style={styles.pinText}
                  keyboardType="numeric"
                  maxLength={1}
                  onChangeText={(pin2) => {
                    this.setState({ pin2: pin2 });
                    if (pin2 != "") {
                      this.refs.otp3.focus();
                    }
                  }}
                  value={pin2}
                />

                <TextInput
                  ref={"otp3"}
                  style={styles.pinText}
                  keyboardType="numeric"
                  maxLength={1}
                  onChangeText={(pin3) => {
                    this.setState({ pin3: pin3 });
                    if (pin3 != "") {
                      this.refs.otp4.focus();
                    }
                  }}
                  value={pin3}
                />

                <TextInput
                  ref={"otp4"}
                  style={styles.pinText}
                  keyboardType="numeric"
                  maxLength={1}
                  onChangeText={(pin4) => {
                    this.setState({ pin4: pin4 });
                    if (pin4 != "") {
                      this.refs.otp5.focus();
                    }
                  }}
                  value={pin4}
                />

                <TextInput
                  ref={"otp5"}
                  style={styles.pinText}
                  keyboardType="numeric"
                  maxLength={1}
                  onChangeText={(pin5) => {
                    this.setState({ pin5: pin5 });
                    if (pin5 != "") {
                      this.refs.otp6.focus();
                    }
                  }}
                  value={pin5}
                />

                <TextInput
                  ref={"otp6"}
                  style={styles.pinText}
                  keyboardType="numeric"
                  maxLength={1}
                  onChangeText={(pin6) => {
                    this.setState({ pin6: pin6 });
                  }}
                  value={pin6}
                />
              </View>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Home")}
                style={styles.verifyButtonContainer}
              >
                <Text style={styles.verifyButtonText}> Verify </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    margin: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  verifyButtonContainer: {
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
  verifyButtonText: {
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  pinContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "80%",
    padding: 10,
    borderColor: "grey",
    borderWidth: 0.5,
    margin: 10,
  },
  pinText: {
    width: 40,
    fontSize: 15,
    textAlign: "center",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 2,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
});

export default Verification;
