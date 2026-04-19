import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function ConclusionesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Conclusiones</Text>
      
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Conclusiones Generales</Text>
        <Text style={styles.text}>
          En esta sección se presentan las conclusiones obtenidas durante el desarrollo del proyecto.
        </Text>
        
        <Text style={styles.sectionTitle}>Resultados Alcanzados</Text>
        <Text style={styles.resultText}>
          ✓ Resultado 1: Descripción del resultado{'\n'}
          ✓ Resultado 2: Descripción del resultado{'\n'}
          ✓ Resultado 3: Descripción del resultado
        </Text>
        
        <Text style={styles.sectionTitle}>Lecciones Aprendidas</Text>
        <Text style={styles.text}>
          • Lección aprendida 1{'\n'}
          • Lección aprendida 2{'\n'}
          • Lección aprendida 3
        </Text>
        
        <Text style={styles.sectionTitle}>Recomendaciones Futuras</Text>
        <Text style={styles.text}>
          Sugerencias para mejorar o continuar con el proyecto en futuras etapas.
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
  resultText: {
    fontSize: 14,
    color: '#27AE60',
    marginBottom: 10,
    fontWeight: '500',
  },
});
