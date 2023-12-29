import { View, Text, TouchableOpacity, NativeModules } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from "@react-native-community/netinfo";
import { useIsConnected } from 'react-native-offline';

const DateOrderList = () => {

    const navigation=useNavigation();
    const isConnected=useIsConnected();

    const {MyNativeModule}=NativeModules;
      const [message,setMessage]=useState("");
      const getMessage=()=>{
      MyNativeModule.getPalindrome(151,(error,value)=>{
        if(error) return error;
        setMessage(value);
})
       
    }

    useEffect(()=>{
       storeData();
      retrieveData();
    },[])

    const storeData = async () => {
      try {
        // You can store a key-value pair
        await AsyncStorage.setItem('name', 'Mohan Kumar IT HUNT');
        console.log('Data stored successfully.');
      } catch (error) {
        console.error('Error storing data: ', error);
      }
    };
    const retrieveData = async () => {
      try {
        const userToken = await AsyncStorage.getItem('name');
        if (userToken !== null) {
          // Data is retrieved successfully
          console.log('Retrieved user token: ', userToken);
        } else {
          // Data doesn't exist
          console.log('No data found.');
        }
      } catch (error) {
        console.error('Error retrieving data: ', error);
      }
    };
  return (
    <View style={{margin:20}}>
    
        <TouchableOpacity 
        style={{padding:10,backgroundColor:"green"}}
        onPress={()=>{
            // navigation.navigate("DateViewOrder")
            // navigation.navigate("FastListScrooling")
            // navigation.navigate("SectionListOrder")
            // navigation.navigate("RecycleViewList")
            // navigation.navigate("PDFViewPage")
            // navigation.navigate("UploadImage")
            // navigation.navigate("VedioCalling")
            // getMessage();
            // navigation.navigate("NativeCode")
            // navigation.navigate("MessageMainScreen")
           
            // navigation.navigate("MapViewComponent")
            // NetInfo.fetch().then(state => {
            //   console.log("Connection type", state.type);
            //   console.log("Is connected?", state.isConnected);
            //   if(state.isConnected){
            //     navigation.navigate("DemoStoreData");
            //   }else{
            //     alert("no internet")
            //   }
            // });
            if(isConnected){
              navigation.navigate("GmailApp");
            }else{
              alert("no internet")
            }
           
            
        }}
        > 
        <Text style={{color:"white",fontSize:18,alignSelf:"center"}}>New Application</Text>
       
        </TouchableOpacity>
        <Text>{message}</Text>
    </View>
  )
}

export default DateOrderList