import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proyecto Final</Text>
      <Text style={styles.title}>Equipo: Jumper Army</Text>
      <Image source={require('../assets/carritopic.jpeg')} style={styles.img}/>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Equipo')}
      >
        <Text style={styles.buttonText}>Equipo de Trabajo</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Proyecto')}
      >
        <Text style={styles.buttonText}>Descripción del Proyecto</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Materiales')}
      >
        <Text style={styles.buttonText}>Materiales</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },img:{
    width:300,
    height:300
  }
});
