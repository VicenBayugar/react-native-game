import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Card from "../components/Card";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNumber = Math.floor(Math.random() * (max - min) + min);
  if (rndNumber === exclude) return generateNumber(min, max, exclude);
  else return rndNumber;
};

const GameScreen = () => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100)
  );
  return (
    <View style={styles.screen}>
      <Text style={styles.suposicion}>La suposición del oponente:</Text>
      <Text style={styles.suposicion}>{currentGuess}</Text>
      <Card>
        <View style={styles.buttonContainer}>
          <Button title="MENOR" onPress={() => {}} />
          <Button title="MAYOR" onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 11,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    width: 300,
    maxWidth: "80%",
    marginBottom: 30,
  },
  suposicion: {
    fontSize: 20,
    marginVertical: 20,
  },
});

export default GameScreen;
