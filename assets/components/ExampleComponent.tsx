import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExampleComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Este es un componente de ejemplo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default ExampleComponent;