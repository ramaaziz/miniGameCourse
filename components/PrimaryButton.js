import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../constants/colors";
function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    onPress();
  }
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={styles.innerContainer}
        onPress={onPress}
        android_ripple={{ color: Colors.primary2 }}
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
