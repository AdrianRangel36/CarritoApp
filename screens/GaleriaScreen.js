import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// Importamos el componente de Video
import { Video, ResizeMode } from 'expo-av';

export default function GaleriaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Galería de Evidencias</Text>
      <View style={styles.content}>
        
        <Text style={styles.sectionTitle}>Video Demostrativo 1 </Text>
        <Text style={styles.text}>
          Prueba de funcionamiento del carrito:
        </Text>
        
        {/* Reproductor de video local */}
        <Video
          style={styles.video}
          source={require('../assets/carrito2.mp4')}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping={false}
        />

        <Text style={styles.sectionTitle}>Video Demostrativo 2 </Text>
        <Text style={styles.text}>
          Prueba de funcionamiento del carrito siguiendo la línea:
        </Text>
        
        {/* Reproductor de video local */}
        <Video
          style={styles.video}
          source={require('../assets/carrito1.mp4')}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping={false}
        />

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
  video: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    backgroundColor: '#000', 
    marginTop: 10,
  }
});
