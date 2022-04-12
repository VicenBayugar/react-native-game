import React from "react";
import { View, Text, StyleSheet } from "react-native";
import color from "../constants/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    flex: 1.5,
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: "OpenSansBold",
  },
});

export default Header;
