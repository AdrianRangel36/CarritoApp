import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function GaleriaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Galería</Text>
      <Text style={styles.subtitle}>Imágenes del proyecto</Text>
      
      <View style={styles.galleryGrid}>
        <View style={styles.imageCard}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.placeholderText}>Imagen 1</Text>
          </View>
          <Text style={styles.imageCaption}>Descripción de imagen 1</Text>
        </View>
        
        <View style={styles.imageCard}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.placeholderText}>Imagen 2</Text>
          </View>
          <Text style={styles.imageCaption}>Descripción de imagen 2</Text>
        </View>
        
        <View style={styles.imageCard}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.placeholderText}>Imagen 3</Text>
          </View>
          <Text style={styles.imageCaption}>Descripción de imagen 3</Text>
        </View>
        
        <View style={styles.imageCard}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.placeholderText}>Imagen 4</Text>
          </View>
          <Text style={styles.imageCaption}>Descripción de imagen 4</Text>
        </View>
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
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageCard: {
    width: '48%',
    marginVertical: 10,
  },
  imagePlaceholder: {
    width: '100%',
    height: 120,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
  },
  imageCaption: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
});
