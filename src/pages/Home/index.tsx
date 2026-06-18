import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TextInput, StyleSheet } from 'react-native';

export default function Home() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    setItems(["Item 1", "Item 2", "Item 3", "Item 4"]);
  }, []);

  
  const [inputs, setInputs] = useState<string[]>(["", "", "", ""]);

  const updateInput = (text: string, index: number) => {
    const newInputs = [...inputs];
    newInputs[index] = text;
    setInputs(newInputs);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Home</Text>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemBox}>
      
            <Text style={styles.itemTitle}>{item}</Text>
   
            <TextInput
              style={styles.input}
              value={inputs[index]}
              onChangeText={(text) => updateInput(text, index)}
              placeholder="Digite algo..."
            />
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fdf6e3', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#b58900', marginBottom: 16 },
  itemBox: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  itemTitle: { fontSize: 18, fontWeight: '600', marginBottom: 6, color: '#268bd2' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    backgroundColor: '#fafafa'
  }
});

