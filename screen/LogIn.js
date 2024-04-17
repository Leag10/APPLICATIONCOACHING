import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function LogIn() {
  const Navigation = useNavigation();
  const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        placeholderTextColor={"#fff"}
        style={styles.input}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Mot de passe"
          placeholderTextColor={"#fff"}
          style={styles.input}
          secureTextEntry={!visiblePassword}
        />
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setVisiblePassword(!visiblePassword)}
        >
          <Ionicons
            name={visiblePassword ? "eye-outline" : "eye-off-outline"}
            size={25}
            color={"white"}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=> Navigation.navigate('welcome')}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textButton}>
        <Text style={styles.buttonText} onPress={()=> Navigation.navigate('forgotPassword')}>Mot de passe oublié?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4472C4",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "70%",
    marginBottom: 20,
    paddingRight: 30,
    borderWidth: 1,
  },
  iconButton: {
    position: "absolute",
    right: 5,
    top: "15%",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "70%",
    alignItems: "center",
    backgroundColor: "#92D050",
  },
  buttonText: {
    color: "white",
  },
  textButton: {
    marginTop: 50,
  },
});
