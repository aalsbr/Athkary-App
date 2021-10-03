import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/colors";
import PrayHome from "../screens/PrayTimes/PrayTimes";




const Stack =createStackNavigator();

const PrayNav = () => (
  <Stack.Navigator 
  
  >
  <Stack.Screen name="PrayNav" component={PrayHome}  options={{title:"مواقيت الصلاة", 
  headerStyle:{backgroundColor:colors.barcollor},
   headerTitleStyle:{fontSize:22,color:colors.white},
   headerTintColor:colors.lightblue}} />
  </Stack.Navigator>
  
);
export default PrayNav;