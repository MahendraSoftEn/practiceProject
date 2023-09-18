import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const DateOrderList = () => {

    const navigation=useNavigation();
  return (
    <View style={{margin:20}}>
        <TouchableOpacity 
        style={{padding:10,backgroundColor:"green"}}
        onPress={()=>{
            navigation.navigate("DateViewOrder")
        }}
        > 
        <Text style={{color:"white",fontSize:18,alignSelf:"center"}}>DateOrderList</Text>
        </TouchableOpacity>
     
    </View>
  )
}

export default DateOrderList