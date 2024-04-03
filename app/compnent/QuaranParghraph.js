import React, { useLayoutEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

export default function QuaranParghraph({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();
  const[selected, setSelected] = useState(0);

  // Dynamically set the screen title using the item name
  useLayoutEffect(() => {
    navigation.setOptions({ title: "سورة " + item.name });
  }, [navigation, item]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</Text>

        <Text style={styles.text}>
          {item.array.map((text) => {
            return (
              <Text key={text.id}  style={text.id ===selected ?styles.active : null}
                onPress={() => setSelected(text.id)}
              >{`${text.ar}(${text.id}) `}</Text>
            );
          })}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  //this is for the background layer
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 40,
    borderRadius: 15,
    padding: 10,
    left: 10.5,
    bottom: "2%",
    position: "absolute",
    width: "95%",
    height: "97%",
  },
  scrollView: {
    marginBottom: "5%",
  },

  active:{
    backgroundColor:colors.darkgreen,
    color:colors.white,
    
  },
  //text proberity
  title: {
    textAlign: "center",
    fontSize: 27,
    fontFamily: "Arial",
    fontWeight: "600",
    color: colors.darkgreen,
    paddingTop: 8,
  },
  text: {
    fontWeight: "500",
    textAlign: "right",
    fontFamily: "Arial",
    marginRight: "1%",
    fontSize: 30,
    lineHeight: 54,
    // lineHeight:2,
    color: colors.black,
    paddingTop: 20,
  },
  refrencetitle: {
    fontFamily: "Arial",
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    color: colors.darkred,
    paddingTop: 16,
  },
  subtitle: {
    fontFamily: "Arial",
    textAlign: "right",
    fontWeight: "400",
    fontSize: 24,
    paddingTop: 20,
    marginRight: "1%",
    color: colors.lightblue,
  },
});
