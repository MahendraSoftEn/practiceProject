import { View, Text, Platform } from 'react-native'
import React, { useEffect } from 'react'
import messaging from '@react-native-firebase/messaging';
import GoogleLogin from './src/GoogleLogin';
import { PDFViewPage } from './src/PDFViewPage';
import VedioCalling from './src/VedioCalling';
import FastListScrooling from './src/FastListScrooling';
import { handlePermissions } from './utilities/handlePermission';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {



  useEffect(()=>{
    handlePermissions();
    requestUserPermission();
    notificationListener();
    getPermission();
  },[])

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
      getFcmToken();
    }
  }
  
  const getFcmToken = async () => {
      // let checkToken = await AsyncStorage.getItem("fcmTokenKey");
  
      // if (!checkToken) {
        try {
          let token = await messaging().getToken();
  
          if (token) {
            console.log("token====>",token);
          }
        } catch (error) {}
      // }
    };

    const notificationListener=()=>{

      messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        
      });
      messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
    
      });

      messaging().onMessage(async remoteMessage=>{
        console.log("remote message===>",remoteMessage)
      })

      messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
      });
    }

    const getPermission = async () => {
      if (Platform.OS === 'android') {
          await PermissionsAndroid.requestMultiple([
              PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          ]);
      }
  };

  
  return (
    <View style={{flex:1}}>
        {/* <GoogleLogin /> */}
        {/* <PDFViewPage /> */}
         {/* <VedioCalling /> */}
         <FastListScrooling />
    </View>
  )
}

export default App