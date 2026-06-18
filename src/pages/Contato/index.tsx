import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Contato({ navigation }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

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
        placeholder="Digite seu número de celular"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad" 
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert(`Nome: ${nome}\nCelular: ${telefone}`)}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0f7fa' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#006064', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#006064',
    borderRadius: 8,
    padding: 10,
    width: '80%',
    marginBottom: 12,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#00796b',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 6
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});
