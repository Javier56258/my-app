import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButonProps {
  text: string;
  onClick: () => void;
}

const Buton: React.FC<ButonProps> = ({ text, onClick }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E8B589',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Buton;