import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import React from "react";


const _layout = () => {
   
  return (
   <Tabs screenOptions={{tabBarStyle : {backgroundColor : '#121212'   , borderColor : '#121212' } , tabBarShowLabel : false   }}>
  
    <Tabs.Screen name="home" options={{ tabBarIcon: () => <AntDesign name="home" size={35} color="white" /> , headerShown : false  }   }/>
    <Tabs.Screen name="profile" options={{ tabBarIcon: () => <Image className="h-10 w-10 rounded-full" resizeMode="contain"  source={{uri : 'https://pbs.twimg.com/media/FQ7KxCVXIAMILRB.jpg'}}  />}} />
   </Tabs>
  );
};

export default _layout;
