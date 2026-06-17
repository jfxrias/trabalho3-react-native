
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Home</Text>
      <Button title="Ir para Contato" onPress={() => navigation.navigate('Contato')} />
      <Button title="Ir para Sobre" onPress={() => navigation.navigate('Sobre')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 }
});
