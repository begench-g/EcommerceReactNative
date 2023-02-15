import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Menu = () =>{
    return(
        <View style={styles.container}>
            <Image style={styles.menu} source={require('../assets/menu.png')}/>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:30,
        padding:20
    },
    menu:{
    }
})

export default Menu