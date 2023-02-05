import React from 'react'
import { View,Text,Dimensions, FlatList, SafeAreaView } from 'react-native'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Image} from 'react-native';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { Video } from 'expo-av';
import { Card,Paragraph,Title } from 'react-native-paper';
import { Button } from 'react-native';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const {width,height} = Dimensions.get('screen');

const ProfileSlideItem = ({item,route}) => {

    console.log("Data Items : " + JSON.stringify({item,navigation,route}));

    const navigation = useNavigation();

return (
    
    <SafeAreaView >  
        <ScrollView>  
        <Card style={styles.container}>
                    <Card.Content key={item.profileNumber}>
                                <Paragraph><Title>Name</Title> : {item.believerName}</Paragraph>
                                <Paragraph><Title>Location</Title> : {item.believerLocation}</Paragraph>
                                <Paragraph><Title>Phone</Title> : {item.believerPhone}</Paragraph>
                                <Text>
                                <Button title="Update" onPress={() => navigation.navigate("VerifyUpdate",{"profile_number":item.profileNumber})}></Button>
                                <Button title="Delete" onPress={() => navigation.navigate("VerifyDelete",{"profile_number":item.profileNumber})}></Button>
                                </Text>
                    </Card.Content>
                    </Card> 
                    </ScrollView>
          
    </SafeAreaView>
    
  )
}

export default ProfileSlideItem

const styles = StyleSheet.create({

    container : {    
         marginTop:30,
        alignContent: 'center',
         margin: 37,
         width : width-100,
        
    },

    image: {
        flex : 1,
        justifyContent : 'center'
    }
})