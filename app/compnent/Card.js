import React from "react";
import { StyleSheet, View, TouchableOpacity,Image } from "react-native";
// import { Image } from "react-native-expo-image-cache";

import AppText from "./AppText";
function Card({ imageURL, title, subTitle, onPress, thumbnailUrl }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.imagecontainer} tint="light" preview={{uri:thumbnailUrl}} uri={imageURL} />
        <View style={styles.textcontainer}>
          <AppText>{title}</AppText>
          <AppText>{subTitle}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    backgroundColor: "#e3e3e3",
    borderRadius: 20,
    borderColor: "#969696",
    borderWidth: 1,
    margin: 15,
  },
  imagecontainer: {
    width: "100%",
    height: 200,
  },
  textcontainer: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 30,
  },
});
export default Card;
