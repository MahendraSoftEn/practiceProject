import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import {
  dynamicSize,
  getFontSize,
  hpx,
  wpx,
} from '../../../utilities/responsive';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useEffect} from 'react';

const SearchMessageScreen = props => {
  const messagedata = props?.route?.params?.data;
  const navigation = useNavigation();
  const [Message_data, setMessageData] = useState('');

  useEffect(() => {
    setMessageData(messagedata);
  }, []);

  const searchMessageData = (searchText) => {
    var data=[];
      messagedata?.map((item,index)=>{
          if(item?.title?.includes(searchText)){
               data.push(item);
          }
      })
       if(data?.length>0){
        setMessageData(data);
       }else{
        setMessageData(messagedata);
       }
      
  };

  const renderListItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: wpx(10),
          paddingTop: hpx(10),
        }}>
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
          <View>
            <Text>{item?.time}</Text>
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
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#E7E5E9',
          padding: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity style={[styles.textInput]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/Images/Search.png')}
                style={{
                  width: wpx(20),
                  height: hpx(20),
                  marginRight: wpx(5),
                  marginTop: hpx(7),
                }}
              />
            </TouchableOpacity>
            <TextInput
             style={[styles.textInput1]}
              autoFocus={true} 
              onChangeText={(text)=> searchMessageData(text)}
              
              />
            <TouchableOpacity>
              <Image
                source={require('../../../assets/Images/cancel.png')}
                style={{
                  width: dynamicSize(20),
                  height: dynamicSize(20),
                  marginTop: hpx(7),
                }}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: hpx(6)}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{fontSize: getFontSize(20)}}>cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, width: Dimensions.get('screen').width}}>
        <FlatList
          data={Message_data}
          renderItem={renderListItem}

        />
      </View>
    </View>
  );
};

export default SearchMessageScreen;
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
    width: wpx(300),
    paddingHorizontal: wpx(10),
  },
  textInput1: {
    //   borderWidth: 1,
    borderColor: '#E7E5E9',
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'white',
    width: wpx(200),
    height: hpx(40),
  },
});
