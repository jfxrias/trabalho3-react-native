import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Sobre</Text>
      
      <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 }
});
