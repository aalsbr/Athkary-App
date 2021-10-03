import React from 'react';
import { View, StyleSheet,Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import colors from '../config/colors';

function AppAboutContact({about,iconname,backgroundColor,onpress}) {
  return (
    <TouchableOpacity onPress={onpress} activeOpacity={0.9}>
    <View style={styles.container}>

        <View style={styles.textcontainer}>
        <Text style={styles.Text}>{about} </Text>
        </View>
        <View style={[styles.iconcontier,{backgroundColor:backgroundColor}]}>
        <MaterialCommunityIcons name={iconname} size={40} color={colors.white} />
        </View>

    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:160,
    borderRadius:5,
    height:80,
    marginHorizontal:"3.5%",
  },
  iconcontier:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:7,
    height:"70%",
    width:"13%",
    backgroundColor:colors.danger,
    position:'absolute',
    left:'5%',
  },
  textcontainer:{
    position:'absolute',
    top:"29%",
    right:'5%',
      },

    Text:{
      fontSize:18,
      fontWeight:'800',
      color:colors.white,
    }
});

export default AppAboutContact;