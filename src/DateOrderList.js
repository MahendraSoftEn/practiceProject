import { View, Text, TouchableOpacity, NativeModules } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';

const DateOrderList = () => {

    const navigation=useNavigation();

    const {MyNativeModule}=NativeModules;
      const [message,setMessage]=useState("");
      const getMessage=()=>{
      MyNativeModule.getPalindrome(151,(error,value)=>{
        if(error) return error;
        setMessage(value);
})
       
    }
  return (
    <View style={{margin:20}}>
    
        <TouchableOpacity 
        style={{padding:10,backgroundColor:"green"}}
        onPress={()=>{
            // navigation.navigate("DateViewOrder")
            // navigation.navigate("FastListScrooling")
            // navigation.navigate("SectionListOrder")
            // navigation.navigate("RecycleViewList")
            navigation.navigate("PDFViewPage")
            // navigation.navigate("UploadImage")
            // navigation.navigate("VedioCalling")
            // getMessage();
            // navigation.navigate("NativeCode")
            // navigation.navigate("MessageMainScreen")
        }}
        > 
        <Text style={{color:"white",fontSize:18,alignSelf:"center"}}>New Application</Text>
       
        </TouchableOpacity>
        <Text>{message}</Text>
    </View>
  )
}

export default DateOrderList