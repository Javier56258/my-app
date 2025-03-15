import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

interface ButonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
}

export default function Buton({ title, onPress }: ButonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#E8B589',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
        width:'80%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});