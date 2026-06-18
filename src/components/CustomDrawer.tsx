import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

export default function CustomDrawer(props: DrawerContentComponentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Customizado</Text>

      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Sobre o App')}>
        <Text style={styles.buttonText}>Sobre</Text>
      </TouchableOpacity>

     
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Contato Direto')}>
        <Text style={styles.buttonText}>Contato</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#007AFF', padding: 10, marginVertical: 5, borderRadius: 5 },
  buttonText: { color: 'white', fontWeight: 'bold' },
});
