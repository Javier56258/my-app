import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Medidas from './assets/components/Medidas';
import { StyleSheet, Text, View } from 'react-native';
import Buton from './assets/components/Buton';

const Stack = createStackNavigator();

function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la Exercise-app</Text>
      <Text style={styles.subtitle}>
        Esta app es una beta para probar capacidades en creación de aplicaciones y
      </Text>
      <Buton title="Ejercicios" onPress={() => alert('¡Hola mundo!')} />
      <Buton title="Crea rutina" onPress={() => alert('¡Hola mundo!')} />
      <Buton title="Medidas" onPress={() => navigation.navigate('Medidas')} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Medidas" component={Medidas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9DCDB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#E8B589', // Color para el texto
    fontSize: 20, // Tamaño de fuente opcional
    fontWeight: 'bold', // Negrita opcional
  },
  subtitle: {
    color: '#E8B589', // Color para el texto
    fontSize: 16, // Tamaño de fuente opcional
  },
});
