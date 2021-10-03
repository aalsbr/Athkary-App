import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

function LocationName({City,District,Street}) {
  return (
      <>
    <View style={styles.container}>
    <Text style={styles.text}>{City} - {District}  </Text>

    </View>
    <View style={styles.iconcontainer}>
    <Entypo name="location" size={35} color="#65878f" />

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
      position:'absolute',
      top:"17%",
      right:"33%",

     
  },
  iconcontainer:{
    position:'absolute',
    top:"10%",
    right:"20%",
  },
  text:{
      fontSize:15,
      fontWeight:"600",
      color:"#6b6b6b",
  }
  
});

export default LocationName;