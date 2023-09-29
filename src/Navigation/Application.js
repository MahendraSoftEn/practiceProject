import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DateOrderList from '../DateOrderList';
import DateViewOrder from '../Component/DateViewOrder';
import SectionListOrder from '../SectionListOrder';
import RecycleViewList from '../RecycleViewList';
import ShopfiyFlashList from '../ShopfiyFlashList';
import NativeCode from '../Component/NativeCode';
import { PDFViewPage } from '../PDFViewPage';
import UploadImage from '../UploadImage';
import VedioCalling from '../VedioCalling';

const Application = () => {

    const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DateOrderList">
        <Stack.Screen name="DateOrderList" component={DateOrderList}
          options={{
            headerShown:false,
            
          }}
        />
        <Stack.Screen name="DateViewOrder" component={DateViewOrder}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen name="SectionListOrder" component={SectionListOrder}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen name="RecycleViewList" component={RecycleViewList}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen name="ShopfiyFlashList" component={ShopfiyFlashList}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen name="PDFViewPage" component={PDFViewPage}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen name="UploadImage" component={UploadImage}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen name="VedioCalling" component={VedioCalling}
          options={{
            headerShown:false
          }}
        />
      
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Application;