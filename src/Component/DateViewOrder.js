import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';

const DateViewOrder = () => {


    const navigation=useNavigation();
    const data=[
        {
            id:1,
            name:"Hello Mohan",
            date:"01-07-2023"
        },
        {
            id:2,
            name:"Hello Mohan",
            date:"01-08-2023"
        },
        {
            id:3,
            name:"Hello Mohan",
            date:"11-08-2023"
        },
        {
            id:4,
            name:"Hello Mohan",
            date:"21-08-2023"
        },
        {
            id:5,
            name:"Hello Mohan",
            date:"18-09-2023"
        },
        {
            id:6,
            name:"Hello Mohan",
            date:"19-09-2023"
        },
        {
            id:7,
            name:"Hello Mohan",
            date:"20-09-2023"
        },
        {
            id:8,
            name:"Hello soan",
            date:"21-09-2023"
        },
        {
            id:9,
            name:"Hello Mohan",
            date:"22-09-2023"
        },
        {
            id:10,
            name:"Hello Mohan",
            date:"23-09-2023"
        },
        {
            id:11,
            name:"Hello Mohan",
            date:"24-09-2023"
        },
        {
            id:12,
            name:"Hello Mohan",
            date:"25-09-2023"
        },
        {
            id:13,
            name:"Hello Mohan",
            date:"26-09-2023"
        },
        {
            id:14,
            name:"Hello Mohan",
            date:"27-09-2023"
        },
        {
            id:15,
            name:"Hello Mohan",
            date:"28-09-2023"
        },
        {
            id:16,
            name:"Hello Mohan",
            date:"29-09-2023"
        },
        {
            id:17,
            name:"Hello Mohan",
            date:"30-09-2023"
        },
        {
            id:17,
            name:"Hello Mohan",
            date:"30-09-2023"
        },
        {
            id:17,
            name:"Hello Mohan",
            date:"30-09-2023"
        },
        {
            id:17,
            name:"Hello Mohan",
            date:"30-09-2023"
        },
        {
            id:17,
            name:"Hello Mohan",
            date:"30-09-2023"
        },
        {
            id:17,
            name:"Hello Mohan",
            date:"30-09-2023"
        },
    ];
    const itemRef = useRef(null);
    const flatListRef = useRef(null);
    const itemIdToScrollTo = 6;
    const scrollToItem = () => {
        const index = data.findIndex(item => item.id == itemIdToScrollTo);
        console.log("index===>",index)
        if (flatListRef.current && index !== -1) {
          flatListRef.current.scrollToOffset({ offset: index * Dimensions.get("screen").height, animated: true });
        }
      };


   useEffect(()=>{
    // scrollToPosition(524);
    scrollToItem();
   },[])
    const renderItem=({item})=>{

        return(
            <View 
            ref={itemRef}
            style={{padding:10,backgroundColor:"gray",marginTop:10}}>
                <Text style={{color:"white"}}>{item.name}</Text>
                <Text style={{color:"white"}}>{item.date}</Text>
            </View>
        )
    }
    const scrollToPosition = (offset) => {
        if (flatListRef.current) {
          flatListRef.current.scrollToOffset({ offset, animated: true });
        }
      };

  return (
    <View style={{margin:20}}>
        <TouchableOpacity style={{padding:10,backgroundColor:"yellow"}}
         onPress={()=>{
            navigation.goBack();
         }}
        >
        <Text>DateViewOrder</Text>
            </TouchableOpacity>
    

        <FlatList
         ref={flatListRef}
         data={data}
         renderItem={renderItem}
        />
    </View>
  )
}

export default DateViewOrder