import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Night from "../screens/Home/Night";
import Home from "../screens/Home/Home";
import colors from "../config/colors";
import Morning from "../screens/Home/Morning";
import WakeUp from "../screens/Home/WakeUp"
import Sleep from "../screens/Home/Sleep";
import Tsabeh from "../screens/Home/Tsabeh";
import Athkar_After from "../screens/Home/Athkar_After";
import Alkhf from "../screens/Home/Alkhf";
import Fadl from "../screens/Home/Fadl";
import { View, StyleSheet,Text, TouchableOpacity,Share } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import AboutHome from "../screens/Home/AboutHome";
import QuaranParghraph from "../compnent/QuaranParghraph";




const Stack =createStackNavigator();

const FeedNavigator = ({navigation}) => (
  <Stack.Navigator 
  
  >
  
  <Stack.Screen name="Home" component={Home}  options={{title:"الأذكار", 
  headerLeft: () => (
    <TouchableOpacity 
      onPress={() => Share.share({
        message: '{وَذَكِّرْ فَإِنَّ ٱلذِّكْرَىٰ تَنفَعُ ٱلْمُؤْمِنِينَ }           تطبيق الذكر اليومي  لمساعدة المسلمين على قراءة الأذكار و الأدعية بما تشتمل عليه من احاديث و ايات من القرآن الكريم بالاضافة الى تسابيح واوقات صلاة',
        url: 'https://apps.apple.com/us/app/id1564606644',
        title: 'الذكر اليومي '})  }
    >
           <View style={styles.container}>
             <View  >
            <MaterialCommunityIcons name="export-variant" size={32} color={colors.white} />
             </View>
             </View>
      </TouchableOpacity>
      

  ),
  headerRight:()=>(
    <TouchableOpacity 
     onPress={() => {navigation.navigate('AboutHome')} }
  >
         <View style={styles.container2}>
           <View  >
          <MaterialCommunityIcons name="information-variant" size={32} color={colors.white} />
           </View>
           </View>
    </TouchableOpacity>
  ),
  
  headerStyle:{backgroundColor:colors.barcollor},
   headerTitleStyle:{fontSize:22,color:colors.white},
   headerTintColor:colors.lightblue}} />
  <Stack.Screen name="Morning" component={Morning} 
  options={{title:"أذكار الصباح", 
  headerStyle:{backgroundColor:colors.barcollor},
   headerTitleStyle:{fontSize:22,color:colors.white},
   headerTintColor:colors.lightblue}} />
  <Stack.Screen name="Night" component={Night} 
  options={{title:"أذكار المساء", 
  headerStyle:{backgroundColor:colors.barcollor},
   headerTitleStyle:{fontSize:22,color:colors.white},
   headerTintColor:colors.lightblue}}/>
  <Stack.Screen name="Wake" component={WakeUp} options={{title:"أذكار الاستيقاظ", 
  headerStyle:{backgroundColor:colors.barcollor},
   headerTitleStyle:{fontSize:22,color:colors.white},
   headerTintColor:colors.lightblue}}/>
  <Stack.Screen name="Sleep" component={Sleep} options={{title:"أذكار النوم", 
  headerStyle:{backgroundColor:colors.barcollor},
   headerTitleStyle:{fontSize:22,color:colors.white},
   headerTintColor:colors.lightblue}}/>
  <Stack.Screen name="Tsabeh" component={Tsabeh} options={{title:"تسابيح", 
   headerStyle:{backgroundColor:colors.barcollor},
   headerTitleStyle:{fontSize:22,color:colors.white},
   headerTintColor:colors.lightblue}}/>
    <Stack.Screen name="Athkar_After" component={Athkar_After} options={{title:"الأذكار بعد الصلاة", 
   headerStyle:{backgroundColor:colors.barcollor},
   headerTitleStyle:{fontSize:22,color:colors.white},
   headerTintColor:colors.lightblue}}/>
     <Stack.Screen name="Alkhf" component={Alkhf} options={{title:"القرآن الكريم", 
   headerStyle:{backgroundColor:colors.barcollor},
   headerTitleStyle:{fontSize:22,color:colors.white},
   headerTintColor:colors.lightblue}}/>

   <Stack.Screen name="QuaranParghraph" component={QuaranParghraph} options={{
   headerStyle:{backgroundColor:colors.barcollor},
   headerTitleStyle:{fontSize:22,color:colors.white},
   headerTintColor:colors.lightblue}}/>
   
      <Stack.Screen name="Fadl" component={Fadl} options={{title:"فضل الأذكار ", 
   headerStyle:{backgroundColor:colors.barcollor},
   headerTitleStyle:{fontSize:22,color:colors.white},
   headerTintColor:colors.lightblue}}/>
     <Stack.Screen name="AboutHome" component={AboutHome}  options={{title:"عن التطبيق", 
  headerStyle:{backgroundColor:colors.barcollor},
   headerTitleStyle:{fontSize:22,color:colors.white},
   headerTintColor:colors.lightblue}} />
 

  </Stack.Navigator>
  
);
const styles = StyleSheet.create({
  container: {
    left:"50%",

  },
  container2: {
    right:"50%",

  },
});
export default FeedNavigator;