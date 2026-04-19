import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function CreditosScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Créditos y Contacto</Text>
        <View style={styles.content}>
            
            <Text style={styles.sectionTitle}>Datos Académicos</Text>
            <Text style={styles.text}><Text style={styles.bold}>Grupo:</Text> 5° B BIS TI</Text>
            <Text style={styles.text}><Text style={styles.bold}>Cuatrimestre:</Text> Quinto</Text>
            <Text style={styles.text}><Text style={styles.bold}>Materia:</Text> Integradora / Desarrollo Móvil</Text>
            <Text style={styles.text}><Text style={styles.bold}>Docente:</Text> Ing. Ana Laura Lara Chairez</Text>
            <Text style={styles.text}><Text style={styles.bold}>Fecha de entrega:</Text> Viernes 24 de Abril</Text>
            
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
        marginTop: 10,
        marginBottom: 15,
    },
    text: {
        fontSize: 15,
        color: '#444',
        marginBottom: 8,
    },
    bold: {
        fontWeight: 'bold',
    }
});