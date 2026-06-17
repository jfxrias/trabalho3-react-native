import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Contato</Text>
      <TextInput style={styles.input} placeholder="Digite seu nome" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, padding: 8, width: "80%", marginBottom: 10 },
  button: { backgroundColor: "blue", padding: 10, borderRadius: 5 },
  buttonText: { color: "white", fontWeight: "bold" },
});
