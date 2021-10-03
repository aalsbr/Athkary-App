import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import adhan from "adhan";

import Screen from "../../compnent/Screen";
import moment from "moment-timezone";
import PrayTimesC from "../../compnent/PrayTimesC";
import colors from "../../config/colors";
import { ScrollView } from "react-native-gesture-handler";
import getlocation from "../../hooks/getlocation";
import LocationName from "../../compnent/LocationName";

function PrayTimes({ navigation }) {
  var [dt, setDt] = useState(new Date());
  const location = getlocation(navigation);
  const currentplace = location[2];

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date());
    }, 1000);
    return () => clearInterval(secTimer);
  });
  

  // Geting Latetiut - Longtitue from Location Hock
  var coordinates = new adhan.Coordinates(location[0], location[1]);
  //Calculation Method By Defualt UmmAlQura
  var params = adhan.CalculationMethod.UmmAlQura();
  var prayerTimes = new adhan.PrayerTimes(coordinates, dt, params);
  //Pray times  inilize :)
  var shrogTime = moment(prayerTimes.sunrise)
    .tz(currentplace[0].Timezone)
    .format("h:mm A");
  var fajrTime = moment(prayerTimes.fajr)
    .tz(currentplace[0].Timezone)
    .format("h:mm A");
  var asrTime = moment(prayerTimes.asr)
    .tz(currentplace[0].Timezone)
    .format("h:mm A");
  var dhuhrTime = moment(prayerTimes.dhuhr)
    .tz(currentplace[0].Timezone)
    .format("h:mm A");
  var ishaTime = moment(prayerTimes.isha)
    .tz(currentplace[0].Timezone)
    .format("h:mm A");
  var maghribTime = moment(prayerTimes.maghrib)
    .tz("Asia/Riyadh")
    .format("h:mm A");
  //current date
  var currentn = moment();
  //name of the next prayer
  var next = prayerTimes.nextPrayer();
  //Time of the next prayer EX :Asr 3:27 PM
  var nextPrayerTime = moment(prayerTimes.timeForPrayer(next));
  // Calculate Next Prayer Time = -  Current Time
  var d = moment.duration(nextPrayerTime.diff(currentn));
  // Formating The Time to String Object ;)
  var timeformat = moment.utc(+d).format("H ساعات ,mm دقيقة ,ss ثانية");




  if (next === "dhuhr") {
    next = "الظهر";
  }
  if (next == "asr") {
    next = "العصر";
  }
  if (next == "isha") {
    next = "العشاء";
  }
  if (next == "maghrib") {
    next = "المغرب";
  }
  if (next == "fajr") {
    next = "الفجر";
  }
 
  if (next == "Sunrise") {
    next = "الشروق";
  }
 
 
   
    

   
    

  return (
    <Screen style={styles.backcolor}>
      <View style={styles.container}>
        <LocationName
          City={currentplace[0].City}
          District={currentplace[0].District}
        />
        <Text style={styles.praytext}>صلاة {next} بعد :</Text>
        <Text style={styles.text}>{timeformat}</Text>
      </View>
      <View style={{ marginTop: "3%" }}></View>

      <ScrollView>
      <PrayTimesC
          Title="الشروق"
          Time={shrogTime}
          backgroundColor={colors.whitetranspert}
        />
        <PrayTimesC
          Title="الفجر"
          Time={fajrTime}
          backgroundColor={colors.whitetranspert}
        />

        <PrayTimesC
          Title="الظهر"
          Time={dhuhrTime}
          backgroundColor={colors.whitetranspert}
        />
        <PrayTimesC
          Title="العصر"
          Time={asrTime}
          backgroundColor={colors.whitetranspert}
        />
        <PrayTimesC
          Title="المغرب"
          Time={maghribTime}
          backgroundColor={colors.whitetranspert}
        />
        <PrayTimesC
          Title="العشاء"
          Time={ishaTime}
          backgroundColor={colors.whitetranspert}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginHorizontal: "2.5%",
  
    margin: "5%",
    backgroundColor: colors.whitetranspert,
    borderRadius: 20,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    borderColor: colors.medium,
    borderBottomWidth: 5,
    borderWidth: 0.5,
    height: "35%",
    width: "95%",
    flexDirection: "row-reverse",
  },
  praytext: {
    fontWeight: "bold",
    position: "absolute",
    top: "35%",
    fontSize: 32,
  },
  text: {
    fontWeight: "bold",
    position: "absolute",
    top: "60%",
    fontSize: 28,
  },
  backcolor:{
    backgroundColor:'#e8e8e8',
  },
});

export default PrayTimes;
