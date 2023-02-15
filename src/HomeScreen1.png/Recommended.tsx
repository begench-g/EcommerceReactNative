import React from "react";
import { View } from "react-native";
import Card from "./Card";

const Recommended = () =>{
    return (
        <View style={{flexDirection:"row",gap:23, flexWrap:'wrap', paddingTop:24}}>
             <Card/> 
             <Card/>
             
        </View>
      
        
    )
}

export default Recommended