import React from 'react'
import { View,FlatList,Text } from 'react-native'
import SlideItem from './SlideItem'
import { useEffect,useState } from 'react'
import axios from 'axios'

const Slider = ({navigation}) => {

    const [video1,setVideo1] = useState([]);

    useEffect(() => {
        axios.get("https://spring-rest-api-prayer-service-8v.azuremicroservices.io/api/v1/getImageBlobs")
        .then((response) => {
            setVideo1(response.data);
        })
    },[])

    console.log("video1 " + JSON.stringify(video1))
  return (
    
    <View>
        <FlatList 
        data={video1}
        renderItem={({item}) => <SlideItem item={item}/>}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment='center'
        
        
        />
    </View>
  )
}

export default Slider
