import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Pdf from 'react-native-pdf';
import WebView from 'react-native-webview';
import FileViewer from 'react-native-file-viewer';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {useState} from 'react';

export const PDFViewPage = () => {
  useEffect(() => {
    retrieveData();
  }, []);
  const navigation = useNavigation();
  const [name, setName] = useState('');

  const source = {
    uri: 'https://edunext-main-storage-cf.edunexttechnologies.com/edu_test/school___static/1694760467797_Get_Started_With_Smallpdf.pdf',
    cache: true,
  };
  const localFile = `${RNFS.DocumentDirectoryPath}/${'test.pdf'}`;
  const filePath =
    'https://edunext-main-storage-cf.edunexttechnologies.com/edu_test/school___static/1694760467797_Get_Started_With_Smallpdf.pdf';
  const fileView = () => {
    const options = {
      displayName: 'My File', // Display name for the file
      onDismiss: () => {
        // Handle dismissal of the viewer
      },
    };

    // Open the file viewer
    FileViewer.open(localFile, options)
      .then(() => {
        // File viewer opened successfully
      })
      .catch(error => {
        // Handle errors (e.g., file not found, unsupported file type)
        console.error(error);
      });
  };

  const retrieveData = async () => {
    try {
      const userToken = await AsyncStorage.getItem('name');
      if (userToken !== null) {
        // Data is retrieved successfully
        setName(userToken);
        console.log('Retrieved user token: ', userToken);
      } else {
        // Data doesn't exist
        console.log('No data found.');
      }
    } catch (error) {
      console.error('Error retrieving data: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{height: 50, backgroundColor: 'blue', width: '100%'}}>
        <Text style={{color: 'white'}}>Back</Text>
      </TouchableOpacity>
      <Pdf
      trustAllCerts={false}
        source={{
            uri:'https://smallpdf.com/handle-widget#url=https://assets.ctfassets.net/l3l0sjr15nav/29D2yYGKlHNm0fB2YM1uW4/8e638080a0603252b1a50f35ae8762fd/Get_Started_With_Smallpdf.pdf',
            cache: true,
        }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
      {/* <TouchableOpacity
        style={{padding: 10, backgroundColor: 'green', marginTop: 10}}
        onPress={() => {
          fileView();
        }}>
        <Text style={{color: 'white'}}>{name ? name : 'Open File'}</Text>
      </TouchableOpacity> */}
      {/* <WebView
        sharedCookiesEnabled
        originWhitelist={['*']}
        source={{
          uri: 'http://live2.tpgpstrack.com/modern/#/livetracking?accessToken=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNjkyNjk2OTgyNTU3IiwiaXNzIjoiZ3BzLXRyYWNrZXIiLCJpYXQiOjE2OTI2OTY5ODJ9.BMeioVVfGh8u9_yXErtm7MP6YvnkQNcwP1q5HUkwsGM/',
          // uri: "https://www.google.com/",
          // url,
          // trackingUrl,
        }}
        style={{}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
