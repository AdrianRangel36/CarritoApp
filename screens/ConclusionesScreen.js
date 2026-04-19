import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function ConclusionesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Conclusiones</Text>
      <View style={styles.content}>
        
        <Text style={styles.sectionTitle}>¿Qué aprendió el equipo?</Text>
        <Text style={styles.text}>
          Aprendimos a integrar hardware y software de manera efectiva. Comprendimos la importancia de la lógica de programación en C++ para el ESP32, específicamente en la lectura de datos de múltiples sensores TCRT5000 y la sincronización con los motores a través del puente H.
        </Text>

        <Text style={styles.sectionTitle}>Dificultades presentadas</Text>
        <Text style={styles.text}>
          La principal dificultad fue la calibración de los sensores ópticos, ya que la iluminación del entorno afectaba los valores leídos. Además, ajustar los retardos (delays) y la velocidad de los motores para que las curvas en la línea fueran suaves requirió múltiples pruebas y errores.
        </Text>

        <Text style={styles.sectionTitle}>Posibles mejoras futuras</Text>
        <Text style={styles.text}>
          • Implementar un control PID en el código para que las correcciones de trayectoria sean mucho más precisas y evitar el movimiento en "zigzag".{'\n'}
          • Diseñar un chasis más ligero y compacto.{'\n'}
          • Mejorar el diseño visual de esta aplicación móvil.
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