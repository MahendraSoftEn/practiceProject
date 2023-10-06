import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
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

const SearchMessageScreen = () => {

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
    <View style={{flex:1}}>
    <View
      style={{backgroundColor: '#E7E5E9', padding: 12, flexDirection: 'row',justifyContent:"space-between"}}>
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
          <TextInput style={[styles.textInput1]} autoFocus={true} />
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
      <TouchableOpacity style={{marginTop:hpx(6)}}
        onPress={()=>{
            navigation.goBack();
        }}
      > 
        <Text style={{fontSize:getFontSize(20)}}>cancel</Text>
      </TouchableOpacity>
    </View>
    <View style={{ flex:1, width: Dimensions.get("screen").width }}>
       
       <FlashList
             data={[1,2,3,4,5,6,7,8,4,3,4,5,3,4,4,4,4,4,4,4,4,4,4,2]}
             renderItem={renderListItem}
             estimatedItemSize={120}
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
