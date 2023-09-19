import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';

// Create your data provider
const dataProvider = new DataProvider((r1, r2) => r1 !== r2);

// Create your layout provider
const layoutProvider = new LayoutProvider(
  (index) => 0, // Only one view type in this example
  (type, dim) => {
    dim.width = Dimensions.get('window').width; // Set the width to match the screen width
    dim.height = 50; // Set the height of each list item
  }
);

// Sample data
const dataArray = Array.from({ length: 100 }, (_, i) => `Item ${i}`);
  
const obj=[
    {
        id:1,
        name:"mohan"
    },
    {
        id:2,
        name:"mohan"
    },
    {
        id:3,
        name:"mohan"
    },
    {
        id:4,
        name:"mohan"
    },
    {
        id:5,
        name:"mohan"
    },
    {
        id:6,
        name:"mohan"
    },
    {
        id:7,
        name:"mohan"
    },
    {
        id:8,
        name:"mohan"
    },
    {
        id:9,
        name:"mohan"
    },
    {
        id:10,
        name:"mohan"
    },
    {
        id:10,
        name:"mohan"
    },
    {
        id:10,
        name:"mohan"
    },
    {
        id:10,
        name:"mohan"
    },
    {
        id:10,
        name:"mohan"
    },
    {
        id:10,
        name:"mohan"
    },
    {
        id:10,
        name:"mohan"
    },
]
const RecycleViewList = () => {
  const rowRenderer = (type, data, index) => (
    <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{data.name}</Text>
    </View>
  );

  return (
    <RecyclerListView
      layoutProvider={layoutProvider}
      dataProvider={dataProvider.cloneWithRows(obj)}
      rowRenderer={rowRenderer}
    />
  );
};

export default RecycleViewList;
