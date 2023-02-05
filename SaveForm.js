import React from 'react';
import { View,Text,Button,TextInput,SafeAreaView,StyleSheet,Dimensions,Alert } from 'react-native';
//import TextInputField from 'react-native-safe-area-context'
import { useState } from 'react';
import axios from 'axios';


const {width,height} = Dimensions.get('screen');

const SaveForm = ({navigation}) => {

    const [user,setUser] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [profileNumber] = useState(null);
    const [loading,setLoading] = useState(false);

    const addMember = () => {
        setLoading(true)
        if(user .trim == "" || !(user.match("^[A-Za-z\.\s]{3,25}$")))
        {
           Alert.alert("Name should not be empty also it should be atleast 3 chars");
           setLoading(false);
        }else if(address.trim == '' || !(address.match("^[A-Za-z\s]{3,45}$")))
             {
                  Alert.alert("Address should not be an empty also it should be atleast 3 chars");  
                  setLoading(false); 
             }else if(phone.trim == '' || !(phone.match("[0-9]{10}")))
             {
                  Alert.alert("Phone should not be an empty also it should be 10digits");
                  setLoading(false);
             } else {
                let member = {believerName : user,believerPhone : phone,believerLocation : address,profileNumber:profileNumber};
                console.log(JSON.stringify(member));
                return axios.post("https://spring-rest-api-prayer-service-8v.azuremicroservices.io/api/v1/believers",member,{headers : 
                    {'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                    }}).then((res) => {
                        Alert.alert("Please Save this 9 digit profile number : " + res.data);
                        setLoading(false);
                    }).catch((err) => {
                        Alert.alert((err));
                    })
                }       
    }  

  return (
    <SafeAreaView style={styles.constainer}>
        <Text style={{color:'red',fontSize:30,fontWeight:'bold'}}>
        Join our Holy Family :)
        </Text>
        <Text>
      {'\n'}
      </Text>
        <Text style={styles.lable}>
        Name : 
        </Text>
        <TextInput
        placeholder='Enter your name here'
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
        placeholder='Enter your address here'
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
        placeholder='Enter your phone number here'
        style={styles.input}
        onChangeText={phone => setPhone(phone)
        }
      />
      <Text>
      {'\n'}
      </Text>
      {
        !loading && (
        <Button title='Submit' onPress={addMember} style={styles.button} />)
      }
      {
        loading && (
        <Button title='Processing' onPress={addMember} style={styles.button} disabled />)
      }
      <Text>
      {'\n'}
      </Text>
      <Button title='Cancel' onPress={() => console.log(user)} style={styles.button} />
      <Text>
      {'\n'}
      </Text>
      
      {!loading && (
        <Text style={{color:'red',fontSize:20,fontWeight:'bold'}}>
       Welcome to our holy family Jerusalem Church, Gurazala(Palnadu Dist,522415)
      </Text>
       )} 

       {loading && (
        <Text style={{color:'red',fontSize:20,fontWeight:'bold', textAlign:'center'}}>
       Thank You :)
      </Text>
       )}
       
    </SafeAreaView>
  )
}

export default SaveForm;

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
