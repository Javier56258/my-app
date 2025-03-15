import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Buton from './Buton';

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return <View style={styles.container}>{children}</View>;
}

export function CardLightPink() {
  const [peso, setPeso] = useState('');
  const [estatura, setEstatura] = useState('');
  const [cuello, setCuello] = useState('');
  const [cintura, setCintura] = useState('');
  const [cadera, setCadera] = useState('');
  const [brazo, setBrazo] = useState('');
  const [muslo, setMuslo] = useState('');
  const [pantorrilla, setPantorrilla] = useState('');
  const [pecho, setPecho] = useState('');

  const guardarMedidas = () => {
    alert(`Medidas guardadas:\nPeso: ${peso} kg\nEstatura: ${estatura} cm\nCuello: ${cuello} cm\nCintura: ${cintura} cm\nCadera: ${cadera} cm\nBrazo: ${brazo} cm\nMuslo: ${muslo} cm\nPantorrilla: ${pantorrilla} cm\nPecho: ${pecho} cm`);
  };

  return (
    <Card>
      <Text style={styles.title}>Editar Medidas</Text>
      <Text style={styles.subtitle}>Ingresa tus datos a continuación:</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Peso (kg):</Text>
        <TextInput
          style={styles.input}
          placeholder="Ejemplo: 70"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Estatura (cm):</Text>
        <TextInput
          style={styles.input}
          placeholder="Ejemplo: 170"
          keyboardType="numeric"
          value={estatura}
          onChangeText={setEstatura}
        />
      </View>

      {/* Repite para los demás campos */}
      <View style={styles.row}>
        <Text style={styles.label}>Cuello (cm):</Text>
        <TextInput
          style={styles.input}
          placeholder="Ejemplo: 25"
          keyboardType="numeric"
          value={cuello}
          onChangeText={setCuello}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Cintura (cm):</Text>
        <TextInput
          style={styles.input}
          placeholder="Ejemplo: 25"
          keyboardType="numeric"
          value={cintura}
          onChangeText={setCintura}
        />
      </View>

    <View style={styles.row}>
      <Text style={styles.label}>Cadera (cm):</Text>
        <TextInput
        style={styles.input}
        placeholder="Ejemplo: 25"
        keyboardType="numeric"
        value={cadera}
        onChangeText={setCadera}
        />
    </View>
    
    <View style={styles.row}>
        <Text style={styles.label}>Brazo (cm):</Text>
        <TextInput
        style={styles.input}
        placeholder="Ejemplo: 25"
        keyboardType="numeric"
        value={brazo}
        onChangeText={setBrazo}
        />
    </View>

    <View style={styles.row}>
        <Text style={styles.label}>Muslo (cm):</Text>
        <TextInput
        style={styles.input}
        placeholder="Ejemplo: 25"
        keyboardType="numeric"
        value={muslo}
        onChangeText={setMuslo}
        />
    </View>

    <View style={styles.row}>
        <Text style={styles.label}>Pantorrilla (cm):</Text>
        <TextInput
        style={styles.input}
        placeholder="Ejemplo: 25"
        keyboardType="numeric"
        value={pantorrilla}
        onChangeText={setPantorrilla}
        />
    </View>

    <View style={styles.row}>
        <Text style={styles.label}>Pecho (cm):</Text>
        <TextInput
        style={styles.input}
        placeholder="Ejemplo: 25"
        keyboardType="numeric"
        value={pecho}
        onChangeText={setPecho}
        />
    </View>

      <Buton title="Guardar" onPress={guardarMedidas} />

      <StatusBar style="auto" />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BC7C7A',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    color: '#E8B589',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#E8B589',
    fontSize: 16,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row', // Coloca el label y el input en la misma fila
    alignItems: 'center', // Alinea verticalmente el label y el input
    marginBottom: 15, // Espaciado entre filas
    width: '100%', // Asegura que ocupe todo el ancho disponible
  },
  label: {
    color: '#333',
    fontSize: 14,
    width: '40%', // Ancho fijo o proporcional para el label
    textAlign: 'right', // Alinea el texto del label a la derecha
    marginRight: 10, // Espaciado entre el label y el input
  },
  input: {
    height: 40,
    flex: 1, // El input ocupa el espacio restante
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});