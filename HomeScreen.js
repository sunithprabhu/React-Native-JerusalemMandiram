import React from 'react';
import { View,Text, Button,StyleSheet } from 'react-native';
import FontAwesome,{ SolidIcons,RegularIcons,BrandIcons,parseIconFromClassName} from 'react-native-fontawesome';
import VideoSlider from './VideoSlider';


const HomeScreen = ({route,navigation}) => {
  return (
    <View>
      <Button title='Tap to Home' onPress={() => navigation.push("Home",{'id':100,'name':'lord Jesus'})}></Button>
      <Button title='Tap to Church Members' onPress={() => navigation.push("ChurchMembers",{'id':100,'name':'lord Jesus'})}></Button>
      <Button title='Tap to Donated Members' onPress={() => navigation.push("DonatedMembers",{'id':100,'name':'lord Jesus'})}></Button>
      <Button title='Tap to Admin Login' onPress={() => navigation.push("NormalLogin")}></Button>
      <Button title='Tap to Church/Community Images' onPress={() => navigation.push("ImageSlider",{'id':100,'name':'lord Jesus'})}></Button>
      <Button title='Tap to Join with Us' onPress={() => navigation.push("Saveprofile",{'id':100,'name':'lord Jesus'})}></Button>
      <Button title='Tap to Contribute/Donate' onPress={() => navigation.push("Donate",{'id':100,'name':'lord Jesus'})}></Button>
      <Button title='Tap to Prayer Videos' onPress={() => navigation.push("PrayerVideos",{'id':100,'name':'lord Jesus'})}></Button>
      <Button title='Tap to Scheduled Meetings' onPress={() => navigation.push("Meetings",{'id':100,'name':'lord Jesus'})}></Button>
      <Button title='Tap to About Us' onPress={() => navigation.push("About",{'id':100,'name':'lord Jesus'})}></Button>
      <VideoSlider />
    </View>
  )
}

export default HomeScreen;


//style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}
