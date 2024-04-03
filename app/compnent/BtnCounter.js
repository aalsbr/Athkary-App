import React from "react";
import { StyleSheet, TouchableOpacity, Text, View  } from "react-native";
import colors from "../config/colors";


function BtnCounter({ title, onPress, counter, requirednumber,pageNumber,numberofPages }) {
 
  return (
    <> 
      
      <TouchableOpacity
        style={[styles.touchcontainer, ]}
        onPress={onPress}  
      >
        <Text style={styles.counterText}>{title}  {counter}</Text>
      </TouchableOpacity>
     
      <View style={[styles.continer]}>
        <Text style={styles.counterText}>{requirednumber}</Text>
      </View>

      <View style={[styles.pageNumber]}>
        <Text style={styles.pageNumberText}>{pageNumber} / {numberofPages}</Text>
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  //Counter styles العداد 
  touchcontainer: {
    backgroundColor:100,
    justifyContent: "center",
    alignItems:'center',
    borderRadius: 25,
    padding: 10,
    width: 80,
    height:80,
    right:"2.1%",
    bottom:"14.7%",
    position:'absolute',
    shadowColor: "#000",
    shadowOffset: {
      width: 0, // Horizontal shadow offset
      height: 2, // Vertical shadow offset
    },
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow blur radius
    // Android Shadow
    elevation: 5, // Android elevation
},
//this is for Required Number 
  continer:{
    backgroundColor:"rgba(117, 2, 2,0.6)",
    justifyContent: "center",
    borderRadius: 30,
    padding: 15,
    bottom:"15%",
    left:"2.2%",
    position:'absolute',
    width: "40%",
  },
  //this is for the Text insaid Counter and Required Number of timee
  counterText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",

  },
  pageNumber:{
    backgroundColor:50,
    justifyContent: "center",
    alignItems:'center',
    borderRadius: 2,
    padding: 20,
    width: 80,
    height:20,
    right:"30%",
    flexDirection:'row',
    bottom:"15%",
    position:'absolute',
  },
  pageNumberText:{
    fontSize:20,
    fontWeight:"bold",
    color:colors.white,
    position:'absolute',

   
  },


});

export default BtnCounter;
