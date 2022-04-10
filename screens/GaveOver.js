import { Text, StyleSheet } from "react-native";

function GameOver() {
  return <Text style={styles.text}>HOREEE</Text>;
}

export default GameOver;

const styles = StyleSheet.create({
  text: {
    padding: 50,
    marginTop: 100,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
