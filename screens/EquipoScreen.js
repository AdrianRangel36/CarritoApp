import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function EquipoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Jumper Army</Text>
      <View style={styles.content}>
        <Text style={styles.label}>Miembros del equipo:</Text>
        <Text style={styles.member}>- Galvan Rios Jose Sinohe</Text>
        <Text style={styles.text}>Rol: Programación del carrito,Ensamblaje del carrito</Text>
        <Text style={styles.member}>- Guerrero Flores Jonathan Rene</Text>
        <Text style={styles.text}>Rol: Ensamblaje del carrito, Mapeo del carrito</Text>
        <Text style={styles.member}>- Rangel Vázquez Luis Adrián</Text>
        <Text style={styles.text}>Rol: Ensamblaje del carrito,Programación del carrito</Text>
        <Text style={styles.member}>- Vazquez Hernadez Jesus</Text>
        <Text style={styles.text}>Rol: Programación del carrito, Mapeo del carrito</Text>
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
  text: {
    fontSize: 15,
    color: "#666",
    marginBottom: 15,
    lineHeight: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginTop: 15,
    marginBottom: 10,
  },
  member: {
    fontSize: 16,
    color: "#555",
    marginVertical: 5,
  },
});
