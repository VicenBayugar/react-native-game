import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import React, {useState} from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  })
  if(!loaded) return <AppLoading/>

  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handlerStartGame} />

  if (userNumber) {
    content = <GameScreen/>
  }
  return (
    <View style={styles.screen}>
      <Header title={"Adivina el Número"}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
