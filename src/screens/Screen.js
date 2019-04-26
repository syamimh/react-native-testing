/* /src/screens/Screen.js */

import React from "react";
import { Text, View, StyleSheet } from "react-native";

const S = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ef473a",
    justifyContent: "center",
    alignItems: "center"
  },
  text: { fontSize: 28, color: "#fff", textAlign: "center" }
});

const Screen = ({ name }) => (
  <View style={S.container}>
    <Text style={S.text}>This is the "{name}" screen</Text>
  </View>
);

export default Screen;