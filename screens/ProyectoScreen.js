import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function ProyectoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Descripción del Proyecto</Text>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Objetivo General</Text>
        <Text style={styles.text}>
          Describir los objetivos principales del proyecto y su propósito.
        </Text>
        
        <Text style={styles.sectionTitle}>Objetivos Específicos</Text>
        <Text style={styles.text}>
          • Objetivo específico 1{'\n'}
          • Objetivo específico 2{'\n'}
          • Objetivo específico 3
        </Text>
        
        <Text style={styles.sectionTitle}>Alcance</Text>
        <Text style={styles.text}>
          Explicar el alcance y límites del proyecto.
        </Text>
      </View>
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
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  content: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    lineHeight: 20,
  },
});
