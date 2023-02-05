import React, { Component } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Dimensions, ScrollView, TextInput } from 'react-native';
import { SafeAreaView,Text,View,StyleSheet,Alert,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  DateTimePickerAndroid from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';

const {width,height} = Dimensions.get('screen');

const WeeklySchedule = () => {
     
    const [dayName,setDayName] = useState('');
    const [scheduleDetails,setScheduleDetails] = useState('');
   // const [date,setDate] = useState(new Date());
    const navigation = useNavigation();
    const [loading,setLoading] = useState(false);
    const [displayDate] = useState(true);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const showDatepicker = () => {
        showMode('date');
      };

      const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
      };

      const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
      //  setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setShow(false);
      };

    const addSchedule = () => {
        setLoading(true);
        let details = {"dayName" : dayName,"scheduleDetails" : scheduleDetails,"date": date};
        console.log("details : " + JSON.stringify(details));
        axios.post("https://spring-rest-api-prayer-service-8v.azuremicroservices.io/api/v1/schedule",JSON.stringify(details),{headers :{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        }})
        .then((res) => {
            Alert.alert("details uploaded succesfuly!!");
            navigation.navigate("adminDashboard");
            
        }).catch((error) => {
            Alert.alert("details not saved!! " + error);
            navigation.navigate(this);
           
        })
    }

    return (
        <ScrollView>
          <View style={styles.constainer}>
          <Text style={{color:'red',fontSize:30,fontWeight:'bold'}}>
          Week Schedule Prayer Meetings update
          </Text>
        <Text>
         {'\n'}
        </Text>
        <Text style={styles.lable}>
        Day_Name: 
        </Text>
        <TextInput
        placeholder='#########'
        style={styles.input}
        onChangeText={dayName => setDayName(dayName)
        }
      />
      <Text>
      {'\n'}
      </Text>
       <Text style={styles.lable}>
       Schedule_Details 
        </Text>
        <TextInput
        multiline={true}
        numberOfLines={4}
        placeholder='###########'
        style={styles.input}
        onChangeText={details => setScheduleDetails(details) 
        }
      />
      <Text>
      {'\n'}
      </Text>
        <Text>
        <Button onPress={showDatepicker} title="Pick the Date!" />
        </Text>
        {
            show && <DateTimePickerAndroid 
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            />
        }
      <Text>
      {'\n'}
      </Text>
      {
        !loading && (
        <Button title='Submit' onPress={addSchedule} style={styles.button} />)
      }
      {
        loading && (
        <Button title='Processing' onPress={addSchedule} style={styles.button} disabled />)
      }
      <Text>
      {'\n'}
      </Text>
      <Button title='Cancel' onPress={() => console.log(user)} style={styles.button} />
      <Text>
      {'\n'}
      </Text>
    </View>
    </ScrollView>
    )   
}

export default WeeklySchedule;

const styles = StyleSheet.create(
    {
        constainer : {
            marginLeft : 20,
            marginTop: 20,
            paddingTop:50,
            height:width+200,
            width:width-30,
            backgroundColor: "transparent"

        },

        lable : {
            
              fontSize : 20,
              fontWeight : 'bold',

        },
        input : {
            width:width-50,
            borderColor : 'blue',
            borderWidth:1,
            borderRadius : 10,
            padding : 10,
            paddingBottom: 20,
            backgroundColor: 'white',
            fontWeight:'bold',
            fontSize:20,
            color:'blue'
            
        },
        button: {
            width:width+150
          },
          datePickerStyle: {
            width: 200,
            marginTop: 20,
          },
          datePicker: {
            width: 320,
            height: 260,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          },
    }
)