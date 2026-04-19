import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default function MaterialesScreen() {
  const materiales = [
    { id: '1', nombre: 'Material 1', cantidad: '5' },
    { id: '2', nombre: 'Material 2', cantidad: '10' },
    { id: '3', nombre: 'Material 3', cantidad: '8' },
    { id: '4', nombre: 'Material 4', cantidad: '3' },
  ];

  const renderMaterial = ({ item }) => (
    <View style={styles.materialItem}>
      <Text style={styles.materialName}>{item.nombre}</Text>
      <Text style={styles.materialQuantity}>Cantidad: {item.cantidad}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Materiales</Text>
      <Text style={styles.subtitle}>Lista de materiales utilizados</Text>
      
      <FlatList
        scrollEnabled={false}
        data={materiales}
        renderItem={renderMaterial}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  materialItem: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  materialName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  materialQuantity: {
    fontSize: 14,
    color: '#666',
  },
});
