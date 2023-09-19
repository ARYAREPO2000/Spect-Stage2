import React from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CreatePost from '../screens/CreatePost';
import Feed from '../screens/Feed';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator();

export default class BottomTabNaviagtor extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator screenOptions={({route})=>{
                    tabBarIcon:({focused,color,size})=>{
                         let iconName;
                         if (route.name === 'Feed') {
                            iconName = 'focused'?
                            'home':'home-outline'
                         } else if (route.name ==='CreatePost'){
                            iconName = 'focused'?
                            'add-circle':'add-circle-outline'
                         }
                        
                         return(
                            <Ionicons name={iconName} size={RFValue(25)} color={color}/>
                         )
                    }
                }}
                tabBarOptions={{
                    activeTintColor:'tomato', inactiveTintColor:'grey'
                }} 
                >
                    <Tab.Screen name='Feed' component={Feed} options={{headerShown:false}}/>
                    <Tab.Screen name='CreatePost' component={CreatePost} options={{headerShown:false}}/>
                </Tab.Navigator>
            </NavigationContainer>
        )

    }
}