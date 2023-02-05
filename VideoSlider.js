import React from 'react'
import { View,FlatList,Text } from 'react-native'
import SlideItem from './SlideItem'
import { useEffect,useState } from 'react'
import axios from 'axios'
import VideoSlideItem from './VideoSlideItem'

const VideoSlider = ({navigation}) => {

    const [video1,setVideo1] = useState([]);

    useEffect(() => {
        axios.get("https://spring-rest-api-prayer-service-8v.azuremicroservices.io/api/v1/getVideoBlobs")
        .then((response) => {
            setVideo1(response.data);
        })
    },[])

    console.log("video1 " + JSON.stringify(video1))
  return (
    
    <View>
        <FlatList 
        data={video1}
        renderItem={({item}) => <VideoSlideItem item={item}/>}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment='center'
        
        
        />
    </View>
  )
}

export default VideoSlider;
