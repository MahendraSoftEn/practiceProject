import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDemoData } from '../../utilities/ReduxStore/uploadimage';
import { useNavigation } from '@react-navigation/native';

const DemoStoreData = () => {

    const dispatch=useDispatch();

   
    const navigation=useNavigation();

    useEffect(()=>{
      
    },[])
 
     const count=useSelector((state)=>state.uploadImage.demoData);

  return (
    <View style={{flex:1,marginTop:20}}>
      <TouchableOpacity
       onPress={()=>{
        navigation.goBack();
       }}
      >
          <Text style={{fontSize:20}}>Back</Text>
        </TouchableOpacity>

         <TouchableOpacity
         style={{padding:10,backgroundColor:"green",margin:10}}
          onPress={()=>{
             dispatch(setDemoData(count+1));
          }}
         >
             <Text style={{color:"white"}}>Increase</Text>
         </TouchableOpacity>
         <TouchableOpacity
          style={{padding:10,backgroundColor:"red",margin:10}}
          onPress={()=>{
            dispatch(setDemoData(count-1));
          }}
         >
            <Text style={{color:"white"}}>Decrease</Text>
         </TouchableOpacity>

         <Text style={{textAlign:"center",fontSize:20,color:"orange"}}>{count}</Text>
    </View>
  )
}

export default DemoStoreData