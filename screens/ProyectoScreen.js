import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function ProyectoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>¿Qué es un carrito seguidor de linea?</Text>
      <View style={styles.content}>
        <Text style={styles.text}>
          Un carro o robot seguidor de línea es un vehículo automatizado capaz
          de detectar y seguir una trayectoria predefinida, generalmente una
          línea negra sobre una superficie blanca (o viceversa), utilizando
          sensores ópticos o infrarrojos. Se utiliza comúnmente en robótica
          educativa, competencias y logística industrial.
        </Text>

        <Text style={styles.sectionTitle}>Propósito</Text>
        <Text style={styles.text}>
          Aplicar conocimientos de estructuras de datos y C++ en un carro
          seguidor de linea.
        </Text>

        <Text style={styles.sectionTitle}>Objetivo del proyecto</Text>
        <Text style={styles.text}>
          Crear un carro seguidor de linea que pueda completar diversos
          circuitos sin perderse, pasando intersecciones y utilizando
          estructuras de datos en su códdigo.
        </Text>
        <Text style={styles.sectionTitle}>Descripción del funcionamiento</Text>
        <Text style={styles.text}>El seguidor de línea funciona mediante una lógica de navegación de tres sensores y una estructura de datos de cola (FIFO) que almacena el historial de las últimas 10 acciones para dotar al robot de una "memoria" táctica. El sistema utiliza señales PWM para controlar con precisión la velocidad de los motores, permitiendo correcciones fluidas cuando los sensores detectan desviaciones; sin embargo, su característica más avanzada es el protocolo de recuperación: si el robot pierde la línea por completo, consulta su historial para girar en la última dirección conocida y, si la ausencia de señal persiste por más de tres segundos, ejecuta automáticamente un giro de 180 grados para reincorporarse a la pista de forma autónoma.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  content: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
    lineHeight: 20,
    textAlign: "justify",
  },
});
