import React from 'react';
import { View, StyleSheet, Switch,Text } from 'react-native';
import colors from "../config/colors";


function AppSwitch({toggleSwitch,isEnabled,title}) {
  return (
    <>
    <View style={styles.container}>
    <View style={styles.switchcontainer}>
   <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}  
      />
      </View>
      <View style={styles.textcontainer}>
     <Text style={styles.Text}>{title}</Text>
     </View>
    </View>
      <View style={{backgroundColor:"#bababa",height:"0.07%", marginHorizontal:"3.5%",}}></View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {

  flexDirection:'row',
  backgroundColor:160,
  borderRadius:5,
  height:60,
  marginHorizontal:"3.5%",
  },
  switchcontainer:{
    justifyContent:'center',
    paddingHorizontal:"5%"
   

  },
  textcontainer:{
  position:'absolute',
  top:"30%",
  right:'5%',
    
    
   
  
 
  },
  Text:{
    fontSize:20,
    fontWeight:'800',
    color:colors.black,
    

  }
});

export default AppSwitch;