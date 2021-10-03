import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import * as Haptics from 'expo-haptics';

import AppButton from "../../compnent/AppButton";
import BtnCounter from "../../compnent/BtnCounter";
import PargraphText from "../../compnent/PargraphText";
import Screen from "../../compnent/Screen";

function WakeUp() {
  const [text, seTtext] = useState(1);
  const [counter, setCounter] = useState(0);
  const [requirednumber, setRequirednumber] = useState("");
  
  const a1 = [
    "",
    "الحمد لله الذي أحيانا بعد ما أماتنا، وإليه النشور",
    "",
    "",
    "مرة",
  ];
  const a2 = [
    "",
    "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير، سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر، ولا حول ولا قوة إلا بالله العلي العظيم، رب اغفر لي",
    "",
    "من قال ذلك غُفِرَ له، فإن دعا استجيب له، فإن قام فتوضأ ثم صلى قُبلت صلاته،",
    "مرة",
  ];
  const a3 = [
    "",
    "الحمد لله الذي عافاني في جسدي، ورد علي روحي، وأذن لي بذكره",
    "",
    "",
    "مرة",
  ];
  const a4 = [
    "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ",
    "{ إن في خلق السموات والأرض واختلاف الليل والنهار لآيات لأولي الألباب * الذين يذكرون الله قياما وقعودا وعلى جنوبهم ويتفكرون في خلق السموات والأرض ربنا ما خلقت هذا باطلا سبحانك فقنا عذاب النار* ربنا إنك من تدخل النار فقد أخزيته وما للظالمين من أنصار* ربنا إننا سمعنا مناديا ينادي للإيمان أن آمنوا بربكم فآمنا ربنا فاغفر لنا ذنوبنا وكفر عنا سيئاتنا وتوفنا مع الأبرار* ربنا وآتنا ما وعدتنا على رسلك ولا تخزنا يوم القيامة إنك لا تخلف الميعاد* فاستجاب لهم ربهم أني لا أضيع عمل عامل منكم من ذكر أو أنثى بعضكم من بعض فالذين هاجروا وأخرجوا من ديارهم وأوذوا في سبيلي وقاتلوا وقتلوا لأكفرن عنهم سيئاتهم ولأدخلنهم جنات تجري من تحتها الأنهار ثوابا من عند الله والله عنده حسن الثواب * لا يغرنك تقلب الذين كفروا في البلاد * متاع قليل ثم مأواهم جهنم وبئس المهاد * لكن الذين اتقوا ربهم لهم جنات تجري من تحتها الأنهار خالدين فيها نزلا من عند الله وما عند الله خير للأبرار * وإن من أهل الكتاب لمن يؤمن بالله وما أنزل إليكم ومآ أنزل إليهم خاشعين لله لا يشترون بآيات الله ثمنا قليلا أولئك لهم أجرهم عند ربهم إن الله سريع الحساب*يا أيها الذين آمنوا اصبروا وصابروا ورابطوا واتقوا الله لعلكم تفلحون }",
    "الآيات من سورة آل عمران، ١٩٠-٢٠٠",
    "",
    "مرة",
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

    
    

      {text != 4 ? <AppButton title="التالي" onPress={handelnext} /> : null}
      {text != 1 ? (
        <AppButton title="السابق" style={styles.navBtn} onPress={handelback} />
      ) : null}

      <BtnCounter
        title="العداد"
        counter={counter}
        onPress={() => {setCounter(counter + 1),Haptics.selectionAsync()}}
        requirednumber={requirednumber}
        pageNumber={text}
        numberofPages="4"
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

export default WakeUp;
