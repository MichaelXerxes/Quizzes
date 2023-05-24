import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  QuizScreenNavigationProp,
  QuizScreenRouteProp,
} from "../types/navigation.types";
import AnimatedComponent from "../components/animation";
import { questionsReactJSsetOne } from "../allQuestions/react-js/react_js_set_one";
import ShakingQuestion from "../animated/shaking";
import { Question } from "../interfaces/question";
import { COLORS } from "../consts/COLORS";
import userQuizStore from "../user-store/UserStore";
import { observer } from "mobx-react-lite";

const { height } = Dimensions.get("window");

interface Props {
  navigation?: QuizScreenNavigationProp;
  route?: QuizScreenRouteProp;
}

interface State {
  time: number;
}

const timingsArray = [1000, 1500, 2000];

const Quiz: React.FC<Props> = ({ navigation, route }) => {
  if (!route) {
    return (
      <View>
        <Text>Error: No route provided!</Text>
      </View>
    );
  }

  const { quizType, numberQuestions } = route.params;

  const [answersSelected, setAnswersSelected] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [newMixedQuestions, setNewMixedQuestions] = useState<string[]>([]);
  const [timeGame, setTimeGame] = useState<State>({ time: 0 });
  const [questions, setQuestions] = useState<Question[]>([]);
  function getRandomElements<T>(arr: T[], n: number): T[] {
    if (n > arr.length) {
      throw new Error("n cannot be greater than the length of the array");
    }

    let shuffledArray = [...arr].sort(() => 0.5 - Math.random());

    return shuffledArray.slice(0, n);
  }
  useEffect(() => {
    setQuestions(getRandomElements(questionsReactJSsetOne, numberQuestions));
  }, []);
  const handleAnimatedPress = (id: string) => {
    if (!selectedId) {
      setSelectedId(id);
      setAnswersSelected(true);
    }
  };

  const handleNextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedId("");
      setAnswersSelected(false);
    } else {
      // End Screen
      userQuizStore.setNumberGoodQuestions(
        userQuizStore.numberGoodQuestions + 1
      );

      userQuizStore.setNumberOfAllQuestions(
        userQuizStore.numberOfAllQuestions + 1
      );

      userQuizStore.setTime(timeGame.time);
      await userQuizStore.storeQuizData();
    }
  };

  const mixQuestions = (answer: Question): string[] => {
    const { answerOne, answerTwo, answerThree, answerFour } = answer;
    const answers = [answerOne, answerTwo, answerThree, answerFour];
    const mixedAnswers: string[] = [];

    while (answers.length > 0) {
      const randomIndex = Math.floor(Math.random() * answers.length);
      mixedAnswers.push(answers[randomIndex]);
      answers.splice(randomIndex, 1);
    }

    return mixedAnswers;
  };
  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeGame((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);
  useEffect(() => {
    if (questions.length > 0) {
      const mixedAnswers = mixQuestions(questions[currentQuestionIndex]);
      setNewMixedQuestions(mixedAnswers);
    }
  }, [currentQuestionIndex, questions]);

  const mixedAnswers = newMixedQuestions;

  return (
    <View style={styles.container}>
      {questions.length > 0 ? (
        <View>
          <Text style={styles.head}>
            Quiz {quizType} question No: {questions[currentQuestionIndex].id}
          </Text>

          <View key={questions[currentQuestionIndex].id}>
            <ShakingQuestion
              makeShake={answersSelected ? true : false}
              question={questions[currentQuestionIndex].question}
            />

            <AnimatedComponent
              x={-600}
              y={0}
              triggerAnimation={answersSelected ? true : false}
              timing={
                selectedId === "id1"
                  ? 500
                  : timingsArray[
                      Math.floor(Math.random() * timingsArray.length)
                    ]
              }
              id="id1"
              onPress={handleAnimatedPress}
              question={mixedAnswers[0]}
            />
            <AnimatedComponent
              x={600}
              y={0}
              triggerAnimation={answersSelected ? true : false}
              timing={
                selectedId === "id2"
                  ? 500
                  : timingsArray[
                      Math.floor(Math.random() * timingsArray.length)
                    ]
              }
              id="id2"
              onPress={handleAnimatedPress}
              question={mixedAnswers[1]}
            />
            <AnimatedComponent
              x={-600}
              y={0}
              triggerAnimation={answersSelected ? true : false}
              timing={
                selectedId === "id3"
                  ? 500
                  : timingsArray[
                      Math.floor(Math.random() * timingsArray.length)
                    ]
              }
              id="id3"
              onPress={handleAnimatedPress}
              question={mixedAnswers[2]}
            />
            <AnimatedComponent
              x={600}
              y={0}
              triggerAnimation={answersSelected ? true : false}
              timing={
                selectedId === "id4"
                  ? 500
                  : timingsArray[
                      Math.floor(Math.random() * timingsArray.length)
                    ]
              }
              id="id4"
              onPress={handleAnimatedPress}
              question={mixedAnswers[3]}
            />
            <TouchableOpacity
              onPress={handleNextQuestion}
              style={styles.buttonNext}
            >
              <Text style={styles.buttonNextText}>Next Question</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Text style={styles.head}>Loading questions...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  buttonNext: {
    width: 300,
    height: 50,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: COLORS.primary,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
  buttonNextText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  head: {
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default observer(Quiz);
