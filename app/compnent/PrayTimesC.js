import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

function PrayTimesC({Time,Title,}) {
  return (
      
    <View style={[styles.container]}>
         <View style={{
           backgroundColor:160
           ,position:'absolute',width:"55%",
           height:"100%",
          borderTopLeftRadius:45,
          borderBottomLeftRadius:40,
          borderRadius:5,
          
             }}></View>
         <View style={{left:'10%',position:'absolute'}}>
         <Text style={styles.titlecontainer}>{Title}</Text>
         </View>
         <View style={{right:'8%',position:'absolute'}}>
         <Text style={styles.timecontainer}>{Time}</Text>
         </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
    
        container: {
          alignItems:'center',
          margin:"2%",
          backgroundColor:colors.whitetranspert,
          borderRadius:6,
          borderTopLeftRadius:15,
          borderColor:colors.medium,
          borderWidth:0.5 ,
          height:"40%",
          width:"95%",
          flexDirection:'row-reverse'
          
        },
      
      
      
        titlecontainer: {
          color: colors.white,
          fontSize: 24,
          fontWeight: "bold",
          textAlign:'right',
       
        },
        timecontainer: {
           
            color: colors.black,
            fontSize: 24,
            textAlign:'center',
            fontWeight: "bold",
         
          },
     
});

export default PrayTimesC;