import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const GoogleLogin = () => {

    useEffect(()=>{
        GoogleSignin.configure();
    },[])

 const googleSign=async()=>{

    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log("userinfo===>",userInfo);
        await GoogleSignin.signOut();
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
          console.log("error1===>",error);
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
          console.log("error2===>",error);
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
          console.log("error3===>",error);
        } else {
            console.log("error===>>>>>4", error);
          // some other error happened
        }
      }
 }


  return (
    <View>
        <TouchableOpacity  onPress={()=>{
            googleSign();
        }}>
        <Text>GoogleLogin</Text>
        </TouchableOpacity>
     
    </View>
  )
}

export default GoogleLogin