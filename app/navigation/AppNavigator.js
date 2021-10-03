import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons,Ionicons,FontAwesome5
} from "@expo/vector-icons";

import colors from '../config/colors';
import { SafeAreaView,StyleSheet } from 'react-native';
import PrayNav from './PrayNav';
import FeedNavigator from './FeedNavigator';
import SettingsNav from './SettingsNav'





const Tab = createBottomTabNavigator();

const AppNavigator = () => (
<SafeAreaView style={styles.container}>
 
  <Tab.Navigator
    tabBarOptions={{
      
      activeBackgroundColor: colors.barcollor,
      activeTintColor: colors.white,
      inactiveBackgroundColor: colors.barcollor,
      inactiveTintColor: colors.black,
    
      labelStyle:{
        fontSize:16,
        fontWeight:"bold",
        marginBottom:"1%",
        
      }
    }}
  >

<Tab.Screen
    name="الأذكار"
    component={FeedNavigator}
    options={{
      tabBarIcon: ({ size, color }) => (
        <Ionicons name="reader-sharp" size={size} color={color} />
      ),
    }}
    
    
  
  />
     
     <Tab.Screen
      name="مواقيت الصلاة"
      component={PrayNav}
      options={{
         tabBarIcon: ({ size, color }) => (
           <FontAwesome5 name="mosque" size={size} color={color} />
         ),
       }}
     />


      { <Tab.Screen
      name="الإعدادات"
      component={SettingsNav}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="settings" size={size} color={color} />
        ),
      }}
    /> }

     

  </Tab.Navigator>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.barcollor
  },
});
export default AppNavigator;
