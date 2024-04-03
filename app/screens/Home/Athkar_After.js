import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  StyleSheet } from "react-native";
import * as Haptics from 'expo-haptics';

import AppButton from "../../compnent/AppButton";
import BtnCounter from "../../compnent/BtnCounter";
import PargraphText from "../../compnent/PargraphText";
import Screen from "../../compnent/Screen";

function Athkar_After(props) {
    const [text, seTtext] = useState(1);
    const [counter, setCounter] = useState(0);
    const [requirednumber, setRequirednumber] = useState("");
  
    const a1 = [
      "",
      "أَسْـتَغْفِرُ الله، أَسْـتَغْفِرُ الله، أَسْـتَغْفِرُ الله.  اللّهُـمَّ أَنْـتَ السَّلامُ ، وَمِـنْكَ السَّلام ، تَبارَكْتَ يا ذا الجَـلالِ وَالإِكْـرام .",
      "",
      "",
      "مرة"
  
    ];
    const a2 = [
        "",
        "لا إلهَ إلاّ اللّهُ وحدَهُ لا شريكَ لهُ، لهُ المُـلْكُ ولهُ الحَمْد، وهوَ على كلّ شَيءٍ قَدير، اللّهُـمَّ لا مانِعَ لِما أَعْطَـيْت، وَلا مُعْطِـيَ لِما مَنَـعْت، وَلا يَنْفَـعُ ذا الجَـدِّ مِنْـكَ الجَـد.",
        "",
        "",
        "مرة"
    ];
 
    const a3 = [
        "",
        "لا إلهَ إلاّ اللّه, وحدَهُ لا شريكَ لهُ، لهُ الملكُ ولهُ الحَمد، وهوَ على كلّ شيءٍ قدير، لا حَـوْلَ وَلا قـوَّةَ إِلاّ بِاللهِ، لا إلهَ إلاّ اللّـه، وَلا نَعْـبُـدُ إِلاّ إيّـاه, لَهُ النِّعْـمَةُ وَلَهُ الفَضْل وَلَهُ الثَّـناءُ الحَـسَن، لا إلهَ إلاّ اللّهُ مخْلِصـينَ لَـهُ الدِّينَ وَلَوْ كَـرِهَ الكـافِرون.",
        "",
        "",
        "مرة"
  
    ];
    const a4 = [
        "",
        "سُـبْحانَ اللهِ، والحَمْـدُ لله ، واللهُ أكْـبَر.",
        "",
        "",
        "ثلاث وثلاثون مرة"
  
    ];
    const a5 = [
        "",
        "لا إلهَ إلاّ اللّهُ وَحْـدَهُ لا شريكَ لهُ، لهُ الملكُ ولهُ الحَمْد، وهُوَ على كُلّ شَيءٍ قَـدير",
        "",
        "",
        "مرة"
    ];
    const a6 = [
        "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ",
        "{ اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. }",
        "[آية الكرسى - البقرة 255]. ",
        "",
        "مرة",
      ];
      const a7 = [
        "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
        "{ قل هو ٱلله أحد * ٱلله ٱلصمد * لم يلد ولم يولد * ولم يكن لهۥ كفوا أحدۢ. }",
        "",
        "ثلاث مرات بعد صلاتي الفجر والمغرب. ومرة بعد الصلوات الأخرى ",
        "ثلاث مرات",
      ];
      const a8 = [
        "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
        "{ قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ * مِن شَرِّ مَا خَلَقَ * وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ * وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ * وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ. }",
        "",
        "ثلاث مرات بعد صلاتي الفجر والمغرب. ومرة بعد الصلوات الأخرى ",
        "ثلاث مرات",
      ];
      const a9 = [
        "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
        "{ قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ * مَلِكِ ٱلنَّاسِ * إِلَٰهِ ٱلنَّاسِ * مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ * ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ * مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ. }",
        "",
        "ثلاث مرات بعد صلاتي الفجر والمغرب. ومرة بعد الصلوات الأخرى ",
        "ثلاث مرات",
      ];
 
    const a10 = [
        "",
        "لا إلهَ إلاّ اللّهُ وحْـدَهُ لا شريكَ لهُ، لهُ المُلكُ ولهُ الحَمْد، يُحيـي وَيُمـيتُ وهُوَ على كُلّ شيءٍ قدير.",
        "",
        "عَشْر مَرّات بَعْدَ المَغْرِب وَالصّـبْح.",
        "عشر مرات"
  
    ];
    const a11 = [
        "",
        "اللّهُـمَّ إِنِّـي أَسْأَلُـكَ عِلْمـاً نافِعـاً وَرِزْقـاً طَيِّـباً ، وَعَمَـلاً مُتَقَـبَّلاً",
        "",
        "بَعْد السّلامِ من صَلاةِ الفَجْر.",
        "مرة"
  
    ];
    const a12 = [
        "",
        "اللَّهُمَّ أَجِرْنِي مِنْ النَّار. ",
        "",
        "بعد صلاة الصبح والمغرب.",
        "سبع مرات"
    ];
    const a13 = [
        "",
        "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ. ",
        "",
        "",
        "مرة"
    ];
  

   
  
    const handelnext = () => {
      seTtext(text + 1);
      setCounter(0);
    };
  
    const handelback = () => {
      seTtext(text - 1);
      setCounter(0);
    };
  
    useEffect(() => {
      handelRequiredNumber();
    });
  
    const handelRequiredNumber = () => {
      {
        text == 1 ? setRequirednumber(a1[4]) : null;
      }
      {
        text == 2 ? setRequirednumber(a2[4]) : null;
      }
      {
        text == 3 ? setRequirednumber(a3[4]) : null;
      }
      {
        text == 4 ? setRequirednumber(a4[4]) : null;
      }
      {
        text == 5 ? setRequirednumber(a5[4]) : null;
      }
      {
        text == 6 ? setRequirednumber(a6[4]) : null;
      }
      {
        text == 7 ? setRequirednumber(a7[4]) : null;
      }
      {
        text == 8 ? setRequirednumber(a8[4]) : null;
      }{
      text == 9 ? setRequirednumber(a9[4]) : null;
    }
    {
      text == 10 ? setRequirednumber(a10[4]) : null;
    }
    {
      text == 11 ? setRequirednumber(a11[4]) : null;
    }
    {
      text == 12 ? setRequirednumber(a12[4]) : null;
    }
    {
      text == 13 ? setRequirednumber(a13[4]) : null;
    }
 
     
   
  
  }; // end of the handelrequirednumber function
  
  
    return (
      <Screen>
        {text == 1 ? (
          <PargraphText
            title={a1[0]}
            text={a1[1]}
            refrencetitle={a1[2]}
            subtitle={a1[3]}
          />
        ) : null}
        {text == 2 ? (
          <PargraphText
            title={a2[0]}
            text={a2[1]}
            refrencetitle={a2[2]}
            subtitle={a2[3]}
          />
        ) : null}
        {text == 3 ? (
          <PargraphText
            title={a3[0]}
            text={a3[1]}
            refrencetitle={a3[2]}
            subtitle={a3[3]}
          />
        ) : null}
  
        {text == 4 ? (
          <PargraphText
            title={a4[0]}
            text={a4[1]}
            refrencetitle={a4[2]}
            subtitle={a4[3]}
          />
        ) : null}
  
  {text == 5 ? (
          <PargraphText
            title={a5[0]}
            text={a5[1]}
            refrencetitle={a5[2]}
            subtitle={a5[3]}
          />
        ) : null}
        {text == 6 ? (
          <PargraphText
            title={a6[0]}
            text={a6[1]}
            refrencetitle={a6[2]}
            subtitle={a6[3]}
          />
        ) : null}
        {text == 7 ? (
          <PargraphText
            title={a7[0]}
            text={a7[1]}
            refrencetitle={a7[2]}
            subtitle={a7[3]}
          />
        ) : null}
  
        {text == 8 ? (
          <PargraphText
            title={a8[0]}
            text={a8[1]}
            refrencetitle={a8[2]}
            subtitle={a8[3]}
          />
        ) : null}
         {text == 9 ? (
          <PargraphText
            title={a9[0]}
            text={a9[1]}
            refrencetitle={a9[2]}
            subtitle={a9[3]}
          />
        ) : null}
        {text == 10 ? (
          <PargraphText
            title={a10[0]}
            text={a10[1]}
            refrencetitle={a10[2]}
            subtitle={a10[3]}
          />
        ) : null}
        {text == 11 ? (
          <PargraphText
            title={a11[0]}
            text={a11[1]}
            refrencetitle={a11[2]}
            subtitle={a11[3]}
          />
        ) : null}
  
        {text == 12 ? (
          <PargraphText
            title={a12[0]}
            text={a12[1]}
            refrencetitle={a12[2]}
            subtitle={a12[3]}
          />
        ) : null}
  
         {text == 13 ? (
          <PargraphText
            title={a13[0]}
            text={a13[1]}
            refrencetitle={a13[2]}
            subtitle={a13[3]}
          />
        ) : null}
           
         
           {text != 13 ? <AppButton title="التالي" onPress={handelnext} /> : null}
      {text != 1 ? (
        <AppButton title="السابق" style={styles.navBtn} onPress={handelback} />
      ) : null}
       
  
        <BtnCounter
          title="العداد"
          counter={counter}
          onPress={() => {setCounter(counter + 1),Haptics.selectionAsync()}}
          requirednumber={requirednumber}
          pageNumber={text}
          numberofPages="13"
        />
       
      </Screen>
    );
  }
  const styles = StyleSheet.create({
    container:{
      backgroundColor:"#8dbbc7",
      
    },
    // This style is for السابق (back) button
    navBtn: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 35,
      borderBottomRightRadius: 25,
      borderBottomLeftRadius: 250,
      padding: 10,
      position: "absolute",
      left: "3%",
      width: "45%",
      height: 60,
      bottom: "3%",
    },
  });


export default Athkar_After;