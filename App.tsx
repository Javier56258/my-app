import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExampleComponent from './assets/components/ExampleComponent';
import Buton from './assets/components/Buton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la Exercise-app </Text>
      <Text style={styles.subtitle}>
        Esta app es una beta para probar capacidades en creación de aplicaciones y 
        </Text>
      <ExampleComponent />
      <Buton text="Ejercicios" onClick={() => alert('¡Hola mundo!')} />
      <Buton text="Crea rutina" onClick={() => alert('¡Hola mundo!')} />
      <Buton text="Medidas" onClick={() => alert('¡Hola mundo!')} />
      <StatusBar style="auto" />
    </View>
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
