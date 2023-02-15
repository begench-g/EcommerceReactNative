import React from "react";
import { Text, View } from "react-native";
import Card from "./Card";
import Menu from "./Menu";
import Recommended from "./Recommended";
import RecommendedText from "./RecommendedText";
import SearchInput from "./SearchInput";
import TextMenu from "./TextContainer";

const HomeScreen =()=>{
    return (
        <View style={{padding:24,paddingTop:60}}>
        <Menu/>
        <TextMenu/>
        <SearchInput/>
        <RecommendedText/>
        <Recommended/>
        </View>
       
    )
}

export default HomeScreen;