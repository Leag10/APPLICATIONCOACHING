import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import  ImageWelcome  from "../assets/images/Welcome.jpg";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=> Navigation.navigate('fitnessHome')}>
          <Text style={styles.buttonText}>Suivant</Text>
        </TouchableOpacity>
      </View>

      <Image source={ImageWelcome} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Bienvenue sur l’application</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    alignItems: "center",
    backgroundColor: "#4472C4",
  },
  buttonContainer: {
    height: "10%",
    display: "flex",
    justifyContent: "center",
  },
  buttonText:{
    color:"#FFFF00",
    fontSize: 17
  },
  image: {
    objectFit: "cover",
    height: "65%",
    width: "85%",
  },
  textContainer: {
    height: "25%",
    display: "flex",
    justifyContent: "center",
  },
  text:{
    fontSize: 20,
  }
});
