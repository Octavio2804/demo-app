import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { PlayerContext } from '../playercontext/PlayerContext';
import { Image } from 'react-native-web';
const img = require("../assets/img/FONDO1.jpg")

const Juego = ({ route, navigation }) => {
    const { players } = React.useContext(PlayerContext);
    const [votes, setVotes] = React.useState({});
    const [currentTurn, setCurrentTurn] = React.useState(0);
  
    useEffect(() => {
        setCurrentTurn(0);
      }, [route]);

    React.useEffect(() => {
      if (currentTurn === players.length) {
        navigation.navigate('Resultado', { votes, players });
      }
    }, [currentTurn, players, navigation, votes]);
  
    const handleVote = (player) => {
      setVotes({ ...votes, [player]: (votes[player] || 0) + 1 });
      setCurrentTurn(currentTurn + 1);
    };
  
    return (
      <View>
      <ImageBackground source={img} style={styles.fotofondo} resizeMode='cover'>
        <Text style={styles.enunciado}>Turno actual: {currentTurn + 1}</Text>
        <FlatList
          data={players}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
            <TouchableOpacity style={styles.botonvotar}>
              <Text style={styles.nombre}>{item}</Text>
            </TouchableOpacity>
              {/* <Button title="Votar" onPress={() => handleVote(item)} color={"#4281A4"} /> */}
            </View>
          )}
        />
        </ImageBackground>
      </View>
    );
  };
  
export default Juego;

const styles = StyleSheet.create({
    fotofondo: {
        height: "100%"
      },
      enunciado: {
        color:  "white",
        fontSize: 25,
        textAlign: "center",
        padding: 10,
        margin: 10
      },
      nombre: {
        color:  "white",
        fontSize: 20,
        textAlign: "center",
        padding: 7,
        margin: 7
      },
      botonvotar: {
        backgroundColor: "#272727",
        borderWidth: 1,
        borderColor: "#F2EFEA",
        margin: 20,
      }
})