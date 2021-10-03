import React from "react";
import {  View } from "react-native";
import { MaterialCommunityIcons, Ionicons , FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";

function Icon({ name, size = 40, style }) {
  return (
    <View
      style={
        (style,
        [
          {
            width: size,
            height: size,
            position: "absolute",
            borderRadius: size / 2,
            justifyContent: "center",
            bottom: "20%",
            left: "5%",
            alignItems: "center",
          },
        ])
      }
    >
      {name == "power-sleep" ? (
        <MaterialCommunityIcons
          name={name}
          color={colors.white}
          size={170 * 0.5}
        />
      ) : null}
      {name == "sunny" ? (
        <Ionicons name={name} size={170 * 0.5} color={colors.white} />
      ) : null}
      {name == "bed" ? (
        <>
          <View style={{ position: "absolute", left: "40%" }}>
            <Ionicons name="bed" size={140 * 0.5} color={colors.white} />
          </View>
          <View style={{ position: "absolute", right: "55%", top: "20%" }}>
            <MaterialCommunityIcons
              name="power-sleep"
              color={colors.white}
              size={115 * 0.5}
            />
          </View>
        </>
      ) : null}
      {name == "bed-wake" ? (
        <>
          <View style={{ position: "absolute", left: "40%" }}>
            <Ionicons name="bed" size={140 * 0.5} color={colors.white} />
          </View>
          <View style={{ position: "absolute", right: "55%", top: "20%" }}>
            <Ionicons name="sunny" size={115 * 0.5} color={colors.white} />
          </View>
        </>
      ) : null}

      {name == "pray" ? (
          <View style={{ position: "absolute", top: "25%" }}>
        <FontAwesome5
          name={name}
          color={colors.white}
          size={150 * 0.5}

        />
        </View>
      ) : null}
       {name == "hand-okay" ? (
            <MaterialCommunityIcons
            name="hand-okay"
            color={colors.white}
            size={170 * 0.5}
  
          />
      ) : null}

{name == "book-open-page-variant" ? (
            <MaterialCommunityIcons
            name="book-open-page-variant"
            color={colors.white}
            size={150 * 0.5}
  
          />
      ) : null}

         {name == "list" ? (
            <FontAwesome5
            name="list"
            color={colors.white}
            size={120 * 0.5}
  
          />
      ) : null}
       


    </View>
  );
}

export default Icon;
