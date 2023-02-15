import React from 'react'
import { View } from 'react-native'
import FruitHub from './FruitHub'
import Icon1 from './Icon1'
import Icon2 from './Icon2'
import Icon3 from './Icon3'
import Icon4 from './Icon4'

const SplashScreen = ()=>{
    return(
        <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width:'100%',
                        height:'100%'
                    }}> 
            <Icon4/>
            <Icon1/> 
            <View style={{display:'flex',flexDirection:'row'}}>
            <Icon2/>
            <View style={{left:10,top:-15}}><Icon3/></View>
            </View>
            <View style={{top:-90}}><FruitHub/></View>
            
           
        </View>
       
    )
}

export default SplashScreen