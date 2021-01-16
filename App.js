import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Login from "./src/screens/Login";
import SignUpScreen from "./src/screens/SignUp";
import VerificationScreen from "./src/screens/Verification";
import AppointmentItemScreen from "./src/screens/AppointmentItemScreen"

const navigator = createStackNavigator (
  {   
    Home:{
      screen: HomeScreen,
      navigationOptions: () => ({
          title: `HOME`,
        }),
  },
  Logoo:{
      screen: Login,
      navigationOptions:() => ({
        header: null
      })
  },
  SignUp:{
      screen: SignUpScreen,
      navigationOptions: () => ({
        title: `SignUp`,
        // headerLeft:null
      }),
    },
    Verification:{
      screen: VerificationScreen,
      navigationOptions: () => ({
        title: `Verification`
      }),},
      AppointmentItem:{
        screen: AppointmentItemScreen,
        navigationOptions: () => ({
          title: `Appointments`
        }),
    }
    // Home: HomeScreen,
    // Logoo: Login,
    // SignUp: SignUpScreen,
    // Verification: VerificationScreen,
    // AppointmentItem: AppointmentItemScreen
  },
  {
    initialRouteName: "Logoo",
  }
  
);

export default createAppContainer(navigator);