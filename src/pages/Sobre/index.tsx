import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Sobre({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Sobre</Text>


      <Text style={styles.text}>
        Este aplicativo foi desenvolvido para coletar informações básicas de contato,
        como seu nome e número de celular, e facilitar a navegação entre diferentes telas.
      </Text>

      <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 20 },
  text: { fontSize: 18, color: '#555', textAlign: 'center', marginBottom: 20 },
  button: {
    backgroundColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' }
});

