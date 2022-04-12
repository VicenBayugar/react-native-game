import React, { useState } from "react";
import {
  View,
  Keyboard,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import color from "../constants/colors";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const handlerInputNumber = (text) => {
    setEnteredValue(text);
  };

  const handlerResetInput = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const handlerConfirmInput = () => {
    const choseNumber = parseInt(enteredValue);
    if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return;
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue("");
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={{ marginTop: 10 }}>
        <View style={styles.container}>
          <Text style={styles.textNumber}>Tu Seleccion</Text>
          <Text style={styles.textNumber}>{selectedNumber}</Text>
          <Button
            onPress={() => props.onStartGame(selectedNumber)}
            title="EMPEZAR JUEGO"
          ></Button>
        </View>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Card style={styles.inputContainer}>
          <Text style={styles.elegirText}>Elija un número</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalization="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={handlerInputNumber}
            value={enteredValue}
          />
          <View style={styles.botonContainer}>
            <Button
              title="Limpiar"
              onPress={handlerResetInput}
              color={color.secondary}
            />
            <Button title="Confirmar" onPress={handlerConfirmInput} />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 10.5,
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    marginVertical: 30,
  },
  elegirText: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  botonContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
  },
  input: {
    width: "20%",
  },
  container: {
    padding: 16,
    borderRadius: 10,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textNumber: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default StartGameScreen;
