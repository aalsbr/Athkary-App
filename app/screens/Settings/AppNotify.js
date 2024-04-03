import React, { useEffect, useState } from "react";
import { Share,View, StyleSheet, Text , ScrollView, Linking} from "react-native";
import colors from "../../config/colors";
import AppAboutContact from "../../compnent/AppAboutContact";

function AppNotify({ navigation }) {



  return (
    <View style={styles.container}>
     

       <View style={{ marginVertical: "10%" }}></View>
       <View style={styles.textcontainer2}>
        <Text style={styles.text}>حول</Text>
      </View>

      <AppAboutContact about="تقييم التطبيق "
        backgroundColor={colors.morning} 
        iconname="star"
        onpress={() =>Linking.openURL(`https://apps.apple.com/app/apple-store/id1564606644?action=write-review`)}
           />    
                 <View style={{backgroundColor:"#bababa",height:"0.08%", marginHorizontal:"3.5%",}}></View>

        
       <AppAboutContact about="مشاركة التطبيق" 
       backgroundColor={colors.sleep} 
       iconname="share"
      // i must change it after 
       onpress={()=>Share.share({
        message: '{وَذَكِّرْ فَإِنَّ ٱلذِّكْرَىٰ تَنفَعُ ٱلْمُؤْمِنِينَ }           تطبيق الذكر اليومي  لمساعدة المسلمين على قراءة الأذكار و الأدعية بما تشتمل عليه من احاديث و ايات من القرآن الكريم بالاضافة الى تسابيح واوقات صلاة',
        url: 'https://apps.apple.com/us/app/id1564606644',
        title: 'الذكر اليومي '
      })}/>   
             <View style={{backgroundColor:"#bababa",height:"0.08%", marginHorizontal:"3.5%",}}></View>

      <AppAboutContact about="تواصل معنا "
        backgroundColor={colors.wakeup} 
        iconname="email-edit"
        onpress={() => Linking.openURL('mailto:a.alsbr40@gmail.com?subject=بخصوص تطبيق الذكر اليومي') }
           />   
       <View style={{backgroundColor:"#bababa",height:"0.08%", marginHorizontal:"3.5%",}}></View>


       <View style={{backgroundColor:"#bababa",height:"0.05%", marginHorizontal:"3.5%",}}></View>
       <AppAboutContact about="عن التطبيق" 
      backgroundColor={colors.night} 
      iconname="information-variant"
      onpress={()=>navigation.navigate("About")}/>  
       <View style={{ marginVertical: "5%" }}></View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    
  },
  textcontainer: {
    position: "absolute",
    top: "9%",
    right: "4%",
  },
  textcontainer2: {
    position: "absolute",
    top: "8%",
    right: "4%",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AppNotify;
