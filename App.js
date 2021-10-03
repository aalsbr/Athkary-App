import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import { Text } from "react-native";



export default function App() {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;  
  return (
      
      <NavigationContainer>
      <AppNavigator />
      </NavigationContainer>
     

  );
}


