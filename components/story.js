import { View, Text, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const Story = () => {
  return (
    <View className="m-2 flex ">
      <LinearGradient
      className="rounded-full relative "
      start={{ x: 0,  y: 0 }} end={{ x: 1, y: 0 }}
        // Background Linear Gradient
        colors={['rgb(207,0,193)', 'rgb(229,47,53)' ,'rgb(229,47,53)']}
        style={{ borderRadius: 30 , borderWidth: 4 ,padding : 3 , height : 85, width : 85 , flex :1 }}
      >
      
        <Image className=" rounded-full left-[1]  "   source={{uri : 'https://i.pravatar.cc/300'}}  style={{  height: 70, width: 70   }}  resizeMode='contain' />
                
        
        
    
      </LinearGradient> 
    
    </View>
  )
}

export default Story