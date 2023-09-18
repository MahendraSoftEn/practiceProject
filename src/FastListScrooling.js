import { View, Text, FlatList, Dimensions } from 'react-native'
import React, { useCallback } from 'react'

const FastListScrooling = () => {

    const data=[
        {
            id:1,
            title:"Hello Flatlist Performance Testing"
        },
        {     
            id:2,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:3,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:4,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:5,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:6,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:7,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:8,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:9,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:10,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:11,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:13,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:14,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:15,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:16,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:17,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:18,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:19,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:20,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:21,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:22,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:23,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:24,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:25,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:26,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:27,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:28,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:29,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:30,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:31,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:32,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:33,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:34,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:35,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:36,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:37,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:38,
            title:"Hello Flatlist Performance Testing"
        },
        {
            id:39,
            title:"Hello Flatlist Performance Testing"
        },
    ];
   
 
   const renderItem=useCallback(({item})=> <Post item={item}>{item.key}</Post>,[]);
  const keyExtractor= useCallback((item)=>item.id.toString(),[]);
  const Post=(props)=>{
          
    return(
        <View style={{padding:20,backgroundColor:"red",marginHorizontal:10,marginTop:20}}>
            <Text>{props.item.title}</Text>
        </View>
    )
  }
  return (
    <View style={{flex:1}}>
      <Text>FastListScrooling</Text>
       <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        maxToRenderPerBatch={10}
       
       />
    </View>
  )
}

export default FastListScrooling