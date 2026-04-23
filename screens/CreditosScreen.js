import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const CreditosScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.teamTitle}>Jumper Army</Text>
        <View style={styles.section}>
          <Text style={styles.subtitle}></Text>
          <Text style={styles.text}>
            5°B BIS DESARROLLO DE APLICACIONES MÓVILES
          </Text>
          <Text style={styles.text}>Docente: Ana Laura Lara Chairez</Text>
          <Text style={styles.text}>Fecha de entrega: 24/04/2026</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Desarrolladores</Text>

        <View style={styles.card}>
          <Text style={styles.name}>Galvan Rios Jose Sinohe</Text>
          <Text style={styles.role}>Programación y Ensamblaje del carrito</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.name}>Guerrero Flores Jonathan Rene</Text>
          <Text style={styles.role}>Ensamblaje y Mapeo del carrito</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.name}>Rangel Vázquez Luis Adrián</Text>
          <Text style={styles.role}>Ensamblaje y Programación del carrito</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.name}>Vazquez Hernandez Jesus</Text>
          <Text style={styles.role}>Programación y Mapeo del carrito</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Tecnologías Utilizadas</Text>
        <Text style={styles.text}>• React Native (Expo)</Text>
        <Text style={styles.text}>• React Navigation</Text>
        <Text style={styles.text}>• JavaScript (ES6+)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Institución</Text>
        <Text style={styles.text}>Universidad Tecnológica de Durango</Text>
        <Text style={styles.text}>Carrera: Tecnologías de la Información</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation?.goBack()}
      >
        <Text style={styles.buttonText}>Volver al Inicio</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: "center",
    marginTop: 10,
  },
  teamTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#007aff",
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    color: "#666",
    fontWeight: "500",
  },
  section: {
    marginBottom: 25,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 5,
  },
  card: {
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#007bff",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  role: {
    fontSize: 14,
    color: "#007aff",
    marginTop: 2,
    fontStyle: "italic",
  },
  text: {
    fontSize: 16,
    color: "#444",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CreditosScreen;
