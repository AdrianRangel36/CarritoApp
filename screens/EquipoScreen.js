import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function EquipoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Equipo de Trabajo</Text>
      <View style={styles.content}>
        <Text style={styles.text}>
          En esta pantalla se muestra la información del equipo de trabajo que desarrolló el proyecto.
        </Text>
        <Text style={styles.label}>Miembros del equipo:</Text>
        <Text style={styles.member}>• Integrante 1</Text>
        <Text style={styles.member}>• Integrante 2</Text>
        <Text style={styles.member}>• Integrante 3</Text>
        <Text style={styles.member}>• Integrante 4</Text>
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
  text: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 15,
    marginBottom: 10,
  },
  member: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
});
