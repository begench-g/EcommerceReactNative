import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import  Icon  from "react-native-vector-icons/Feather";

const Card =()=>{
    return (
        <View style={styles.container}>
            <View style={styles.imagePart}>
                <Icon name="heart" size={22} style={styles.icon}/>
                <Image source={require('../assets/meal1.png')}/>
            </View>
            <Text style={styles.title}>Honey lime combo</Text>
            <View style={styles.sellContainer}>
                <Text>$2000</Text>
                <Icon name="plus"/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:152,
        height:183,
        backgroundColor:'#E5E5E5',
        borderRadius:16,
        padding:16
    },
    imagePart:{
        height:'60%',
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        alignSelf:'flex-end'
    },
    title:{
        fontSize:16,
        letterSpacing:-1,
        marginTop:13
    },
    sellContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    }
})

export default Card
