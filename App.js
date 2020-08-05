import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import NewShowScreen from "./src/screens/NewShow";
import ShowsScreen from "./src/screens/Shows";
import HomeScreen from "./src/screens/Home";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 


const TabNav = createBottomTabNavigator();
const TabBarstyles  = StyleSheet.create({
  viewStyle:{
  flexDirection:"row",
  justifyContent: "space-around"
  }

})

const TabBar = ({navigation, state})=>{
  
  return(
    <View style={TabBarStyles.viewStyle}>
      <>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <AntDesign name="home" size={30} 
          color={state.index===0?"blue":"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Shows")} >
          <Entypo name="folder-video" size={30} 
          color={state.index===1?"blue":"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("NewShow")} >
          <Entypo name="video" size={30} 
          color={state.index===2?"blue":"black"} />
        </TouchableOpacity>
      </>
    </View>
  )

}

function App(){
  return(
    <NavigationContainer>
      <TabNav.Navigator TabBar={props=><TabBar {...props}/>}>
        <TabNav.Screen name={"Home"} component={HomeScreen} />
        <TabNav.Screen name={"Shows"} component={ShowsScreen} />
        <TabNav.Screen name={"NewShow"} component={NewShowScreen} />
      </TabNav.Navigator>
    </NavigationContainer>
   );
}

export default App;
