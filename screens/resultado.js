import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Resultado = ({ route, navigation }) => {
    const { votes, players } = route.params;
  
    const winner = Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b), '');
  
    return (
      <View>
        <Text>Results</Text>
        <Text>Winner: {winner}</Text>
        <Button title="Siguiente" onPress={() => navigation.navigate('Juego', { players })} />
        <Button title='Volver a Inicio' onPress={() => navigation.navigate('Inicio')} />
      </View>
    );
  };

export default Resultado

const styles = StyleSheet.create({})