import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
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
const timingsArray = [1000, 1500, 2000];
const Quiz: React.FC<Props> = ({ navigation, route }) => {
  if (!route) {
    return (
      <View>
        <Text>Error: No route provided!</Text>
      </View>
    );
  }
  console.log();
  const { quizType, numberQuestions } = route.params;
  const [answersSelected, setAnswersSelected] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const handleAnimatedPress = (id: string) => {
    if (!answersSelected) {
      setSelectedId(id);
    }
    setAnswersSelected(true);
    console.log(`Animated with id ${id} was pressed.`);
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        Quiz Quiz {quizType} number : {numberQuestions}
      </Text>
      <AnimatedComponent
        x={-600}
        y={0}
        triggerAnimation={answersSelected ? true : false}
        timing={
          selectedId === "id1"
            ? 500
            : timingsArray[Math.floor(Math.random() * timingsArray.length)]
        }
        id="id1"
        onPress={handleAnimatedPress}
      />
      <AnimatedComponent
        x={600}
        y={0}
        triggerAnimation={answersSelected ? true : false}
        timing={
          selectedId === "id2"
            ? 500
            : timingsArray[Math.floor(Math.random() * timingsArray.length)]
        }
        id="id2"
        onPress={handleAnimatedPress}
      />
      <AnimatedComponent
        x={-600}
        y={0}
        triggerAnimation={answersSelected ? true : false}
        timing={
          selectedId === "id3"
            ? 500
            : timingsArray[Math.floor(Math.random() * timingsArray.length)]
        }
        id="id3"
        onPress={handleAnimatedPress}
      />
      <AnimatedComponent
        x={600}
        y={0}
        triggerAnimation={answersSelected ? true : false}
        timing={
          selectedId === "id4"
            ? 500
            : timingsArray[Math.floor(Math.random() * timingsArray.length)]
        }
        id="id4"
        onPress={handleAnimatedPress}
      />
      <TouchableOpacity>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({});
export default Quiz;
