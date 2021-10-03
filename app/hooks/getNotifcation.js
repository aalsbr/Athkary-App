import React, { useEffect, useState } from "react";
import {  Platform, Alert, Linking } from "react-native";
import * as Notifications from "expo-notifications";
// import * as IntentLauncher from "expo-intent-launcher";
import * as Application from "expo-application";





export default function getNotifcation(props) {

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: true,
        }),
      });

    const [granted,setgranted]=useState(false);
    async function getPermissionsForNotification () {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
  
    if (existingStatus !== "granted") {
       setgranted(false); 
      const {
        status: finalStatus,
      } = await Notifications.requestPermissionsAsync();
  
      if (finalStatus !== "granted") {
        Alert.alert(
          " التنبيهات",
          "لم تقم بتفعيل تنبيهات الاذكار والصلاة",
          [
            {
              text: "الغاء",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "Configurações",
              onPress: () => {
                if (Platform.OS === "ios") {
                  Linking.openURL(`app-settings:`);
                } else {
                  const bundleIdentifier = Application.applicationId;
                  IntentLauncher.startActivityAsync(
                    IntentLauncher.APP_NOTIFICATION_SETTINGS,
                    {
                      data: `package:${bundleIdentifier}`,
                    }
                  );
                }
              },
            },
          ],
          { cancelable: false }
        );
        return;
      }
    }
    else{
        setgranted(true);

    }
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });

    }
}

    useEffect(() => {
    getPermissionsForNotification();
    // Notifications.setBadgeCountAsync(0);
},[]);

    return granted;
  }


    





