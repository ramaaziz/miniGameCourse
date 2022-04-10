import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./screens/StartGame";
import GameScreen from "./screens/Game";
import GameOver from "./screens/GaveOver";

export default function App() {
  const [useNumber, setUseNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pieckedNumber) {
    setUseNumber(pieckedNumber);
    setGameIsOver(false);
  }

  let screen = <StartGame onPickNumber={pickedNumberHandler} />;

  if (useNumber) {
    screen = <GameScreen useNumber={useNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && useNumber) {
    screen = <GameOver />;
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/miniGameBackground.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
});
