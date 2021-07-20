import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    carContainer:{
      width:"100%",
      height:"100%"
    },
    titles:{
      marginTop:"30%",
      width:"100%",
      alignItems:'center',
    },
    title:{
      fontSize:40,
      fontWeight:"600"
    },
    subtitle:{
      fontSize:16,
      width:"40%",
      textAlign:'center',
      color:"#5c5e62"
    },
    image:{
      width:"100%",
      height:"100%",
      resizeMode:"cover",
      position:"absolute"
    },
    buttonContainer:{
      width:"100%",
      position:"absolute",
      bottom:50
    }
  });

  export default styles