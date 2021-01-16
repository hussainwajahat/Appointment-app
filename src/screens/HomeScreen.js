import React from "react";
import { View, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Icon } from 'react-native-elements'

import AppointmentScreen from "./AppointmentScreen";
import NotificationScreen from "./NotificationScreen";
import ProfileScreen from "./ProfileScreen";

const TabNavigator = createMaterialBottomTabNavigator(
    {
        TabAppointment: {
            screen: AppointmentScreen,
            navigationOptions: {
                tabBarLabel: 'Appointment',
                activeColor: '#308DFF',
                inactiveColor: 'grey',
                barStyle: { backgroundColor: '#FFFFFF'},
                tabBarIcon:()=>(
                    <View>
                        <Image source={require('../../assets/calendar_icon.png')} style={{width: 25, height: 25}} />
                    </View>
                )
            }
        },
        TabNotification: {
            screen: NotificationScreen,
            navigationOptions: {
                tabBarLabel: 'Notifications',
                activeColor: '#308DFF',
                inactiveColor: 'grey',
                barStyle: { backgroundColor: '#FFFFFF'},
                tabBarIcon:()=>(
                    <View>
                        <Image source={require('../../assets/bell_icon.png')} style={{width: 25, height: 25}} />
                    </View>
                )
            }
        },
        TabProfile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarLabel: 'Profile',
                activeColor: '#308DFF',
                inactiveColor: 'grey',
                activeTintColor: '#308DFF',
                barStyle: { backgroundColor: '#FFFFFF'},
                tabBarIcon:()=>(
                    <View>
                        <Icon name={'person'} size={25} style={{color: 'grey'}}/>
                    </View>
                )
            }
        }
    }
);

export default createAppContainer(TabNavigator);