import React, { Component, useState } from 'react';
import axios from 'axios';
import { Card, DataTable,Title } from 'react-native-paper';
import { Alert, Dimensions, SafeAreaView,ScrollView,StyleSheet,Text,View } from 'react-native';
import { useEffect} from 'react';

const {width,height} = Dimensions.get('screen');

const GetMembers  = ({navigation}) =>  {
    
    const [members,setMembers] = useState([]);

    useEffect(() => {
        axios.get("https://spring-rest-api-prayer-service-8v.azuremicroservices.io/api/v1/believers")
        .then((response) => {
            setMembers(response.data);
        })
    },[])

    return (
        <SafeAreaView>
                    <Card>
                    <Card.Content>
                                <Title>Hello</Title>
                            </Card.Content>
                            <Card.Content>
                                <Title>Buddy</Title>
                            </Card.Content>
                            <Card.Cover source={ {uri : 'https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png'}} />
                            <Card.Content>
                                <Title>How</Title>
                            </Card.Content>
                            <Card.Content>
                                <Title>Do you do</Title>
                            </Card.Content> 
                    </Card> 
                
        </SafeAreaView>
        
    )
  }
export default GetMembers;

  const styles = StyleSheet.create({
    container: {
      alignContent: 'center',
      margin: 37,
      width : width-100,
    },
  });