import React, { Component } from "react";
import { RouteProp } from "@react-navigation/native";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons";
import { DetailScreenNavigationProp } from "../types/navigation.types";

interface Props {
  navigation: DetailScreenNavigationProp;
}
interface State {}

const Scores: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen </Text>
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
export default Scores;
