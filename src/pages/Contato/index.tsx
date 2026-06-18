import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Contato({ navigation }: { navigation: any }) {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    console.log('Tela Contato montada');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Contato</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua mensagem"
        value={mensagem}
        onChangeText={setMensagem}
      />

      <TouchableOpacity style={styles.button} onPress={() => alert(`Enviado por: ${nome}`)}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 8, width: '80%', marginBottom: 10 },
  button: { backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 8 },
  buttonText: { color: 'white', fontWeight: 'bold' },
});
