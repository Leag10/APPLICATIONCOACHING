import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        placeholderTextColor={"#fff"}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Réinitialiser le mot de passe</Text>
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
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "70%",
    marginBottom: 20,
    paddingRight: 30,
    borderWidth: 1,
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
