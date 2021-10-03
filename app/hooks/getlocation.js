import React,{useState,useEffect} from 'react';
import { Alert, Linking} from "react-native";
import * as Location from "expo-location";




export default  function getlocation(navigation) {

  const DefualtLocation=[{
    "City": "الرجاء تفعيل اعدادات الموقع ",
    "District": "",
    "Street": "",
    "Timezone": "Asia/Riyadh",}]
    // Defulte Latetiut - Longtitue (Riyadh)
  
    const [location, setlocation] = useState([24.638916, 46.7160104,DefualtLocation]);
    
    const [refresh, setrefresh] = useState(false);
    const getLocation = async () => {
      try {
        const { granted } = await Location.requestPermissionsAsync();
        if (!granted) {
          Alert.alert(
            "اعدادات الموقع",
            "  يجب عليك تفعيل اعدادت الموقع لحساب اوقات الصلاة بدقة اكبر ",
            [
              {
                text: "الغاء",
                onPress: () => {
                  console.log("Cancel Pressed");
                },
                style: "cancel",
              },
              {
                text: "الذهاب الى الاعدادات",
                onPress: () => {
                    Linking.openURL(`app-settings:`);
                },
              },
            ],
            { cancelable: false }
          );
  
          setrefresh(false);
        } else {
          setrefresh(true);
          const {
            coords: { latitude, longitude },
          } = await Location.getLastKnownPositionAsync();
          const place = await Location.reverseGeocodeAsync({latitude:latitude,longitude:longitude});
          const MyPlace = place.map(item => {
            const container = {};
        
            container.City = item.city;
            container.District=item.district
            container.Street = item.name;
            container.Timezone=item.timezone;
        
            return container;
          })
          setlocation([latitude, longitude,MyPlace]);
        }
      } catch (error) {
        console.log("this is me i am the " + error);
      }
    };
  
    useEffect(() => {
    
        navigation.addListener("focus", () => {
          getLocation();
        });
  
    
},[]);

  return location;

 
}


