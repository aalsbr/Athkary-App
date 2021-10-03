import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/colors";
 import AppNotify from "../screens/Settings/AppNotify";
import AboutScreen from "../screens/Settings/AboutScreen";

const Stack =createStackNavigator();

const SettingsNav = () => (
  <Stack.Navigator 
  >
  <Stack.Screen name="setting" component={AppNotify}  options={{title:"الاعدادت", 
  headerStyle:{backgroundColor:colors.barcollor},
   headerTitleStyle:{fontSize:22,color:colors.white},
   headerTintColor:colors.lightblue}} />
  <Stack.Screen name="About" component={AboutScreen}  options={{title:"عن التطبيق", 
  headerStyle:{backgroundColor:colors.barcollor},
   headerTitleStyle:{fontSize:22,color:colors.white},
   headerTintColor:colors.lightblue}} />
  </Stack.Navigator>
  
  
);
export default SettingsNav;