import React from 'react'
import { View,Text,Dimensions, FlatList } from 'react-native'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Image} from 'react-native';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { Video } from 'expo-av';

const {width,height} = Dimensions.get('screen');

const VideoSlideItem = ({item}) => {

    // const [video1,setVideo1] = useState([]);

    // useEffect(() => {
    //     axios.get("https://spring-rest-api-prayer-service-8v.azuremicroservices.io/api/v1/getImageBlobs")
    //     .then((response) => {
    //         setVideo1(response.data);
    //     })
    // },[])

    console.log("Data Items : " + JSON.stringify({item}))

return (
    
    <View style={styles.container}>     
         
     <Video source={{uri : item}} resizeMode='contain' useNativeControls style={styles.video}/>
          
    </View>
    
  )
}

export default VideoSlideItem

const styles = StyleSheet.create({

    container : {
        width,
        height,
        alignItems: 'center',
    },
    video : {
        width:412,
        height:412,
        flex : 0.4,
        
    }
})