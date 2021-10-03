import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../../config/colors';

function AboutScreen(props) {
  return (
    <View style={styles.container}>
        <View style={{margin:30,}}>
        <Text style={styles.text}> هذا التطبيق صدقة جارية لي ولوالدي ووالديهم وذريتهم 
وللمؤمنين والمؤمنات 
الأحياء منهم والأموات</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',   
      backgroundColor:'#363636', 
      
  },
  text:{
    fontSize:38,
    color:colors.white,
    textAlign:'center',
    fontWeight:'bold',
    fontFamily:'Arial'
  }

});

export default AboutScreen;