import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  StyleSheet } from "react-native";
import * as Haptics from 'expo-haptics';

import AppButton from "../../compnent/AppButton";
import BtnCounter from "../../compnent/BtnCounter";
import PargraphText from "../../compnent/PargraphText";
import Screen from "../../compnent/Screen";

function Night() {
  const [text, seTtext] = useState(1);
  const [counter, setCounter] = useState(0);
  const [requirednumber, setRequirednumber] = useState("");

  const a1 = [
    "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ",
    "{ اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. }",
    "[آية الكرسى - البقرة 255]. ",
    "من قالها حين يصبح أجير من الجن حتى يمسى ومن قالها حين يمسى أجير من الجن حتى يصبح.",
    "مرة"

  ];
  const a2 = [
    "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ",
    "{ * آمن الرسول بما أنزل إليه من ربه والمؤمنون ۚ كل آمن بالله وملائكته وكتبه ورسله لا نفرق بين أحد من رسله ۚ وقالوا سمعنا وأطعنا ۖ غفرانك ربنا وإليك المصير * لا يكلف الله نفسا إلا وسعها لها ما كسبت وعليها ما اكتسبت ربنا لا تؤاخذنا إن نسينآ أو أخطأنا ربنا ولا تحمل علينا إصرا كما حملته على الذين من قبلنا ربنا ولا تحملنا ما لا طاقة لنا به واعف عنا واغفر لنا وارحمنا أنت مولانا فانصرنا على القوم الكافرين. }",
    " [البقرة 285 - 286].",
    "من قرأ آيتين من آخر سورة البقرة في ليلة كفتاه.",
    "مرة"
  ];
  const a3 = [
    "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
    "{ قل هو ٱلله أحد * ٱلله ٱلصمد * لم يلد ولم يولد * ولم يكن لهۥ كفوا أحدۢ.  }",
    "",
    "من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين). ",
    "ثلاث مرات"

  ];
  const a4 = [
    "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
    "{ قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ * مِن شَرِّ مَا خَلَقَ * وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ * وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ * وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ. }",
    "",
    "من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين). ",
    "ثلاث مرات"

  ];
  const a5 = [
    "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
    "{ قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ * مَلِكِ ٱلنَّاسِ * إِلَٰهِ ٱلنَّاسِ * مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ * ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ * مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ. }",
    "",
    "من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين). ",
    "ثلاث مرات"

  ];
  const a6 = [
    "",
    "أمسيـنا وأمسـى المـلك لله والحمد لله ، لا إله إلا الله وحده لا شريك له، له المـلك وله الحمـد، وهو على كل شيء قدير ، رب أسـألـك خـير ما في هـذه اللـيلة وخـير ما بعـدهـا ، وأعـوذ بك من شـر ما في هـذه اللـيلة وشر ما بعـدهـا ، رب أعـوذبك من الكسـل وسـوء الكـبر ، رب أعـوذ بك من عـذاب في النـار وعـذاب في القـبر.",
    "",
    "",
    "مرة"
  ];
  const a7 = [
    "",
    "اللهـم أنت ربـي لا إله إلا أنت ، خلقتنـي وأنا عبـدك ، وأنا علـى عهـدك ووعـدك ما استـطعـت ، أعـوذبك من شـر ما صنـعت ، أبـوء لـك بنعـمتـك علـي وأبـوء بذنـبي فاغفـر لي فإنـه لا يغـفر الذنـوب إلا أنت .",
    "",
    "من قالها موقنا بها حين يمسى ومات من ليلته دخل الجنة وكذلك حين يصبح.",
    "مرة"
  ];
  const a8 = [
    "",
    "رضيـت بالله ربـا وبالإسلام ديـنا وبمحـمد صلى الله عليه وسلم نبيـا. ",
    "",
    "من قالها حين يصبح وحين يمسى كان حقا على الله أن يرضيه يوم القيامة.",
    "ثلاث مرات"

  ];
  const a9 = [
    "",
    "اللهـم إنـي أمسيت أشـهدك ، وأشـهد حملـة عـرشـك ، وملائكتك ، وجمـيع خلـقك ، أنـك أنـت الله لا إله إلا أنـت وحـدك لا شريك لـك ، وأن محمـدا عبـدك ورسـولـك.",
    "",
    "من قالها أعتقه الله من النار.",
    "اربع مرات"

  ];
  const a10 = [
    "",
    "اللهـم ما أمسى بي مـن نعـمة أو بأحـد مـن خلـقك ، فمـنك وحـدك لا شريك لـك ، فلـك الحمـد ولـك الشكـر.",
    "",
    "من قالها حين يصبح أدى شكر يومه.",
    "مرة"
  ];
  const a11 = [
    "",
    "حسبـي الله لا إله إلا هو علـيه توكـلت وهو رب العرش العظـيم. ",
    "",
    "من قالها كفاه الله ما أهمه من أمر الدنيا والأخرة.",
    "سبع مرات"
  ];
  const a12 = [
    "",
    "بسـم الله الذي لا يضـر مع اسمـه شيء في الأرض ولا في السمـاء وهـو السمـيع العلـيم.",
    "",
    "لم يضره من الله شيء.",
    "ثلاث مرات"
  ];
  const a13 = [
    "",
    "اللهـم بك أصـبحنا وبك أمسـينا ، وبك نحـيا وبك نمـوت وإلـيك المصير. ",
    "",
    "",
    "مرة"

  ];
  const a14 = [
    "",
    "أمسينا على فطرة الإسلام، وعلى كلمة الإخلاص، وعلى دين نبينا محمد صلى الله عليه وسلم، وعلى ملة أبينا إبراهيم حنيفا مسلما وما كان من المشركين. ",
    "",
    "",
    "مرة"
  ];
  const a15 = [
    "",
    "سبحـان الله وبحمـده عدد خلـقه ، ورضـا نفسـه ، وزنـة عـرشـه ، ومـداد كلمـاتـه.",
    "",
    "",
    "ثلاث مرات"

  ];
  const a16 = [
    "",
    "اللهـم عافـني في بدنـي ، اللهـم عافـني في سمـعي ، اللهـم عافـني في بصـري ، لا إله إلا أنـت.",
    "",
    "",
    "ثلاث مرات"

  ];
  const a17 = [
    "",
    "اللهـم إنـي أعـوذ بك من الكـفر ، والفـقر ، وأعـوذ بك من عذاب القـبر ، لا إله إلا أنـت.",
    "",
    "",
    "ثلاث مرات"

  ];
  const a18 = [
    "",
    "اللهـم إنـي أسـألـك العـفو والعـافـية في الدنـيا والآخـرة ، اللهـم إنـي أسـألـك العـفو والعـافـية في ديني ودنـياي وأهـلي ومالـي ، اللهـم استـر عـوراتي وآمـن روعاتـي ، اللهـم احفظـني من بـين يدي ومن خلفـي وعن يمـيني وعن شمـالي ، ومن فوقـي ، وأعـوذ بعظمـتك أن أغـتال من تحتـي. ",
    "",
    "",
    "مرة"

  ];
  const a19 = [
    "",
    "يا حي يا قيوم برحمتك أستغيث أصلح لي شأني كله ولا تكلني إلى نفسي طـرفة عين. ",
    "",
    "",
    "ثلاث مرات"

  ];
  const a20 = [
    "",
    "أمسينا وأمسى الملك لله رب العالمين، اللهم إني أسألك خير هذه الليلة فتحها ونصرها، ونورها وبركتها، وهداها، وأعوذ بك من شر ما فيها وشر ما بعدها. ",
    "",
    "",
    "مرة"

  ];
  const a21 = [
    "",
    "اللهـم عالـم الغـيب والشـهادة فاطـر السماوات والأرض رب كـل شـيء ومليـكه ، أشهـد أن لا إلـه إلا أنت ، أعـوذ بك من شـر نفسـي ومن شـر الشيـطان وشركه ، وأن أقتـرف علـى نفسـي سوءا أو أجـره إلـى مسـلم. ",
    "",
    "",
    "مرة"
  ];
  const a22 = ["",
   "أعـوذ بكلمـات الله التـامـات من شـر ما خلـق.",
    "",
     "",
     "ثلاث مرات"

    
    ];
  const a23 = [
    "",
    "اللهم صل وسلم وبارك على نبينا محمد. ",
    "",
    "من صلى على حين يصبح وحين يمسى ادركته شفاعتى يوم القيامة.",
    "عشر مرات"

  ];
  const a24 = [
    "",
    "اللهم إنا نعوذ بك من أن نشرك بك شيئا نعلمه ، ونستغفرك لما لا نعلمه. ",
    "",
    "",
    "ثلاث مرات"
    
  ];
  const a25 = [
    "",
    "اللهم إني أعوذ بك من الهم والحزن، وأعوذ بك من العجز والكسل، وأعوذ بك من الجبن والبخل، وأعوذ بك من غلبة الدين، وقهر الرجال.",
    "",
    "",
    "ثلاث مرات"
  ];
  const a26 = [
    "",
    "أستغفر الله العظيم الذي لا إله إلا هو، الحي القيوم، وأتوب إليه.",
    "",
    "",
    "ثلاث مرات"
  ];
  const a27 = [
    "",
    "يا رب , لك الحمد كما ينبغي لجلال وجهك , ولعظيم سلطانك.",
    "",
    "",
    "ثلاث مرات"
  ];
  const a28 = [
    "",
    "اللهم إني أسألك علما نافعا، ورزقا طيبا، وعملا متقبلا. ",
    "",
    "",
    "مرة"

  ];
  const a29 = [
    "",
    "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير. ",
    "",
    "كانت له عدل عشر رقاب، وكتبت له مئة حسنة، ومحيت عنه مئة سيئة، وكانت له حرزا من الشيطان.",
    "مئة مرة"

  ];
  const a30 = [
    "",
    "اللهم أنت ربي لا إله إلا أنت ، عليك توكلت ، وأنت رب العرش العظيم , ما شاء الله كان ، وما لم يشأ لم يكن ، ولا حول ولا قوة إلا بالله العلي العظيم , أعلم أن الله على كل شيء قدير ، وأن الله قد أحاط بكل شيء علما , اللهم إني أعوذ بك من شر نفسي ، ومن شر كل دابة أنت آخذ بناصيتها ، إن ربي على صراط مستقيم.",
    "",
    "ذكر طيب.",
    "مرة"

  ];

  const a31 = [
    "",
    "سبحـان الله وبحمـده.",
    "",
    "حطت خطاياه وإن كانت مثل زبد البحر. لم يأت أحد يوم القيامة بأفضل مما جاء به إلا أحد قال مثل ما قال أو زاد عليه.",
    "مئة مرة"

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
  {
    text == 14 ? setRequirednumber(a14[4]) : null;
  }
  {
    text == 15 ? setRequirednumber(a15[4]) : null;
  }
  {
    text == 16 ? setRequirednumber(a16[4]) : null;
  }
  {
    text == 17 ? setRequirednumber(a17[4]) : null;
  }
  {
    text == 18 ? setRequirednumber(a18[4]) : null;
  }
  {
    text == 19 ? setRequirednumber(a19[4]) : null;
  }
  {
    text == 20 ? setRequirednumber(a20[4]) : null;
  }
  {
    text == 21 ? setRequirednumber(a21[4]) : null;
  }
  {
    text == 22 ? setRequirednumber(a22[4]) : null;
  }
  {
    text == 23 ? setRequirednumber(a23[4]) : null;
  }
  {
  text == 24 ? setRequirednumber(a24[4]) : null;
}
{
  text == 25 ? setRequirednumber(a25[4]) : null;
}
{
  text == 26 ? setRequirednumber(a26[4]) : null;
}
{
  text == 27 ? setRequirednumber(a27[4]) : null;
}
{
  text == 28 ? setRequirednumber(a28[4]) : null;
}
{
  text == 29 ? setRequirednumber(a29[4]) : null;
}
{
  text == 30 ? setRequirednumber(a30[4]) : null;
}
{
  text == 31 ? setRequirednumber(a31[4]) : null;
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
      {text == 14 ? (
        <PargraphText
          title={a14[0]}
          text={a14[1]}
          refrencetitle={a14[2]}
          subtitle={a14[3]}
        />
      ) : null}
      {text == 15 ? (
        <PargraphText
          title={a15[0]}
          text={a15[1]}
          refrencetitle={a15[2]}
          subtitle={a15[3]}
        />
      ) : null}

      {text == 16 ? (
        <PargraphText
          title={a16[0]}
          text={a16[1]}
          refrencetitle={a16[2]}
          subtitle={a16[3]}
        />
      ) : null}
          {text == 17 ? (
        <PargraphText
          title={a17[0]}
          text={a17[1]}
          refrencetitle={a17[2]}
          subtitle={a17[3]}
        />
      ) : null}
       {text == 18 ? (
        <PargraphText
          title={a18[0]}
          text={a18[1]}
          refrencetitle={a18[2]}
          subtitle={a18[3]}
        />
      ) : null}
      {text == 19 ? (
        <PargraphText
          title={a19[0]}
          text={a19[1]}
          refrencetitle={a19[2]}
          subtitle={a19[3]}
        />
      ) : null}
      {text == 20 ? (
        <PargraphText
          title={a20[0]}
          text={a20[1]}
          refrencetitle={a20[2]}
          subtitle={a20[3]}
        />
      ) : null}

      {text == 21 ? (
        <PargraphText
          title={a21[0]}
          text={a21[1]}
          refrencetitle={a21[2]}
          subtitle={a21[3]}
        />
      ) : null}

{text == 22 ? (
        <PargraphText
          title={a22[0]}
          text={a22[1]}
          refrencetitle={a22[2]}
          subtitle={a22[3]}
        />
      ) : null}
      {text == 23 ? (
        <PargraphText
          title={a23[0]}
          text={a23[1]}
          refrencetitle={a23[2]}
          subtitle={a23[3]}
        />
      ) : null}
      {text == 24 ? (
        <PargraphText
          title={a24[0]}
          text={a24[1]}
          refrencetitle={a24[2]}
          subtitle={a24[3]}
        />
      ) : null}

      {text == 25 ? (
        <PargraphText
          title={a25[0]}
          text={a25[1]}
          refrencetitle={a25[2]}
          subtitle={a25[3]}
        />
      ) : null}

{text == 26 ? (
        <PargraphText
          title={a26[0]}
          text={a26[1]}
          refrencetitle={a26[2]}
          subtitle={a26[3]}
        />
      ) : null}
      {text == 27 ? (
        <PargraphText
          title={a27[0]}
          text={a27[1]}
          refrencetitle={a27[2]}
          subtitle={a27[3]}
        />
      ) : null}

      {text == 28 ? (
        <PargraphText
          title={a28[0]}
          text={a28[1]}
          refrencetitle={a28[2]}
          subtitle={a28[3]}
        />
      ) : null}

{text == 29 ? (
        <PargraphText
          title={a29[0]}
          text={a29[1]}
          refrencetitle={a29[2]}
          subtitle={a29[3]}
        />
      ) : null}
      {text == 30 ? (
        <PargraphText
          title={a30[0]}
          text={a30[1]}
          refrencetitle={a30[2]}
          subtitle={a30[3]}
        />
      ) : null}
      {text == 31 ? (
        <PargraphText
          title={a31[0]}
          text={a31[1]}
          refrencetitle={a31[2]}
          subtitle={a31[3]}
        />
      ) : null}
  

     

      {text != 31 ? <AppButton title="التالي" onPress={handelnext} /> : null}
      {text != 1 ? (
        <AppButton title="السابق" style={styles.navBtn} onPress={handelback} />
      ) : null}

      <BtnCounter
        title="العداد"
        counter={counter}
        onPress={() => {setCounter(counter + 1),Haptics.selectionAsync()}}
        requirednumber={requirednumber}
        pageNumber={text}
        numberofPages="31"
      />
     
    </Screen>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:"#8dbbc7"
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

export default Night;
