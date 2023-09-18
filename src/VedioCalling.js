
import React, {useRef, useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {PermissionsAndroid, Platform} from 'react-native';
import {
ClientRoleType,
createAgoraRtcEngine,
IRtcEngine,
ChannelProfileType,
} from 'react-native-agora';

const appId = 'fe7792bdceb24b26b5b8aef90d4c41f7';
const channelName = '<--Insert channel name here-->';
const token = 'dUsxCPtFToSpLOdctOlqx0:APA91bEMqZ6lqv-0hrgeI9fsvZ3mKr67fIvajWTZoBn0u_tw9HnxjaRwYbCbDgErc1cpd2hAJ0n81nAZ47gQatITFb2sOTPEA9NvMpVmG7xwVTHyQ0djR1U11Cv9mre2ptWNtozOaMyI';
const uid = 0;


const VedioCalling = () => {

    const agoraEngineRef = useRef(); // Agora engine instance
    const [isJoined, setIsJoined] = useState(false); // Indicates if the local user has joined the channel
    const [remoteUid, setRemoteUid] = useState(0); // Uid of the remote user
    const [message, setMessage] = useState(''); // Message to the user

    useEffect(() => {
      // Initialize Agora engine when the app starts
      setupVoiceSDKEngine();
   });
    const setupVoiceSDKEngine = async () => {
      try {
      // use the helper function to get permissions
      if (Platform.OS === 'android') { await getPermission()};
      agoraEngineRef.current = createAgoraRtcEngine();
      const agoraEngine = agoraEngineRef.current;
      agoraEngine.registerEventHandler({
          onJoinChannelSuccess: () => {
            console.log('Successfully joined the channel ' + channelName);
              setIsJoined(true);
          },
          onUserJoined: (_connection, Uid) => {
              console.log('Remote user joined with uid ' + Uid);
              setRemoteUid(Uid);
          },
          onUserOffline: (_connection, Uid) => {
            console.log('Remote user left the channel. uid: ' + Uid);
              setRemoteUid(0);
          },
      });
      agoraEngine.initialize({
          appId: appId,
      });
      } catch (e) {
          console.log(e);
      }
   };


   const join = async () => {
    if (isJoined) {
        return;
    }
    try {
        agoraEngineRef.current?.setChannelProfile(
            ChannelProfileType.ChannelProfileCommunication,
        );
        agoraEngineRef.current?.joinChannel(token, channelName, uid, {
            clientRoleType: ClientRoleType.ClientRoleBroadcaster,
        });
    } catch (e) {
        console.log(e);
    }
};

const leave = () => {
  try {
      agoraEngineRef.current?.leaveChannel();
      setRemoteUid(0);
      setIsJoined(false);
      showMessage('You left the channel');
  } catch (e) {
      console.log(e);
  }
};


    return (
      <SafeAreaView style={styles.main}>
        <Text style={styles.head}>Agora Video Calling Quickstart</Text>
        <View style={styles.btnContainer}>
          <Text onPress={join} style={styles.button}>
            Join
          </Text>
          <Text onPress={leave} style={styles.button}>
            Leave
          </Text>
        </View>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContainer}>
          {isJoined ? (
            <Text>Local user uid: {uid}</Text>
          ) : (
            <Text>Join a channel</Text>
          )}
          {isJoined && remoteUid !== 0 ? (
            <Text>Remote user uid: {remoteUid}</Text>
          ) : (
            <Text>Waiting for a remote user to join</Text>
          )}
          <Text>{message}</Text>
        </ScrollView>
      </SafeAreaView>
  );
}

export default VedioCalling

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 25,
        paddingVertical: 4,
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#0055cc',
        margin: 5,
    },
    main: {flex: 1, alignItems: 'center'},
    scroll: {flex: 1, backgroundColor: '#ddeeff', width: '100%'},
    scrollContainer: {alignItems: 'center'},
    videoView: {width: '90%', height: 200},
    btnContainer: {flexDirection: 'row', justifyContent: 'center'},
    head: {fontSize: 20},
});