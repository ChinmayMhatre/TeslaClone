import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles.js'

import StyledButton from '../StyledButton/index.js'

const CarItem = ({title,subtitle, image}) => {
    return (
        <View style= {styles.carContainer}>
        <ImageBackground
        source={image}
        style ={styles.image}
        />
          <View style = {styles.titles}>
              <Text style = {styles.title}>
                {title}
              </Text>
              <Text style = {styles.subtitle}>
                {subtitle}
              </Text>
          </View>
          <View style={styles.buttonContainer}>
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
          

      </View>   
    )
}

export default CarItem
