import React from "react";
import FadlPargraph from "../../compnent/FadlPargraph";
import Screen from "../../compnent/Screen";
function Fadl(props) {
  const a1 = [
    "",
   `من يرغب في الحفاظ على ترديد الأذكار اليومية وخاصة أذكار الصباح والمساء فإن لهما أوقات خاصة بهما ويجب استحضار القلب والعقل والشروع في هذه الأذكار لكي يبقى بحِفظ الله ورعايته، وينال بإذن الله كُل الخير والفضل الذي يترتب على هذه الأذكار، فقد قال الله تعالى " أذكروني أذكركم " فذكر الله عِبادة وطاعة ويترتب عليها ذكر الله لنا وحفظنا ورعايتنا، ومما جاء في فضل قراءة اذكار الصباح والمساء ما يلي:
   - كسب رضا الله عزّ وجلّ.
   - حفظ المكان الذي يبيت فيه الإنسان.
   - دوام الصلة بالله - عزّ وجلّ- والقرب منه
    والأنس به.
   - ذكر الله عزّ وجلّ للعبد في الملأ الأعلى.
   - الحفظ من الحسد والعين.
   - إمداد الجسم بالقوة والطاقة.
   - مغفرة الذنوب والسيئات.
   - زيادة الحسنات والثواب.
   - دخول الجنة بفضل الله وكرمه.
   - الحفظ من شر الإنس والجنّ وشر كلّ 
   المخلوقات.
   - التمتع بحفظ الله عزّ وجلّ وحمايته.
   - دوام نعم الله - جلّ وعلا- والبركة فيها.
   - كفاية الهم والغم والحزن في الدنيا
    والآخرة.  
   - طمأنينة القلب وانشراح الصدر.  
   - التحصن من الشيطان ومكائده`,
    "",
    "",
    "",
  ];

  return (
    <Screen>
      <FadlPargraph
        title={a1[0]}
        text={a1[1]}
        refrencetitle={a1[2]}
        subtitle={a1[3]}
      />
    </Screen>
  );
}

export default Fadl;
