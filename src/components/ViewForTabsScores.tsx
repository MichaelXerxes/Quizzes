import React, { Component } from "react";
import { RouteProp } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";

import { SelectScreenNavigationProp } from "../types/navigation.types";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Entypo";
import { Tab, TabView } from "@rneui/themed";
import userQuizStore from "../user-store/UserStore";
import { observer } from "mobx-react-lite";
import { COLORS } from "../consts/COLORS";
import { WIDTH_USER_SCREEN } from "../consts/DIMENSSIONS";

interface QuizData {
  time: number;
  numberGoodQuestions: number;
  numberOfAllQuestions: number;
}
interface Props {
  navigation: SelectScreenNavigationProp;
  data: QuizData[];
}

interface CustomTabItemProps {
  label: string;
  iconName: string;
}
interface DisplaySectionColumnProps {
  sectionData: QuizData[];
  x: number;
  sectionTitle: string;
}
interface State {}
const dataNumbers = [1, 3, 5, 10, 15, 20, 25, 50];
const ViewForTabsScores: React.FC<Props> = ({ data }) => {
  const [index, setIndex] = React.useState(0);
  const [quizDataList, setQuizDataList] = React.useState(data);

  const DisplaySectionColumn: React.FC<DisplaySectionColumnProps> = ({
    sectionData,
    x,
    sectionTitle,
  }) => {
    const filteredData = sectionData
      .filter((quiz) => quiz.numberOfAllQuestions === x)

      .sort((a, b) => {
        if (a.numberGoodQuestions === b.numberGoodQuestions) {
          return a.time - b.time;
        }
        return b.numberGoodQuestions - a.numberGoodQuestions;
      });

    const top5Quizzes = filteredData.slice(0, 5);
    const changeTime = (time: number) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;

      return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    };
    return (
      <View style={styles.itemMainContainer}>
        <Text style={styles.title}>{sectionTitle}</Text>
        {top5Quizzes.map((quiz, index) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <Text style={styles.textItemlongPart}>
                You answered : {quiz.numberGoodQuestions}/
                {quiz.numberOfAllQuestions} questions.
              </Text>
              <Text style={styles.textItemshortPart}>
                Time: {changeTime(quiz.time)}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <ImageBackground
      source={require("../assets/ai-images/scoresB.jpg")}
      style={styles.container}
    >
      <DisplaySectionColumn
        sectionData={quizDataList}
        x={1}
        sectionTitle="1 Question"
      />
      <DisplaySectionColumn
        sectionData={quizDataList}
        x={3}
        sectionTitle="3 Question"
      />
      <DisplaySectionColumn
        sectionData={quizDataList}
        x={5}
        sectionTitle="5 Question"
      />
      <DisplaySectionColumn
        sectionData={quizDataList}
        x={10}
        sectionTitle="10 Question"
      />
      <DisplaySectionColumn
        sectionData={quizDataList}
        x={15}
        sectionTitle="15 Question"
      />
      <DisplaySectionColumn
        sectionData={quizDataList}
        x={20}
        sectionTitle="20 Question"
      />
      <DisplaySectionColumn
        sectionData={quizDataList}
        x={25}
        sectionTitle="25 Question"
      />
      <DisplaySectionColumn
        sectionData={quizDataList}
        x={50}
        sectionTitle="50 Question"
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: WIDTH_USER_SCREEN,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: COLORS.cream,
  },
  itemMainContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    marginBottom: 3,
    flexDirection: "row",
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.red,
    borderTopColor: COLORS.yellow,
    borderTopWidth: 0.5,

    alignItems: "center",
  },
  textItemlongPart: {
    flex: 2,
    fontSize: 15,
    color: COLORS.white,
    marginLeft: 16,
  },
  textItemshortPart: {
    flex: 1,
    marginLeft: 30,
    fontSize: 15,
    color: COLORS.white,
  },
});
export default observer(ViewForTabsScores);
