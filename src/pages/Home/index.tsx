import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function Home({ navigation }: { navigation: any }) {
  const [contador, setContador] = useState(0);
  const [lista, setLista] = useState<{ id: string; texto: string }[]>([]);

  useEffect(() => {
    if (contador > 0) {
      setLista((prev) => [
        ...prev,
        { id: String(contador), texto: `Item #${contador}` },
      ]);
    }
  }, [contador]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Home</Text>

      <Text>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={() => setContador((c) => c + 1)} />

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.texto}</Text>}
      />

      <Button title="Ir para Contato" onPress={() => navigation.navigate('Contato')} />
      <Button title="Ir para Sobre" onPress={() => navigation.navigate('Sobre')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});