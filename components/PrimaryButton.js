import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("pressed");
  }
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={styles.innerContainer}
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
    width: 100,
  },
  innerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
