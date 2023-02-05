import React, { Component } from 'react';
import { Button,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card,Title } from 'react-native-paper';

const AdminDashboard = ({route}) => {

    const navigation = useNavigation();

    return (

        <Card style={Styles.container}>
        <Card.Content>
			<Title>Update weekly prayer meetings</Title>
		</Card.Content>
		<Card.Actions>
            <Button title='Weekly Scheduled Prayer Meetings' onPress={() => navigation.navigate('make-schedule')}></Button>
        </Card.Actions>
	    </Card>

    )
  }
  export default AdminDashboard;

  const Styles = StyleSheet.create({
	container :{
		alignContent:'center',
		margin:37
	}
})