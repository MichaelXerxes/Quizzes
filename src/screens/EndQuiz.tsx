import React, { Component } from "react";
import { RouteProp } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  EndGameScreenNavigationProp,
  EndGameScreenRouteProp,
} from "../types/navigation.types";
import { useColorContext } from "../mobx/ColorsStore";

export interface EndGameProps {
  navigation?: EndGameScreenNavigationProp;
  route?: EndGameScreenRouteProp;
}
interface State {}

const EndGame: React.FC<EndGameProps> = ({ navigation, route }) => {
  if (!route || !route.params) {
    return (
      <View>
        <Text>Error: Invalid route or missing parameters!</Text>
      </View>
    );
  }

  const { quizType, numberQuestions, goodAnswers, totalTime } = route.params;
  const { colors } = useColorContext();

  const formatTime = (seconds: number): string => {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    return `${minutes} min ${remainingSeconds} sec`;
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.secondary,
    },
    title: {
      color: "black",
      fontSize: 32,
      marginBottom: 20,
      textShadowColor: "rgba(0, 0, 0, 0.3)",
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 4,
    },
    resultContainer: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      shadowColor: "rgba(0, 0, 0, 0.3)",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 10,
      width: "90%",
      alignItems: "center",
    },
    resultText: {
      fontSize: 18,
      marginBottom: 10,
    },
    resultValue: {
      fontWeight: "bold",
    },
  });

  return (
    <ImageBackground
      source={require("../assets/ai-images/endfireworks.png")}
      style={styles.container}
    >
      <View style={styles.resultContainer}>
        <Text style={styles.title}>Game Over!</Text>
        <Text style={styles.resultText}>
          Quiz Type: <Text style={styles.resultValue}>{quizType}</Text>
        </Text>
        <Text style={styles.resultText}>
          Number of Questions:{" "}
          <Text style={styles.resultValue}>{numberQuestions}</Text>
        </Text>
        <Text style={styles.resultText}>
          Good Answers: <Text style={styles.resultValue}>{goodAnswers}</Text>
        </Text>
        <Text style={styles.resultText}>
          Time Spent:{" "}
          <Text style={styles.resultValue}>{formatTime(totalTime)}</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default EndGame;
