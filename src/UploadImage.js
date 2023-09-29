import React, { useState } from 'react'
import { View, Text, Button, Image, FlatList } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import  * as ImagePicker from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setImageData } from '../utilities/ReduxStore/uploadimage';


const UploadImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const dispatch=useDispatch();

   const imageData=useSelector((state)=> state.uploadImage.imageData);
    console.log("iamge data====>",imageData);
    const pickDocument = async () => {
      try {
        const result = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });
  
        // setSelectedFile(result);
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          // User canceled the document picker
        } else {
          throw err;
        }
      }
    };
  
    const pickImage = () => {
      const options = {
        title: 'Select Image',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
  
      ImagePicker.launchImageLibrary(
        {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 200,
          maxWidth: 200,
          selectionLimit:5
        },
        (response) => {
          console.log(response);
          setSelectedFile(response)
          dispatch(setImageData([...imageData,...response.assets]));
        },
      )
    
    };
  
    const renderSelectedFile = () => {
        console.log("selected===>",selectedFile.assets[0].fileName)
      if (!selectedFile) {
        return null;
      }
  
      if (selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/png') {
        return <Image source={{ uri: selectedFile.assets[0].uri }} style={{ width: 200, height: 200 }} />;
      } else {
        return (
          <View>
            <Text>File Name: {selectedFile.name}</Text>
            <Text>File Size: {selectedFile.size} bytes</Text>
          </View>
        );
      }
    };
  
    const renderUploadedImage=()=>{

         
    }



    return (
      <View>
        <Button title="Pick Document" onPress={pickDocument} />
        <Button title="Pick Image" onPress={pickImage} />
        <View style={{marginTop:40}} />
        

        <FlatList
         data={imageData}
         numColumns={3}
         renderItem={({item,index})=>
            <Image source={{ uri: item?.uri }} style={{ width: 100, height: 100 }} />
         }
        />
       
        {/* {renderSelectedFile()} */}
      </View>
    );
  };
  
  export default UploadImage;
  