import React, { Component } from "react";
import { RouteProp } from "@react-navigation/native";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import {
  QuizScreenNavigationProp,
  QuizScreenRouteProp,
} from "../types/navigation.types";
import AnimatedComponent from "../components/animation";
const { height } = Dimensions.get("window");

interface Props {
  navigation?: QuizScreenNavigationProp;
  route?: QuizScreenRouteProp;
}

interface State {}

const Quiz: React.FC<Props> = ({ navigation, route }) => {
  if (!route) {
    return (
      <View>
        <Text>Error: No route provided!</Text>
      </View>
    );
  }
  const { quizType } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Quiz Quiz {quizType}</Text>
      <AnimatedComponent />
    </View>
  );
};
const styles = StyleSheet.create({});
export default Quiz;
