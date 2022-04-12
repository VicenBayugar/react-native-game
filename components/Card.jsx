import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.inputContainer, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    shadowColor: "black",
    borderRadius: 7,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
  },
});

export default Card;
