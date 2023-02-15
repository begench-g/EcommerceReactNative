import React from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";
import  Icon  from 'react-native-vector-icons/Feather'
const SearchInput = () => {

    return(
        <View style={{display:'flex',flexDirection:'row',marginTop:24,alignItems:'center'}}>
            <View style={styles.container}>
                <Icon name="search" size={20} color={"black"}/> 
                <TextInput style={styles.search} placeholder={'Search for fruit salad combos'}/>
            </View>
        <Image source={require('../assets/filter.png')} style={{marginLeft:15}}/>
        </View>
        
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#F3F4F9',
        padding:18,
        borderRadius:16,
        width:'80%',
        display:'flex',
        flexDirection:'row',
    },
    search:{
        // backgroundColor:'#F3F4F9',
        paddingLeft:10,
        // borderRadius:16,
        // width:'80%'
    }
})

export default SearchInput;