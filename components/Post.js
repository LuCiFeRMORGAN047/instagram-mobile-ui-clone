import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Post = () => {
  const [isLiked , setIsLiked] = useState(false)
  return (
    <View className="  w-full bg-black pt-5 ">
      <View className="flex flex-row  items-center  justify-between pl-2 pt-2 pr-2 ">
        <View className="h-[45] flex flex-row items-center gap-x-1 ">
        <Image className=" h-[35] w-[35] rounded-full "  source={{uri : 'https://pbs.twimg.com/media/FQ7KxCVXIAMILRB.jpg'} }    resizeMode='contain' />
        <Text className="text-white text-lg font-semibold"> Cristiano </Text>
        </View>
        <Feather name="more-vertical" size={25} color="white" />
      </View>
      <Image className="w-full h-[350] " resizeMode='contain' source={{uri : 'https://w0.peakpx.com/wallpaper/529/982/HD-wallpaper-ronaldo-cristiano.jpg'} }  />
    <View className="flex flex-row items-center justify-between pr-4 pl-2 " style={{  }}>
<View className="flex-row gap-x-5">
{isLiked ? <AntDesign name="heart" size={25} color="#FD1D1D" onPress={()=>{setIsLiked(false)}} /> : <AntDesign name="hearto" size={25} color="white" onPress={()=>{setIsLiked(true)}} />}
<FontAwesome name="comment-o" size={25} color="white" />
<Feather name="send" size={25} color="white" />
</View>

<Ionicons name="ios-save-outline" size={25}   color="white" />

    </View>
    <View style={{gap: 2 }} className="pl-2 mt-3 flex ">
    <Text className="text-white  text-md font-semibold">95 Like</Text>
    <Text className="text-white  text-md font-semibold">Cristiano .</Text>
    
    </View>
    <Text className="text-neutral-400 font-light pl-2 tracking-widest text-md " >See 2 comments</Text>
    </View>
  )
}

export default Post