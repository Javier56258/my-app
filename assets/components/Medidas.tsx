import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { Card } from './Card';
import Buton from './Buton';
import { setupDatabase, insertMedidas } from './DataBase/database';

export default function Medidas() {
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
    const fechaActual = new Date().toLocaleString(); // Obtener la fecha y hora actual
    alert(`Medidas guardadas:\nFecha: ${fechaActual}\nPeso: ${peso} kg\nEstatura: ${estatura} cm\nCuello: ${cuello} cm\nCintura: ${cintura} cm\nCadera: ${cadera} cm\nBrazo: ${brazo} cm\nMuslo: ${muslo} cm\nPantorrilla: ${pantorrilla} cm\nPecho: ${pecho} cm`);
    // Aquí puedes agregar la lógica para guardar las medidas en la base de datos, incluyendo la fecha.
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Medidas</Text>

        <Buton title="Stats" onPress={() => alert('¡Hola mundo!')} />

        {/* Carta para Altura y Peso */}
        <Card>
          <Text style={styles.cardTitle}>Altura y Peso</Text>
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
        </Card>

        <Card>
          <Text style={styles.cardTitle}>Medidas Específicas</Text>
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
        </Card>

        <Buton title="Guardar" onPress={guardarMedidas} />
        <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#E9DCDB',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    color: '#E8B589',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  label: {
    color: '#333',
    fontSize: 14,
    width: '40%',
    textAlign: 'right',
    marginRight: 10,
  },
  input: {
    height: 40,
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});