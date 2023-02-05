import React from 'react';
import { View,Text,Button,TextInput,SafeAreaView,StyleSheet,Dimensions,Alert } from 'react-native';
//import TextInputField from 'react-native-safe-area-context'
import { useState } from 'react';
import axios from 'axios';


const {width,height} = Dimensions.get('screen');

const Login = ({navigation,route}) => {

    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [adminUsername] = useState('JerusalemMandiram');
    const [adminPassword] = useState('JerusalemMandiram@522415');
    const [loading,setLoading] = useState(false);
    const {profile_number} = route.params;
    console.log("Profile Number received in Login Form : " + profile_number);

    const login = () => {
            if(username === adminUsername && password === adminPassword)
            {
               navigation.navigate("adminDashboard");
            }else{
              navigation.navigate("Home");
             
            }
    } 

  return (
    <SafeAreaView style={styles.constainer}>
        <Text style={{color:'red',fontSize:30,fontWeight:'bold'}}>
        Admin Credentials!
        </Text>
        <Text>
      {'\n'}
      </Text>
        <Text style={styles.lable}>
        UserName : 
        </Text>
        <TextInput
        placeholder='username:'
        style={styles.input}
        onChangeText={text => setUserName(text)
        }
      />
      <Text>
      {'\n'}
      </Text>
       <Text style={styles.lable}>
        Password : 
        </Text>
        <TextInput
        secureTextEntry = {true}
        placeholder='password:'
        style={styles.input}
        onChangeText={password => setPassword(password)
        }
      />
      <Text>
      {'\n'}
      </Text>
      {
        !loading && (
        <Button title='Login' onPress={login} style={styles.button} />)
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

export default Login;

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
