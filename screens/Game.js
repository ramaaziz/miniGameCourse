import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import Title from "../components/Title";
import NumberCountainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

function generateRandom(min, max, exclude) {
  const random = Math.floor(Math.random() * (max - min)) + min;

  if (random === exclude) {
    return generateRandom(min, max, exclude);
  } else {
    return random;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ useNumber, onGameOver }) {
  const initialGuess = generateRandom(1, 100, useNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === useNumber) {
      onGameOver();
    }
  }, [currentGuess, useNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < useNumber) ||
      (direction === "greater" && currentGuess > useNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRandom = generateRandom(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandom);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberCountainer>{currentGuess}</NumberCountainer>
      <View>
        <Text style={styles.text}>Higher or lower</Text>
      </View>
      <View style={styles.button}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          +
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
          -
        </PrimaryButton>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
  },
});
