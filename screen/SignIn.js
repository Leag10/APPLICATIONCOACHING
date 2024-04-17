import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignIn() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visiblePasswordConfirmation, setVisiblePasswordConfirmation] =
    useState(false);
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
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Retaper le mot de pas"
          placeholderTextColor={"#fff"}
          style={styles.input}
          secureTextEntry={!visiblePasswordConfirmation}
        />
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() =>
            setVisiblePasswordConfirmation(!visiblePasswordConfirmation)
          }
        >
          <Ionicons
            name={
              visiblePasswordConfirmation ? "eye-outline" : "eye-off-outline"
            }
            size={25}
            color={"white"}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>S'inscrire</Text>
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
});
