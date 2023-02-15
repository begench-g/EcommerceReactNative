import React from "react";
import { Image, View, Text, Button, TouchableOpacity } from "react-native";
import WelcomeImage1 from "./WelcomImage1";
const WelcomeScreen = () => {
    return(
        <>
        <View style={{height:'57%',backgroundColor:'#FFA451',alignItems:'center',justifyContent:'center'}}>
             <Image source={require('../assets/fruit-drops.png')} />
            <Image source={require('../assets/imgbin-basket.png')} />
        </View>
        <View style={{padding:24}}>
            <Text style={{fontSize:20, fontWeight:"500", marginTop:46, alignSelf:'center'}}>Get The Freshest Fruit Salad Combo</Text>
            <Text style={{fontSize:16, marginTop:8}}>We deliver the best and freshest fruit salad in town. Order for a combo today!!!</Text>
            <TouchableOpacity
        //   onPress={() => navigate('HomeScreen')}
        style={{backgroundColor:'#FFA451',paddingHorizontal:54,paddingVertical:14,alignItems:'center',marginTop:80,borderRadius:10}}
        >
          <Text style={{color:'white',fontSize:16}}>Let’s Continue</Text>
        </TouchableOpacity>
        </View>
        </>
        
    )
}

export default WelcomeScreen