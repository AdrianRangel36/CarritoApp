import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function FuncionamientoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Funcionamiento</Text>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>¿Cómo detecta la línea?</Text>
        <Text style={styles.text}>
          El carrito utiliza 3 sensores ópticos TCRT5000 ubicados en la parte frontal. Estos sensores emiten luz infrarroja y miden la reflexión. La línea negra absorbe la luz, mientras que la superficie blanca del circuito la refleja.
        </Text>
        
        <Text style={styles.sectionTitle}>Respuesta al cambio de trayectoria</Text>
        <Text style={styles.text}>
          El microcontrolador ESP32 procesa constantemente las lecturas de los 3 sensores. Si el sensor central detecta la línea, la instrucción es que ambos motores avancen. Si el sensor izquierdo detecta la línea, significa que el carro se desvía a la derecha, por lo que el motor derecho gira más rápido para corregir hacia la izquierda, y viceversa.
        </Text>

        <Text style={styles.sectionTitle}>Flujo básico de funcionamiento</Text>
        <Text style={styles.stepText}>1. Lectura analógica de los 3 sensores TCRT5000.</Text>
        <Text style={styles.stepText}>2. El ESP32 evalúa las condiciones lógicas (centro, izquierda, derecha).</Text>
        <Text style={styles.stepText}>3. Envío de señales PWM al Puente H para controlar los 2 motores.</Text>
        <Text style={styles.stepText}>4. Ajuste continuo de velocidad y dirección en tiempo real.</Text>
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
