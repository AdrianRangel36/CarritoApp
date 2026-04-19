import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function GaleriaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Galería de Evidencias</Text>
      <View style={styles.content}>
        
        <Text style={styles.sectionTitle}>Proceso de Armado</Text>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.textPlaceholder}>[Colocar imagen de armado aquí]</Text>
          {/* <Image source={require('../assets/armado.jpg')} style={styles.image} /> */}
        </View>

        <Text style={styles.sectionTitle}>Capturas de Pruebas</Text>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.textPlaceholder}>[Colocar imagen del carrito en pista]</Text>
          {/* <Image source={require('../assets/pruebas.jpg')} style={styles.image} /> */}
        </View>

        <Text style={styles.sectionTitle}>Video Demostrativo</Text>
        <Text style={styles.text}>
          Enlace al video del equipo: https://youtube.com/tu-enlace
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
  },
  imagePlaceholder: {
    backgroundColor: '#e0e0e0',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  textPlaceholder: {
    color: '#888',
    fontStyle: 'italic',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  }
});