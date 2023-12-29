import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  dynamicSize,
  getFontSize,
  hpx,
  wpx,
} from '../../../utilities/responsive';
import {gmailData} from './gamilData';
import { useNavigation } from '@react-navigation/native';

const GmailApp = () => {

   const navigation=useNavigation();


  const renderMailCard = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'white',
          paddingTop:hpx(10)
        }}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <Image
            source={item?.authorImage}
            style={{width: dynamicSize(40), height: dynamicSize(40),margin:wpx(5)}}
          />
          <View style={{marginTop:hpx(10)}}>
            <View>
              <Text style={{color:"#194880"}}>{item?.auther}</Text>
            </View>
            <View style={{width:wpx(270)}}>
              <Text style={{fontSize:getFontSize(14)}}>{item?.title}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text>{item.time}</Text>
          <Image
            source={require('../../../assets/Images/gmail/star.png')}
            style={{width: dynamicSize(20), height: dynamicSize(20)}}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1,backgroundColor:"white"}}>
      <TouchableOpacity
       style={{padding: 10, backgroundColor: 'grey'}}
       onPress={()=>{
        navigation.goBack();
       }}
       >
        <Text style={{color: 'white', fontSize: 17}}>Back To Home</Text>
      </TouchableOpacity>

    <ScrollView
      overScrollMode='none'
    >
      <View style={[styles.searchContainer]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/Images/gmail/menu.png')}
            style={{
              width: dynamicSize(20),
              height: dynamicSize(20),
              marginRight: wpx(5),
            }}
          />
          <Text>Search in email</Text>
        </View>
        <View>
          <View style={[styles.profileImage]}>
            <Text style={{color: 'white', fontSize: 14}}>m</Text>
          </View>
        </View>
      </View>

      <View style={{marginHorizontal: wpx(15), marginTop: hpx(10)}}>
        <Text style={{color: 'grey', fontSize: getFontSize(17)}}>Primary</Text>
      </View>

      <View style={{flex:1,marginTop:hpx(10)}}>
        <FlatList 
        scrollEnabled={false}
        nestedScrollEnabled={true}
        data={gmailData} 
        renderItem={renderMailCard} />
      </View>
      </ScrollView>
    </View>
  );
};

export default GmailApp;
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ECF6EB',
    padding: 5,
    margin: 8,
    borderRadius: 15,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
