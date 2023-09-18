import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DateOrderList from '../DateOrderList';
import DateViewOrder from '../Component/DateViewOrder';

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
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Application;