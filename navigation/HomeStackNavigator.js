import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import EquipoScreen from '../screens/EquipoScreen';
import ProyectoScreen from '../screens/ProyectoScreen';
import MaterialesScreen from '../screens/MaterialesScreen';

const Stack = createNativeStackNavigator();

export function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="HomeTab" 
        component={HomeScreen}
        options={{
          title: 'Inicio',
        }}
      />
      <Stack.Screen 
        name="Equipo" 
        component={EquipoScreen}
        options={{
          title: 'Equipo de Trabajo',
        }}
      />
      <Stack.Screen 
        name="Proyecto" 
        component={ProyectoScreen}
        options={{
          title: 'Descripción del Proyecto',
        }}
      />
      <Stack.Screen 
        name="Materiales" 
        component={MaterialesScreen}
        options={{
          title: 'Materiales',
        }}
      />
    </Stack.Navigator>
  );
}
