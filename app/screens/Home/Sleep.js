import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import * as Haptics from 'expo-haptics';

import AppButton from "../../compnent/AppButton";
import BtnCounter from "../../compnent/BtnCounter";
import PargraphText from "../../compnent/PargraphText";
import Screen from "../../compnent/Screen";

function Sleep() {
  const [text, seTtext] = useState(1);
  const [counter, setCounter] = useState(0);
  const [requirednumber, setRequirednumber] = useState("");
  
  const a1 = [
    "",
    "بِاسْمِكَ رَبِّـي وَضَعْـتُ جَنْـبي ، وَبِكَ أَرْفَعُـه، فَإِن أَمْسَـكْتَ نَفْسـي فارْحَـمْها ، وَإِنْ أَرْسَلْتَـها فاحْفَظْـها بِمـا تَحْفَـظُ بِه عِبـادَكَ الصّـالِحـين.",
    "",
    "",
    "مرة",
  ];
  const a2 = [
    "",
    "اللّهُـمَّ إِنَّـكَ خَلَـقْتَ نَفْسـي وَأَنْـتَ تَوَفّـاهـا لَكَ ممَـاتـها وَمَحْـياها ، إِنْ أَحْيَيْـتَها فاحْفَظْـها ، وَإِنْ أَمَتَّـها فَاغْفِـرْ لَـها . اللّهُـمَّ إِنَّـي أَسْـأَلُـكَ العـافِـيَة. ",
    "",
    "",
    "مرة",
    
  ];
  const a3 = [
    "",
    "اللّهُـمَّ قِنـي عَذابَـكَ يَـوْمَ تَبْـعَثُ عِبـادَك. ",
    "",
    "",
    "ثلاث مرات",
  ];

  const a4 = [
    "",
    "بِاسْـمِكَ اللّهُـمَّ أَمـوتُ وَأَحْـيا.",
    "",
    "",
    "مرة",
  ];
  const a5 = [
    "",
    "الـحَمْدُ للهِ الَّذي أَطْـعَمَنا وَسَقـانا، وَكَفـانا، وَآوانا، فَكَـمْ مِمَّـنْ لا كـافِيَ لَـهُ وَلا مُـؤْوي. ",
    "",
    "",
    "مرة",
  ];
  const a6 = [
    "",
    "اللّهُـمَّ عالِـمَ الغَـيبِ وَالشّـهادةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كُـلِّ شَـيءٍ وَمَليـكَه، أَشْهـدُ أَنْ لا إِلـهَ إِلاّ أَنْت، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي، وَمِن شَـرِّ الشَّيْـطانِ وَشِـرْكِه، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم . ",
    "",
    "",
    "مرة",
  ];
  const a7 = [
    "",
    "اللّهُـمَّ أَسْـلَمْتُ نَفْـسي إِلَـيْكَ، وَفَوَّضْـتُ أَمْـري إِلَـيْكَ، وَوَجَّـهْتُ وَجْـهي إِلَـيْكَ، وَأَلْـجَـاْتُ ظَهـري إِلَـيْكَ، رَغْبَـةً وَرَهْـبَةً إِلَـيْكَ، لا مَلْجَـأَ وَلا مَنْـجـا مِنْـكَ إِلاّ إِلَـيْكَ، آمَنْـتُ بِكِتـابِكَ الّـذي أَنْزَلْـتَ وَبِنَبِـيِّـكَ الّـذي أَرْسَلْـت. ",
    "",
    "",
    "مرة",
  ];
  const a8 = [
    "",
    "سُبْحَانَ اللَّهِ.",
    "",
    "",
    "ثلاث وثلاثون مرة",
  ];
  const a9 = [
    "",
    "الْحَمْدُ لِلَّهِ.",
    "",
    "",
    "ثلاث وثلاثون مرة",
  ];
  const a10 = [
    "",
    "اللَّهُ أَكْبَرُ.",
    "",
    "",
    "اربع وثلاثون مرة",
  ];
  const a11 = [
    "",
    "يجمع كفيه ثم ينفث فيهما والقراءة فيهما‏:‏ ‏{  ‏قل هو الله أحد  ‏}‏ و‏{ ‏قل أعوذ برب الفلق }‏ و‏{‏  قل أعوذ برب الناس }‏ ومسح ما استطاع من الجسد يبدأ بهما على رأسه ووجه وما أقبل من جسده. ",
    "",
    "",
    "ثلاث مرات",
  ];
  const a12 = [
    "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ",
    "{ آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ * لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ. }",
    "[البقرة 285 - 286] ",
    "من قرأ آيتين من آخر سورة البقرة في ليلة كفتاه.",
    " مرة",
  ];
  const a13 = [
    "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ",
    "{ اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. }",
    "[البقرة 255]",
    "أجير من الجن حتى يصبح.",
    " مرة",
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
      }
      {
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
  container: {
    backgroundColor: "#8dbbc7",
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

export default Sleep;
