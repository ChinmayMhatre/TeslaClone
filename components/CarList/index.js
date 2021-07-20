import React from 'react'
import { View, Text, FlatList,Dimensions } from 'react-native'
import CarItem from '../carItem'
import cars from './cars'
import styles from './styles'
const CarList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item})=>(
                    <CarItem
                    key = {item.name}
                    title = {item.name}
                    subtitle ={item.tagline}
                    image = {item.image}
                    />
                )}
                snapToAlignment={"start"}
                decelerationRate="fast"
                snapToInterval={Dimensions.get("window").height + 40}
                showsVerticalScrollIndicator={false}    

            />
        </View>
    )
}

export default CarList
