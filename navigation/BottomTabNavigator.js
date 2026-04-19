import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeStackNavigator } from './HomeStackNavigator';
import FuncionamientoScreen from '../screens/FuncionamientoScreen';
import GaleriaScreen from '../screens/GaleriaScreen';
import ConclusionesScreen from '../screens/ConclusionesScreen';

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Funcionamiento') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Galeria') {
            iconName = focused ? 'images' : 'images-outline';
          } else if (route.name === 'Conclusiones') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStackNavigator}
        options={{
          title: 'Inicio',
        }}
      />
      <Tab.Screen 
        name="Funcionamiento" 
        component={FuncionamientoScreen}
        options={{
          title: 'Funcionamiento',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen 
        name="Galeria" 
        component={GaleriaScreen}
        options={{
          title: 'Galería',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen 
        name="Conclusiones" 
        component={ConclusionesScreen}
        options={{
          title: 'Conclusiones',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  );
}
