import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Sobre({ navigation }: { navigation: any }) {
  const [detalhes, setDetalhes] = useState(false);

  useEffect(() => {
    console.log('Tela Sobre montada');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Sobre</Text>

      <Text>Aplicativo desenvolvido com React Native.</Text>
      <Text>Versão: 1.0.0</Text>

      <Button
        title={detalhes ? 'Ocultar detalhes' : 'Ver mais detalhes'}
        onPress={() => setDetalhes((d) => !d)}
      />

      {detalhes && (
        <Text>Trabalho 3 — Fundamentos de React Native.</Text>
      )}

      <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});