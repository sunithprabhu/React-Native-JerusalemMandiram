import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import RazorpayIntegration from './RazorpayIntegration';
import axios from 'axios';
import { Card } from 'react-native-paper';
import SaveForm from './SaveForm';
import Slider from './Slider';
import VideoSlider from './VideoSlider';
import Payment from './Payment';
import CreateCard from './CreateCard';
import GetMembers from './GetMembers';
import GetProfileSlider from './GetProfilesSlider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-navigation';
import HomeScreen from './HomeScreen';
import AboutUs from './AboutUs';
import Login from './Login';
import { Alert } from 'react-native';
import VerifyUpdate from './VerifyUpdate';
import UpdateProfile from './UpdateProfile';
import VerifyDelete from './VerifyDelete';
import AdminDashboard from './AdminDashboard';
import NormalLogin from './NormalLogin';
import WeeklySchedule from './WeeklySchedule';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{title:'   Jerusalem Mandiram, Gurazala',headerStyle:{backgroundColor:'yellow'},headerTitleAlign:'center',headerBlurEffect:'extraLight'}} />
      <Stack.Screen name="About" component={AboutUs} options={{title:'About Us',headerStyle:{backgroundColor:'yellow'},headerTitleAlign:'center',headerBlurEffect:'extraLight'}}/>
      <Stack.Screen name="Login" component={Login} options={{title:'Welcome Admin',headerStyle:{backgroundColor:'yellow'},headerTitleAlign:'center',headerBlurEffect:'extraLight'}}></Stack.Screen>
      <Stack.Screen name="ChurchMembers" component={GetProfileSlider} options={{title:'Church Members',headerStyle:{backgroundColor:'yellow'},headerTitleAlign:'center',headerBlurEffect:'extraLight'}} />
      <Stack.Screen name="DonatedMembers" component={Login} options={{title:'Donated Persons',headerStyle:{backgroundColor:'yellow'},headerTitleAlign:'center',headerBlurEffect:'extraLight'}} />
      <Stack.Screen name="ImageSlider" component={Slider} options={{title:'Gallery',headerStyle:{backgroundColor:'yellow'},headerTitleAlign:'center',headerBlurEffect:'extraLight'}} />
      <Stack.Screen name="Saveprofile" component={SaveForm} options={{title:'Profile Add',headerStyle:{backgroundColor:'yellow'},headerTitleAlign:'center',headerBlurEffect:'extraLight'}} />
      <Stack.Screen name="Donate" component={Payment} options={{title:'Donation',headerStyle:{backgroundColor:'yellow'},headerTitleAlign:'center',headerBlurEffect:'extraLight'}} />
      <Stack.Screen name="PrayerVideos" component={VideoSlider} options={{title:'Video Gallery',headerStyle:{backgroundColor:'yellow'},headerTitleAlign:'center',headerBlurEffect:'extraLight'}} />
      <Stack.Screen name="Meetings" component={Login} options={{title:'Weekly Prayer Meetings',headerStyle:{backgroundColor:'yellow'},headerTitleAlign:'center',headerBlurEffect:'extraLight'}} />
      <Stack.Screen name="VerifyUpdate" component={VerifyUpdate} options={{title:'Weekly Prayer Meetings',headerStyle:{backgroundColor:'yellow'},headerTitleAlign:'center',headerBlurEffect:'extraLight'}} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{title:'Weekly Prayer Meetings',headerStyle:{backgroundColor:'yellow'},headerTitleAlign:'center',headerBlurEffect:'extraLight'}} />
      <Stack.Screen name="VerifyDelete" component={VerifyDelete} options={{title:'Weekly Prayer Meetings',headerStyle:{backgroundColor:'yellow'},headerTitleAlign:'center',headerBlurEffect:'extraLight'}} />
      <Stack.Screen name="adminDashboard" component={AdminDashboard} options={{title:'Weekly Prayer Meetings',headerStyle:{backgroundColor:'yellow'},headerTitleAlign:'center',headerBlurEffect:'extraLight'}} />
      <Stack.Screen name="NormalLogin" component={NormalLogin} options={{title:'Weekly Prayer Meetings',headerStyle:{backgroundColor:'yellow'},headerTitleAlign:'center',headerBlurEffect:'extraLight'}} />
      <Stack.Screen name="make-schedule" component={WeeklySchedule} options={{title:'Weekly Prayer Meetings',headerStyle:{backgroundColor:'yellow'},headerTitleAlign:'center',headerBlurEffect:'extraLight'}} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create(
  {
    container : {
      flex:1,
      alignItems:'center',
      alignContent:'center',
      backgroundColor:'white'
    },
  }
)
