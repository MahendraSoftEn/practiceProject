import { View, Text, TouchableOpacity, NativeModules } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list';

import MessageView from './Component/NativeCode';

const ShopfiyFlashList = () => {

    const DATA = [
        {
          title: "First Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
        {
          title: "Second Item",
        },
      ];
    
       console.log("native Code===.",MessageView);

  return (
    <View style={{flex:1}}>
      <Text>ShopfiyFlashList</Text>
      <FlashList
      data={DATA}
      renderItem={({ item }) =>
        <TouchableOpacity style={{padding:20,margin:20,backgroundColor:"green"}}>
        <Text style={{}}>{item.title}</Text>
       </TouchableOpacity>
    }
      estimatedItemSize={200}
    />
    </View>
  )
}

export default ShopfiyFlashList