import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Home from './src/pages/Home';
import Contato from './src/pages/Contato';
import Sobre from './src/pages/Sobre';

export default function App() {
  return (
    <ScrollView>
      {/* <Home /> */}
      {/* <Contato /> */}
      <Sobre />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
