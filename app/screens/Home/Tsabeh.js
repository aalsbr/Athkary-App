import React , {useState} from "react";
import { View, StyleSheet,  Text, TouchableHighlight, TouchableOpacity,} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import * as Haptics from 'expo-haptics';



import colors from "../../config/colors";
const items=[
  { label: "سُبْحَانَ اللَّهِ", value: "1" },
  { label: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", value: "2" },
  { label: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ", value: "3" },
  { label: "سُبْحَانَ اللهِ العَظِيمِ وَبِحَمْدِهِ", value: "4" },
  {
    label:
      "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    value: "5",
  },
  {
    label:
      "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ",
    value: "6",
  },
  { label: "لا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ", value: "7" },
  { label: "الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ", value: "8" },
  {
    label:
      "الْلَّهُم صَلِّ وَسَلِم وَبَارِك عَلَى سَيِّدِنَا مُحَمَّد ",
    value: "9",
  },
  { label: "أستغفر الله", value: "10" },
  {
    label:
      "سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ ",
    value: "11",
  },
  { label: "لَا إِلَهَ إِلَّا اللَّهُ", value: "12" },
  { label: "الْلَّهُ أَكْبَرُ ", value: "13" },
  {
    label:
      "سُبْحَانَ اللَّهِ ، وَالْحَمْدُ لِلَّهِ ، وَلا إِلَهَ إِلا اللَّهُ ، وَاللَّهُ أَكْبَرُ ، اللَّهُمَّ اغْفِرْ لِي ، اللَّهُمَّ ارْحَمْنِي ، اللَّهُمَّ ارْزُقْنِي. ",
    value: "14",
  },
  {
    label:
      "الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ. ",
    value: "15",
  },
  {
    label:
      "اللَّهُ أَكْبَرُ كَبِيرًا ، وَالْحَمْدُ لِلَّهِ كَثِيرًا ، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً.",
    value: "16",
  },

];



function Tsabeh(props) {
  const [text, setText] = useState("سُبْحَانَ اللَّهِ");
  const [counter, setCounter] = useState(0);
  const [ isPress, setIsPress ] = useState(false);

  var touchProps = {
    activeOpacity: 1.0,
    underlayColor: 100,                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.counter, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {setCounter(counter+1),Haptics.selectionAsync()},                 // <-- "onPress" is apparently required
  };
  return (
    <>
      
      <DropDownPicker
        items={items}
        labelStyle={{
          fontSize: 28,
          textAlign: "right",
          paddingHorizontal: "5%",
          color: colors.white,
        }}
        renderSeperator={() => (
          <View
            style={{
              backgroundColor: colors.medium,
              height: 0.5,
              margin: "5%",
            }}
          />
        )}
        dropDownMaxHeight={"25%"}
        dropDownStyle={{
          backgroundColor: 180,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          borderColor: 4,
        }}
        style={{
          backgroundColor: 100,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          borderColor: 50,
        }}
        placeholder={text}
        containerStyle={styles.dropdownlist}
        onChangeItem={(item) => {setText(item.label),setCounter(0)}}
      />
      <View style={styles.container}>
      <TouchableHighlight delayPressOut={190} {...touchProps} >
          
            <Text style={styles.text}>{counter}</Text>
        
          </TouchableHighlight>
      </View>
     
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  counter: {
    marginTop: "60%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 100,
    height: 300,
    width: 300,
    borderRadius: 150,
  },
  dropdownlist: {
    justifyContent: "center",
    position: "absolute",
    top: "2%",
    left: "7%",
    height: "25%",
    width: "89%",
  },
  text: {
    color: colors.white,
    fontSize: 100,
  },
  btnPress: {
    marginTop: "60%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 150,
    height: 280,
    width: 280,
    borderRadius: 140,
  }
});

export default Tsabeh;
