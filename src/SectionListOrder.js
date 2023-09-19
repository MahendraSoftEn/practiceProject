import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { View, SectionList, Text, Button, TouchableOpacity } from 'react-native';

function SectionListOrder() {
  const sectionListRef = useRef(null);
  const navigation=useNavigation();
  // Data for the SectionList
  const sections = [
    {
      title: 'Section A',
      data: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      title: 'Section B',
      data: ['Item 4', 'Item 5', 'Item 6'],
    },
    {
      title: 'Section C',
      data: ['Item 4', 'Item 5', 'Item 6'],
    },
    {
      title: 'Section D',
      data: ['Item 4', 'Item 5', 'Item 6'],
    },
    {
      title: 'Section E',
      data: ['Item 4', 'Item 5', 'Item 6'],
    },
    {
      title: 'Section F',
      data: ['Item 4', 'Item 5', 'Item 6'],
    },
    {
      title: 'Section G',
      data: ['Item 4', 'Item 5', 'Item 6'],
    },
    {
      title: 'Section H',
      data: ['Item 4', 'Item 5', 'Item 6'],
    },
    {
      title: 'Section I',
      data: ['Item 4', 'Item 5', 'Item 6'],
    },
    // Add more sections and items as needed
  ];

   useEffect(()=>{
    scrollToTopOfItem();
   },[])


  // Function to scroll to the top of a specific item
  const scrollToTopOfItem = () => {
    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        sectionIndex: 3, // Index of the section containing the item
        itemIndex: 0,   // Index of the item within the section
        viewPosition: 0, // 0 for top, 1 for center, 2 for bottom
        animated: true,  // Specify whether the scroll should be animated
      });
    }
  };

  return (
    <View style={{flex:1}}>
        <TouchableOpacity
          onPress={()=>{
            navigation.goBack();
          }}
        >
            <Text>Back</Text>
        </TouchableOpacity>
      <Button
        title="Scroll to Top of Section B, Item 3"
        onPress={scrollToTopOfItem}
      />
      <SectionList
        ref={sectionListRef}
        getItemLayout={(data, index) => ({
            length: 300, // Specify the height of each item
            offset: 30 * index, // Calculate the offset based on item index
            index,
          })}
        // onScrollToIndexFailed={(info) => {
        //     console.warn('Scroll to index failed:', info);
        //     // Handle the failure here, e.g., scroll to a nearby item
        //   }}
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
           <View style={{padding:10,backgroundColor:'gray'}}>

          <Text>{title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
         <View style={{padding:5,backgroundColor:"blue",marginTop:7}}>

          <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default SectionListOrder;
