import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/carItem/index';
import CarList from './components/CarList';

import ModelX from './assets/ModelX.jpeg'
import Model3 from './assets/Model3.jpeg'
import ModelS from './assets/ModelS.jpeg'
import ModelY from './assets/ModelY.jpeg'


export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto"/>
      <CarList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
