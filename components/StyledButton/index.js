import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'


const StyledButton = ({type,title,onPress}) => {

    const background = type === "primary" ? "#171A20CC" : "#FFFFFFA6"
    const textbackground = type === "primary" ? "#FFFFFF" : "#171A20"
    return (
        <View style={styles.container}>
           <Pressable
            style={[styles.button, {backgroundColor:background}]}
            onPress={onPress}
           >
                <Text style={[styles.text,{color:textbackground}]}>{title}</Text>
           </Pressable>
        </View>
    )
}

export default StyledButton
