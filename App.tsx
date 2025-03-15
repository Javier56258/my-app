import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExampleComponent from './assets/components/ExampleComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la app </Text>
      <Text style={styles.subtitle}>¡Hola mundo!</Text>
      <ExampleComponent />
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
