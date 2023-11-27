import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import ComoJugar from './ComoJugar'

export default function Inicio ({navigation}) {
  return (
    <View style={styles.fondo}>
      <Text style={styles.titulo}>DEMOCRACIA</Text>
      <Text style={styles.subtitulo}>El juego que nos recuerda que no siempre es buena idea</Text>
      {/* <Button title='Iniciar' style={styles.boton} /> */}
      <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed')}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Instrucciones')}>
        <Text style={styles.buttonText}>Como Jugar</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    titulo: {
      fontSize: 27,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'red',
      marginTop: 50,
      marginBottom: 50,
    },
    subtitulo: {
      fontSize: 19,
      textAlign: 'center',
      color: 'white',
      marginTop: 10,
      padding: 10,
      marginBottom: 30,
    },
    fondo: {
      backgroundColor: '#28262C',
      height: 1500,
      paddingTop: 150,
    },
    button: {
      backgroundColor: '#AD343E',
      padding: 13,
      margin: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  })