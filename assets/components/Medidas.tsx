import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CardLightPink, CardDarkBlue } from './Card';

export default function Medidas() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Medidas </Text>
        <Text style={styles.subtitle}>
          Esta app es una beta para probar capacidades en creación de aplicaciones y 
        </Text>
        <CardLightPink title="Peso" description="Ingresa tu peso" />
        <CardDarkBlue title="Estatura" description="Ingresa tu estatura" />
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },

  });