import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { RFValue } from "react-native-responsive-fontsize";



export default class PostCard extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
    }

    render() {
          return (
            <View style={styles.container}>
            <View style={styles.cardContainer}>
              <View style={styles.storyImage}>
                <Image source={require('../assets/profile_img.png')} 
                style={{resizeMode:'contain',width:Dimensions.get("window").width-60,height:250,borderRadius:10}}>
                </Image>
                <View style={styles.storyAuthor}>
                  <Text style={styles.storyAuthorText}>
                    {this.props.posts.author}
                  </Text>
                </View>
                <Image source={require('../assets/post.jpeg')} 
                style={{resizeMode:'contain',width:Dimensions.get("window").width-60,height:250,borderRadius:10}}>
                </Image>
                <View style={styles.captionContainer}>
                  <Text style={styles.captionText}>
                    {this.props.posts.caption}
                  </Text>
                </View>
              <View style={styles.actionContainer}>
                <View style={styles.likeButton}>
                  <View style={styles.likeIcon}>
                    <Ionicons name={"heart"} size={30} color={'white'} style={{width:30, marginLeft:20, marginTop:5}}/>
                  </View>
                  <View>
                    <Text style={styles.likeText}>12k</Text>
                  </View>
                </View>
              </View>
            </View>
            </View>
            </View>
          );
        }
      }
      
    
    const styles = StyleSheet.create({
      container: {
        flex: 1
      },
      cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#2f345d",
        borderRadius: RFValue(20)
      },
      storyImage: {
        resizeMode: "contain",
        width: "95%",
        alignSelf: "center",
        height: RFValue(250)
      },
      titleContainer: {
        paddingLeft: RFValue(20),
        justifyContent: "center"
      },
      storyTitleText: {
        fontSize: RFValue(25),
        fontFamily: "Bubblegum-Sans",
        color: "white"
      },
      storyAuthorText: {
        fontSize: RFValue(18),
        fontFamily: "Bubblegum-Sans",
        color: "white"
      },
      descriptionText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: 13,
        color: "white",
        paddingTop: RFValue(10)
      },
      actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
      },
      likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderRadius: RFValue(30)
      },
      likeText: {
        color: "white",
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
      },
      captionContainer:{

      },
      captionText:{
        fontSize:30,
        color:'white',
        paddingTop: RFValue(10),
      },
      
    });