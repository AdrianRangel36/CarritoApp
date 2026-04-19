import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function FuncionamientoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Funcionamiento</Text>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>¿Cómo funciona?</Text>
        <Text style={styles.text}>
          Esta sección describe el funcionamiento del proyecto y cómo opera sus principales componentes.
        </Text>
        
        <Text style={styles.sectionTitle}>Procesos Principales</Text>
        <Text style={styles.stepText}>1. Primer proceso del sistema</Text>
        <Text style={styles.stepText}>2. Segundo proceso del sistema</Text>
        <Text style={styles.stepText}>3. Tercer proceso del sistema</Text>
        
        <Text style={styles.sectionTitle}>Flujo de Ejecución</Text>
        <Text style={styles.text}>
          Explicación detallada de cómo los procesos interactúan y el flujo general de la aplicación.
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
  stepText: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
    marginLeft: 10,
  },
});
