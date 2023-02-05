import React from 'react';
import { View,Text, Button } from 'react-native';


const AboutUs = ({route,navigation}) => {
    const {id,name} = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      <Text>
        Id : {id}
      </Text>
      <Text>
        name : {name}
      </Text>
      <Text>
           <Button title='Go to Home Page' onPress={() => navigation.push("Login")}></Button>
      </Text>
    </View>
  )
}

export default AboutUs
