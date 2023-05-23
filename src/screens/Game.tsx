import React, { Component } from "react";
import { RouteProp } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons";
import { GameScreenNavigationProp } from "../types/navigation.types";
import { COLORS } from "../consts/COLORS";
import Category from "../components/Category";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  navigation: GameScreenNavigationProp;
}
interface State {}

const Game: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Screen </Text>

      <Category sourceLink="image1" quizType="ReactJS" />
      <Category sourceLink="image2" quizType="ReactNative" />
      <Category sourceLink="image3" quizType="Typescript" />
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
