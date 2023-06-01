import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Post from '../../components/Post';
import Story from '../../components/story';
import { Link, useRouter } from 'expo-router';
const home = () => {
  const router = useRouter();
  return (
    
  <SafeAreaView className="flex-1">

   
<View className="pt-2" style={{ backgroundColor: 'black' }}>
      <View className="  flex flex-row p-3 pt-5 items-center justify-between">
        <Image  source={require('../../assets/insta.png')} style={{  height: 50, width: 150 ,marginLeft : -5 }} resizeMode='center'/>
        <View>
       <View className="flex flex-row items-center gap-x-4  ">
       <AntDesign name="hearto" size={28} color="white" />
       
       <Feather name="send" size={28} color="white"  />
      
       </View>
        </View>
      </View>
    </View>
     <ScrollView className="flex-1 flex-grow  " style={{ backgroundColor: '#121212' }}>
    <FlatList  indicatorStyle='white' horizontal onScrollAnimationEnd={true}   className="  h-[100] bg-black  " data={["","" ,"","" ,""]} renderItem={({item}) => (<Story/>) }  />
    
      <Post />
      <Post />
      <Post />
    </ScrollView>
    </SafeAreaView>  
    
  )
}

export default home