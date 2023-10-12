import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import React,{useState,useEffect} from 'react';

import {
  dynamicSize,
  getFontSize,
  hpx,
  wpx,
} from '../../../utilities/responsive';
import {FlashList} from '@shopify/flash-list';
import {useNavigation} from '@react-navigation/native';
import {messageData} from '../../../utilities/DemoData/messageData';




const MessageMainScreen = () => {
  const navigation = useNavigation();
  const [deleteView, setDeleteView] = useState(false);
  const [itemSelected, setItemSelected] = useState(false);

   
    useEffect(()=>{

    },[itemSelected])
    
  const renderListItem = ({item, index}) => {
    return (
      <TouchableOpacity
      onPress={()=>{
        setItemSelected(!itemSelected);
        console.log("erro12345",itemSelected)
      }}
        style={{
          backgroundColor: 'white',
          paddingHorizontal: wpx(10),
          paddingTop: hpx(10),
        }}
        // onLongPress={() => {
        //   setDeleteView(true);
        // }}
       
        >
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: wpx(6)}}>
              <Image
                source={require('../../../assets/Images/avatar-with-bg.png')}
                style={{width: dynamicSize(40), height: dynamicSize(40)}}
              />
            </View>
            <View>
              <Text>{item?.title}</Text>
              <View style={{width: wpx(310)}}>
                <Text>{item?.message}</Text>
              </View>
            </View>
          </View>
          {
            console.log("item sl==>12",itemSelected)
          }
          <View>
            <Text>{item?.time}</Text>

            {itemSelected ? (
              <Image
                source={require('../../../assets/Images/fillbox.png')}
                style={{width: wpx(20), height: hpx(20), marginTop: hpx(10)}}
              />
            ) : (
              <View
                style={{
                  width: wpx(20),
                  height: hpx(20),
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: '#8C8896',
                  marginTop: hpx(10),
                }}
              />
            )}
          </View>
        </View>

        <View
          style={{
            height: 1,
            backgroundColor: '#E7E5E9',
            width: '100%',
            marginTop: hpx(10),
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={[styles.firstViewContainer]}>
        <TouchableOpacity>
          <Text style={[styles.textStyle]}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Text style={[styles.textStyle, {marginRight: wpx(6)}]}>Message</Text>
          <Image
            source={require('../../../assets/Images/arrowRightLight.png')}
            style={[styles.downArrow]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: getFontSize(20), color: '#45A73A'}}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={{backgroundColor: '#E7E5E9', padding: 10}}>
        <TouchableOpacity
          style={[styles.textInput]}
          onPress={() => {
            navigation.navigate('SearchMessageScreen', {
              data: messageData,
            });
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../../assets/Images/Search.png')}
              style={{
                width: wpx(20),
                height: hpx(20),
                marginRight: wpx(5),
                marginTop: hpx(3),
              }}
            />
            <Text style={{fontSize: getFontSize(15)}}>search message</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, width: Dimensions.get('screen').width}}>
        <FlashList
          data={messageData}
          renderItem={renderListItem}
          estimatedItemSize={120}
        />
        <TouchableOpacity
          onPress={()=>{
            setItemSelected(!itemSelected);
            console.log("erro",itemSelected)
          }}
        >
          <Text>Click Me</Text>
        </TouchableOpacity>
      </View>
      {deleteView ? (
        <View
          style={{
            backgroundColor: '#00000029',
            height: 60,
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <View>
            <Text style={{textAlign: 'center'}}>{'0'}</Text>
            <Text>Item Selected</Text>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/Images/deleteIcon.png')}
              style={{
                width: dynamicSize(30),
                height: dynamicSize(30),
                marginLeft: wpx(6),
              }}
            />
            <Text style={{}}>Delete</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      
    </View>
  );
};

export default MessageMainScreen;

const styles = StyleSheet.create({
  firstViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wpx(12),
    backgroundColor: 'white',
  },
  textStyle: {
    fontSize: getFontSize(15),
    color: '#45A73A',
  },
  downArrow: {
    tintColor: '#45A73A',
    width: wpx(11),
    height: hpx(20),
    transform: [{rotate: '90deg'}],
    marginLeft: wpx(5),
    marginTop: hpx(3),
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E7E5E9',
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: wpx(10),
    paddingVertical: hpx(7),
  },
});
