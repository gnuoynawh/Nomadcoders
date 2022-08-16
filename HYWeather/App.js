import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

const { width:SCREEN_WIDTH } = Dimensions.get("window");
const API_KEY = "cadb318b1fc61f1f46bc36916855e4f3";

export default function App() {

  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  //const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const getWeather = async() => {
     
    let {granted} = await Location.requestForegroundPermissionsAsync();
    console.log(granted);

    if (!granted) {
      setOk(false);
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({accuracy:5})

    let location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );

    console.log(location);
    setCity(location[0].city);

    //Call current weather data (https://openweathermap.org/current)
    //const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)

    //5 day weather forecast (https://openweathermap.org/forecast5)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)

    //One Call API 3.0 >> {"cod": 401, "message": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."}
    //const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}`)
    const json = await response.json();

    const list = json.list;
    console.log(json.list);
    setDays(json.list);
  }

  useEffect(() => {
    getWeather();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView 
        pagingEnabled 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >

        { days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator 
              color="white"
              style={{ marginTop: 10 }} 
              size="large" 
            />
          </View>
        ): (
          days.map((day, index) => {
              const temp = parseFloat(day.main.temp).toFixed(1);
              const desc = JSON.parse(JSON.stringify(day.weather));

              return <View key={index} style={styles.day}>
                <Text style={styles.temp}>{temp}</Text>
                <Text style={styles.description}>{desc[0].main}</Text>
                <Text style={styles.tinyText}>{desc[0].description}</Text>
              </View>
            }
          )
        )}
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 48,
    fontWeight: "500",
  },
  weather: {
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
    fontWeight: "600",
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
  tinyText: {
    fontSize: 20,
  },
});
