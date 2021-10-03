import React from 'react';
import {  StyleSheet,Text,TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppButton({title, onPress, counter,style}) {
  return (
    <> 
      
    <TouchableOpacity
      style={[styles.touchcontainer,style]}
      onPress={onPress}
    >
      <Text style={styles.counterText}>{title}  {counter}</Text>
    </TouchableOpacity>
   
    
  </>
  );
}

const styles = StyleSheet.create({
    //this is for التالي (Next) Button
   touchcontainer: {
    backgroundColor:colors.primary,   
    justifyContent: "center",
    alignItems:'center',
    borderRadius: 35,
    borderBottomRightRadius:250,
    borderBottomLeftRadius:25,
    padding:10,
     position:'absolute',
     bottom:"3%",
     right:"3%",
     width: "45%",
     height:60,
 
},
 //this is for the text inside the button 
  counterText: {
    color: colors.white,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
});


export default AppButton;