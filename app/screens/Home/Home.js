import React, { useState, useEffect, useRef } from "react";
import { View, FlatList, Button, Alert, Linking, Text } from "react-native";
import * as Haptics from "expo-haptics";
import HomeList1 from "../../compnent/HomeList1";
import Screen from "../../compnent/Screen";
import colors from "../../config/colors";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const DATA = [
  {
    id: "1",
    title: "أذكار الصباح",
    background: colors.morning,
    iconname: "sunny",
  },
  {
    id: "2",
    title: "أذكار المساء",
    background: colors.night,
    iconname: "power-sleep",
  },
  {
    id: "3",
    title: "أذكار النوم ",
    background: colors.sleep,
    iconname: "bed",
  },
  {
    id: "4",
    title: "أذكار الاستيقاظ",
    background: colors.wakeup,
    iconname: "bed-wake",
  },
  {
    id: "5",
    title: "الأذكار بعد الصلاة",
    background: colors.pray,
    iconname: "pray",
  },
  {
    id: "6",
    title: "تسابيح",
    background: colors.counter,
    iconname: "hand-okay",
  },
  {
    id: "7",
    title: "القرآن الكريم",
    background: colors.yellowcolor,
    iconname: "book-open-page-variant",
  },
  {
    id: "8",
    title: "فضل الأذكار",
    background: colors.darkblue,
    iconname: "list",
  },
];
function Home({ navigation }) {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    Notifications.cancelAllScheduledNotificationsAsync();
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {});

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        Alert.alert(
          " التنبيهات",
          "لم تقم بتفعيل تنبيهات الاذكار ",
          [
            {
              text: "الغاء",
              style: "cancel",
            },
            {
              text: "التفعيل من الاعدادات",
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
       token = await Notifications.getExpoPushTokenAsync({
        'projectId': "4072dfca-e30b-4b2b-9e3f-80b9baa3b743",
      });    } else {
      alert("Must use physical device for Push Notifications");
    }
    schedulePushNotification();
    return token;
  }

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "تذكير قراءة اذكار الصباح ",
      },
      trigger: {
        hour: 6,
        minute: 0,
        repeats: true,
      },
    });
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "تذكير قراءة اذكار المساء",
      },
      trigger: {
        repeats: true,
        hour: 18,
        minute: 0,
      },
    });
  }

  return (
    <Screen>
      <View style={{ flex: 1, alignItems: "center" }}>
    
        <View style={{ flex: 1 }}>
          <FlatList
            numColumns={2}
            data={DATA}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <HomeList1
                backgroundColor={item.background}
                iconname={item.iconname}
                title={item.title}
                onPress={() => {
                  {
                    item.id == "1"
                      ? navigation.navigate("Morning", item)
                      : null;
                  }
                  {
                    item.id == "2" ? navigation.navigate("Night", item) : null;
                  }
                  {
                    item.id == "3" ? navigation.navigate("Sleep", item) : null;
                  }
                  {
                    item.id == "4" ? navigation.navigate("Wake", item) : null;
                  }
                  {
                    item.id == "5"
                      ? navigation.navigate("Athkar_After", item)
                      : null;
                  }
                  {
                    item.id == "6" ? navigation.navigate("Tsabeh", item) : null;
                  }
                  {
                    item.id == "7" ? navigation.navigate("Alkhf", item) : null;
                  }
                  {
                    item.id == "8" ? navigation.navigate("Fadl", item) : null;
                  }

                  Haptics.selectionAsync();
                }}
              />
            )}
          />
        </View>
      </View>
    </Screen>
  );
}

export default Home;
