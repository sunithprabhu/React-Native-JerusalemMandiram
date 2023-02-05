import React from 'react';
import { View,Text,Button,TextInput,SafeAreaView,StyleSheet,Dimensions,Alert } from 'react-native';
//import TextInputField from 'react-native-safe-area-context'
import { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


const {width,height} = Dimensions.get('screen');

const UpdateProfile = ({route}) => {

    const navigation = useNavigation();

    const {profile_number} = route.params;

    console.log("profile_number in Update page received: " + profile_number);

    const [user,setUser] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [profileNumber] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        axios.get("https://spring-rest-api-prayer-service-8v.azuremicroservices.io/api/v1/getProfile" + '/' + profile_number)
        .then((response) => {
            setUser(response.data.believerName);
            setAddress(response.data.believerLocation);
            setPhone(response.data.believerPhone);
        })
    },[])

     const updateProfile = () => {
        let profile = {believerName : user,believerPhone : phone,believerLocation : address};
        console.log(profile);
        axios.put("https://spring-rest-api-prayer-service-8v.azuremicroservices.io/api/v1/updateProfile" + '/' + profile_number,profile,{headers : {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }}).then((res) => {
            Alert.alert("Successfuly Update data!!")
            navigation.push("ChurchMembers");
        }).catch((error) => {
            Alert.alert("Something went wrong");
            navigation.push("UpdateProfile");
        })
       } 
    
       const cancel = () => {
        navigation.navigate("ChurchMembers");
        }
    
  return (
    <SafeAreaView style={styles.constainer}>
        <Text style={{color:'red',fontSize:30,fontWeight:'bold'}}>
        Authentication Got Succesffull, Update Your Profile
        </Text>
        <Text>
      {'\n'}
      </Text>
        <Text style={styles.lable}>
        Name : 
        </Text>
        <TextInput
        defaultValue={user}
        style={styles.input}
        onChangeText={text => setUser(text)
        }
      />
      <Text>
      {'\n'}
      </Text>
       <Text style={styles.lable}>
        Location : 
        </Text>
        <TextInput
        defaultValue={address}
        style={styles.input}
        onChangeText={address => setAddress(address)
        }
      />
      <Text>
      {'\n'}
      </Text>
       <Text style={styles.lable}>
        Phone No : 
        </Text>
        <TextInput
        defaultValue={phone}
        style={styles.input}
        onChangeText={phone => setPhone(phone)
        }
      />
      <Text>
      {'\n'}
      </Text>
      {
        !loading && (
        <Button title='Submit' onPress={updateProfile} style={styles.button} />)
      }
      {
        loading && (
        <Button title='Processing' onPress={updateProfile} style={styles.button} disabled />)
      }
      <Text>
      {'\n'}
      </Text>
      <Button title='Cancel' onPress={() => console.log(user)} style={styles.button} />
      <Text>
      {'\n'}
      </Text>
    </SafeAreaView>
  )
}

export default UpdateProfile;

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
    }
)
