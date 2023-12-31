import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import TabNavigator from "./BottomTabNavigator"
import Profile from "../screens/Profile";

 
const Drawer = createDrawerNavigator();
const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator> 
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}


export default DrawerNavigator;

