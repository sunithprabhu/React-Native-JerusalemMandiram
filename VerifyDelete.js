import React from 'react';
import { Alert,SafeAreaView,Text,TextInput,StyleSheet, Dimensions,Button } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const {width,height} = Dimensions.get('screen');

const VerifyDelete = ({route}) => {

    const [p_number,setP_Number] = useState('')

    const {profile_number } = route.params;

    console.log("profile_number : " + profile_number);

    const navigation = useNavigation();

    const verifyProfile = () => {

        if(profile_number === p_number)
        {
            console.log("Entered into the condition both satisfies");
            axios.delete("https://spring-rest-api-prayer-service-8v.azuremicroservices.io/api/v1/delete-profile" + "/" + profile_number);
            Alert.alert("Succesfuly deleted your profile")
            navigation.navigate("Home");
        }else{
            Alert.alert("Sorry! dont have Authorization to delete this profile.");
            navigation.push("ChurchMembers");
        }
    }
  return (
    <SafeAreaView>
        <Text style={styles.lable}>
        Profile Number : 
        </Text>
        <TextInput
        placeholder='Enter your profile number'
        style={styles.input}
        onChangeText={text => setP_Number(text)
        }
      />
      <Text>
      {'\n'}
      </Text>
      <Text>
      <Button title='Verify' onPress={verifyProfile} style={styles.button} />
      </Text>
    </SafeAreaView>
  )
}

export default VerifyDelete;

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
