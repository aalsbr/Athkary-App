import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import colors from "../config/colors";

function PargraphText({ title, text, refrencetitle, subtitle }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.refrencetitle}>{refrencetitle}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
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
    bottom: "15%",
    position: "absolute",
    width: "95%",
    height: "83%",
  },
  scrollView: {
    marginBottom: "20%",
  },
  //text proberity
  title: {
    textAlign: "center",
    fontSize: 24,
    fontFamily:'Arial',
    fontWeight: "600",
    color: colors.darkgreen,
    paddingTop: 8,
  },
  text: {
    fontWeight: "500",
    textAlign: "right",
    fontFamily:'Baskerville-SemiBold',
    marginRight: "1%",
    marginLeft:"1%",
    fontSize: 26,
    lineHeight:44,
    color: colors.black,
    paddingTop: 20,
  },
  refrencetitle: {
    fontFamily:'Arial',
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    color: colors.darkred,
    paddingTop: 16,
  },
  subtitle: {
    fontFamily:'Arial',

    textAlign: "right",
    fontWeight: "400",
    fontSize: 24,
    paddingTop: 20,
    marginRight: "1%",
    color: colors.lightblue,
  },
});

export default PargraphText;
