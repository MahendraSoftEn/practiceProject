import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { MapView,PROVIDER_GOOGLE } from 'react-native-maps'

const MapViewComponent = () => {
  return (
    <View>
      <Text>MapView</Text>
      <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={{ height: Dimensions.get("window").height - 40, width: Dimensions.get("window").width }}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              showsTraffic={true}
              zoom={15}
              zoomEnabled={true}
              zoomTapEnabled={true}
              zoomControlEnabled={true}
              // showsUserLocation={true}
            >
             
            </MapView>
    </View>
  )
}

export default MapViewComponent;