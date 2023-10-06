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
import React from 'react';
import {
  dynamicSize,
  getFontSize,
  hpx,
  wpx,
} from '../../../utilities/responsive';
import { FlashList } from '@shopify/flash-list';
import { useNavigation } from '@react-navigation/native';

const MessageMainScreen = () => {

  const navigation=useNavigation();


  const renderListItem = ({item, index}) => {
    return (
      <View style={{backgroundColor: 'white', paddingHorizontal: wpx(10),paddingTop:hpx(10)}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: wpx(6)}}>
              <Image
                source={require('../../../assets/Images/avatar-with-bg.png')}
                style={{width: dynamicSize(40), height: dynamicSize(40)}}
              />
            </View>
            <View>
              <Text>First Message</Text>
              <View style={{width:wpx(310)}}>
                <Text>
                  Remember to use this tag accurately based on your app's actual
                  requirements.
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text>09:40</Text>
          </View>
        </View>

         <View style={{height:1,backgroundColor:"#E7E5E9",width:"100%",marginTop:hpx(10)}} />
      </View>
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
        <TouchableOpacity style={[styles.textInput]}
          onPress={()=>{
            navigation.navigate("SearchMessageScreen")
          }}
        >
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../../assets/Images/Search.png')}
              style={{width: wpx(20), height: hpx(20), marginRight: wpx(5),marginTop:hpx(3)}}
            />
            <Text style={{fontSize:getFontSize(15)}}>search message</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ height: Dimensions.get("screen").height, width: Dimensions.get("screen").width }}>
       
        <FlashList
              data={[1,2,3,4,5,6,7,8,4,3,4,5,3,4,4,4,4,4,4,4,4,4,4,2]}
              renderItem={renderListItem}
              estimatedItemSize={120}
            />
      </View>
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
