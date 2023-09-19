import React from 'react'
import {Image, Text, View, TouchableOpacity, StyleSheet, TextInput, ScrollView, SafeAreaView, Platform, StatusBar, Dimensions } from 'react-native'
import * as Font from "expo-font";
import DropDownPicker from 'react-native-dropdown-picker';
import * as SplashScreen from 'expo-splash-screen';
import { RFValue } from 'react-native-responsive-fontsize';


let customFonts = {
    'Bubblegum-Sans':require('../assets/BubblegumSans-Regular.ttf')
}

export default class CreatePost extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fontsLoaded:false, 
            previewImage:'image_1',
            dropDownHeight:40, 
        }
    }

    render(){
        let preview_Images={
            'image_1': require('../assets/image_1.jpg'),
            'image_2': require('../assets/image_2.jpg'),
            'image_3': require('../assets/image_3.jpg'),
            'image_4': require('../assets/image_4.jpg'),
            'image_5': require('../assets/image_5.jpg'),
            'image_6': require('../assets/image_6.jpg'),
            'image_7': require('../assets/image_7.jpg'),
        }
        return(
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
            <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                    <Image source={require('../assets/logo.png')} style={styles.iconImage}/>
                </View>
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>New Story</Text>
                </View>                                                          
            </View>
            <View style={styles.fieldsContainer}>
                <Image source={preview_Images=[this.state.previewImage]}/>
                <View style={{height:RFValue(this.state.dropDownHeight)}}>
                    <DropDownPicker items={[
                        {label:'Image 1', value:'image_1'},
                        {label:'Image 2', value:'image_2'},
                        {label:'Image 3', value:'image_3'},
                        {label:'Image 4', value:'image_4'},
                        {label:'Image 5', value:'image_5'},
                    ]}
                    defaultValue={this.state.previewImage}
                    open={this.state.dropDownHeight === 170?true:false}
                    onOpen = {()=>{
                        this.setState({dropDownHeight:170})
                    }}
                    onClose = {()=>{
                        this.setState({dropDownHeight:40})
                    }}
                    onSelectItem={(item)=>{
                        this.setState({previewImage: item.value})
                    }}
                    textStyle={{
                        color:this.state.dropDownHeight=== 170?'black':'white',
                        fontFamily:'Bubblegum-Sans',
                        
                    }}
                    style={{backgroundColor:"transparent",
                            borderWidth:1,
                            borderColor:'white'
                }}
                
                    />
                </View>
                <ScrollView>
                    <TextInput placeholder={'Title'}/>
                    <TextInput placeholder={'Descrition'}/>
                    <TextInput placeholder={'Story'}/>
                    <TextInput placeholder={'Moral'}/>
                </ScrollView>
            </View>
        </View>
        )
    }
    

}





const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c",
      
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    cardContainer: {
      flex: 0.93
    },

    fieldsContainer:{
        flex:0.85,
    },
    previewImage:{
        width:'93%',
        height: RFValue(250),
        alignSelf:'center',
        borderRadius:RFValue(10),
        marginVertical: RFValue(10),
        resizeMode:'contain',
        },
  });
