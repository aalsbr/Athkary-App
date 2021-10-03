import React from 'react';
import { View, StyleSheet,TouchableOpacity,Text, Platform,Dimensions } from 'react-native';
import colors from '../config/colors';
import Icon from './Icon';


function HomeList1({title,onPress,iconname,backgroundColor="red"}) {

  return (

    <TouchableOpacity  onPress={onPress}>
    <View style={styles.container}>
    <View style={[styles.iconstyle,{backgroundColor:backgroundColor}]}></View>
    <Icon name={iconname} size={170}/>
        <Text style={styles.textcontainer}>{title}</Text>
       
    
    </View>
 
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  container: {
    justifyContent:'center',
    alignItems:'center',
    margin:"4.5%",
    backgroundColor: 180,
  marginHorizontal:
  Dimensions.get('window').width ===375 ? "4.5%":
  Dimensions.get('window').width ===390 ? "5.5%":
  Dimensions.get('window').width ===414 ? "7.5%": 
  Dimensions.get('window').width ===428 ? "8.5%":
  Dimensions.get('window').width ===768 ? "19%":
  Dimensions.get('window').width ===834 ? "20%":
  Dimensions.get('window').width ===1024 ? "22.5%":"2%",
    borderRadius: 50,
    borderBottomStartRadius:10,
    borderTopStartRadius:75,
    height:165,
    width:160,
    
  },



  textcontainer: {
    paddingTop:"55%",
    color: colors.white,
    fontSize: 26.5,
    textAlign: "center",
    fontWeight: "bold",
 
  },
  iconstyle:{
      backgroundColor:colors.white,
      position:'absolute',
      padding:20,
      paddingBottom:45,
      paddingLeft:120,
      paddingTop:50,
      borderRadius:20,
      borderBottomStartRadius:100,
      top:"0%",
      left:"13%",
      
      
  }
});

export default HomeList1;