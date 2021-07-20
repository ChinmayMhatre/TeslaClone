import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles.js'

import StyledButton from '../StyledButton/index.js'

const CarItem = () => {
    return (
        <View style= {styles.carContainer}>
        <ImageBackground
        source={require("../../assets/ModelX.jpeg")}
        style ={styles.image}
        />
          <View style = {styles.titles}>
              <Text style = {styles.title}>
                Model S
              </Text>
              <Text style = {styles.subtitle}>
                Starting at a really high amount
              </Text>
          </View>
          <StyledButton
           type = "primary" 
           title="custom order"
           onPress={()=>{
            }}
            />
          <StyledButton
           type = "secondary" 
           title="existing inventory"
           onPress={()=>{
            }}
            />

      </View>   
    )
}

export default CarItem
