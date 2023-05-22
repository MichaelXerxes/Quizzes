import React, { Component } from "react";
import { RouteProp } from "@react-navigation/native";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons";
import { GameScreenNavigationProp } from "../types/navigation.types";

interface Props {
  navigation: GameScreenNavigationProp;
}
interface State {}

const Game: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "black",
    marginTop: 50,
    fontSize: 28,
  },
});
export default Game;
