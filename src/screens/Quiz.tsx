import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  EndGameScreenNavigationProp,
  QuizScreenRouteProp,
} from "../types/navigation.types";
import AnimatedComponent from "../components/AnimatedComponent";
import { questionsReactJSsetOne } from "../allQuestions/react-js/react_js_set_one";
import { questionsReactNativeSsetOne } from "../allQuestions/react-native/react_native_set_one";
import { questionsTypeScriptSsetOne } from "../allQuestions/typescript/typescript_set_one";
import ShakingQuestion from "../animated/shaking";
import { Question } from "../interfaces/question";
import { useColorContext } from "../mobx/ColorsStore";
import userQuizStore from "../user-store/UserStore";
import { observer } from "mobx-react-lite";

const { height } = Dimensions.get("window");

interface Props {
  navigation?: EndGameScreenNavigationProp;
  route?: QuizScreenRouteProp;
}

interface State {
  totalTime: number;
  correctAnswers: number;
}

const timingsArray = [1000, 1500, 2000];
const greenColors = ["#A7D88C", "#8CCB76", "#76BF62"];
const redColors = ["#F29B91", "#E57373", "#E53935"];

const Quiz: React.FC<Props> = ({ navigation, route }) => {
  if (
    !route ||
    !route.params ||
    !route.params.quizType ||
    !route.params.numberQuestions
  ) {
    return (
      <View>
        <Text>Error: Invalid route or missing parameters!</Text>
      </View>
    );
  }

  const { quizType, numberQuestions } = route.params;
  const { colors, setColors } = useColorContext();

  const [answersSelected, setAnswersSelected] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [newMixedQuestions, setNewMixedQuestions] = useState<string[]>([]);
  const [gameState, setGameState] = useState<State>({
    totalTime: 0,
    correctAnswers: 0,
  });
  const [time, setTime] = useState<number>(0);
  const [questions, setQuestions] = useState<Question[]>([]);

  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const [bgColor, setBgColor] = useState(colors.white);

  function getRandomElements<T>(arr: T[], n: number): T[] {
    if (n > arr.length) {
      throw new Error("n cannot be greater than the length of the array");
    }

    let shuffledArray = [...arr].sort(() => 0.5 - Math.random());

    return shuffledArray.slice(0, n);
  }

  const flashBackground = (colorsProp: string[]) => {
    let i = 0;
    const interval = setInterval(() => {
      setBgColor(colorsProp[i]);
      i += 1;
      if (i === colorsProp.length) {
        clearInterval(interval);
        setBgColor(colors.lightBlue);
      }
    }, 700);
  };

  useEffect(() => {
    if (quizType === "React JS") {
      setQuestions(getRandomElements(questionsReactJSsetOne, numberQuestions));
    }
    if (quizType === "React Native") {
      setQuestions(
        getRandomElements(questionsReactNativeSsetOne, numberQuestions)
      );
    }
    if (quizType === "TypeScript") {
      setQuestions(
        getRandomElements(questionsTypeScriptSsetOne, numberQuestions)
      );
    }
  }, []);

  const handleAnimatedPress = (id: string, answer: string) => {
    if (!selectedId) {
      setSelectedId(id);
      setSelectedAnswer(answer);
      setAnswersSelected(true);
      setIsAnswerCorrect(handleAnswerCheck(answer));
    }
  };

  const handleAnswerCheck = (selectedAnswer: string): boolean => {
    const currentQuestion = questions[currentQuestionIndex];

    const trimmedSelectedAnswer = selectedAnswer.trim();
    const trimmedGoodAnswer = currentQuestion.goodAnswer.trim();
    console.log("1 trimmedSelectedAnswer  is:", trimmedSelectedAnswer);
    console.log("1.1 selectedAnswer  is:", selectedAnswer);
    console.log("2  trimmedGoodAnswer:", trimmedGoodAnswer);

    if (trimmedGoodAnswer === trimmedSelectedAnswer) {
      flashBackground(greenColors);
      //setBgColor(COLORS.green);
      console.log("3 GoooooooooooooooooooooooooooooooooooooD");
      return true;
    }
    flashBackground(redColors);
    // setBgColor(COLORS.red);
    console.log("BaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaD");
    return false;
  };

  const handleNextQuestion = async () => {
    if (isAnswerCorrect) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedId("");
      setAnswersSelected(false);
    } else {
      // End Screen

      userQuizStore.setTime(time);
      userQuizStore.setNumberGoodQuestions(correctAnswers);
      userQuizStore.setNumberOfAllQuestions(questions.length);
      userQuizStore.setQuizzType(quizType);

      await userQuizStore.storeQuizData();
      const number = correctAnswers.toString();
      navigation?.navigate("EndGame", {
        quizType: quizType,
        numberQuestions: questions.length,
        goodAnswers: number,
        totalTime: time,
      });
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
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      const mixedAnswers = mixQuestions(questions[currentQuestionIndex]);
      setNewMixedQuestions(mixedAnswers);
    }
  }, [currentQuestionIndex, questions]);

  const mixedAnswers = newMixedQuestions;

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 20,
    },
    buttonNext: {
      width: "100%",
      height: 50,
      borderWidth: 3,
      borderRadius: 10,
      borderColor: colors.primary,
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
    goodAnswer: {
      backgroundColor: colors.green,
    },
    badNaswer: {
      backgroundColor: colors.red,
    },
  });

  return (
    <View style={{ ...styles.container, backgroundColor: bgColor }}>
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
              onPress={() => handleAnimatedPress("id1", mixedAnswers[0])}
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
              onPress={() => handleAnimatedPress("id2", mixedAnswers[1])}
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
              onPress={() => handleAnimatedPress("id3", mixedAnswers[2])}
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
              onPress={() => handleAnimatedPress("id4", mixedAnswers[3])}
              question={mixedAnswers[3]}
            />
            {answersSelected === true ? (
              <TouchableOpacity
                onPress={handleNextQuestion}
                style={styles.buttonNext}
              >
                <Text style={styles.buttonNextText}>Next Question</Text>
              </TouchableOpacity>
            ) : (
              <View></View>
            )}
          </View>
        </View>
      ) : (
        <Text style={styles.head}>Loading questions...</Text>
      )}
    </View>
  );
};

export default observer(Quiz);
