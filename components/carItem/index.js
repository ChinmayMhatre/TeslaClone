import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles.js'

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
      </View>   
    )
}

export default CarItem
