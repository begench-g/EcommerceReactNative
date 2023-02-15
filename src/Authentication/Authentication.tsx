import React from "react";
import { View,Image, Text,TouchableOpacity, TextInput } from "react-native";
const AuthScreen = () => {
    return(
        <>
        <View style={{height:'57%',backgroundColor:'#FFA451',alignItems:'center',justifyContent:'center'}}>
             <Image source={require('../assets/fruit-drops.png')} />
            <Image source={require('../assets/kisspng-fruit.png')} />
        </View>
        <View style={{padding:24}}>
            <Text style={{marginTop:25}}>What is your firstname?</Text>
            <TextInput placeholder="john" style={{backgroundColor:'#F3F1F1',padding:13,borderRadius:10,marginTop:16}}/>
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

export default AuthScreen