import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGame({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const choseNumber = parseInt(enteredNumber);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(choseNumber);
  }
  return (
    <View style={styles.inputContainer}>
      <View>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInputHandler} style={styles.button}>
          Reset
        </PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler} style={styles.button}>
          Confirm
        </PrimaryButton>
      </View>
    </View>
  );
}

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#3b021f",
    elevation: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
});
