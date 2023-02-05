import React from 'react'
import { View,Text,Dimensions, FlatList } from 'react-native'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Image} from 'react-native';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';

const {width,height} = Dimensions.get('screen');

const SlideItem = ({item}) => {

    // const [video1,setVideo1] = useState([]);

    // useEffect(() => {
    //     axios.get("https://spring-rest-api-prayer-service-8v.azuremicroservices.io/api/v1/getImageBlobs")
    //     .then((response) => {
    //         setVideo1(response.data);
    //     })
    // },[])

return (
    
    <View style={styles.container}>     
         
     <Image source={{uri : item}} resizeMode='contain' style={styles.image}/>
          
    </View>
    
  )
}

export default SlideItem

const styles = StyleSheet.create({

    container : {
        width,
        height,
        alignItems: 'center',
    },
    image : {
        width:412,
        height:412,
        flex : 0.6,
        marginTop:150
    }
})