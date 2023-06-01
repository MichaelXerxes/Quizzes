import React, { Component } from "react";
import { RouteProp } from "@react-navigation/native";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";

import { SelectScreenNavigationProp } from "../types/navigation.types";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Entypo";
import { Tab, TabView } from "@rneui/themed";
import userQuizStore from "../user-store/UserStore";
import { observer } from "mobx-react-lite";

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
    console.log("sectionData:", sectionData);
    const top5Quizzes = filteredData.slice(0, 5);
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{sectionTitle}</Text>
        {top5Quizzes.map((quiz, index) => {
          return (
            <View key={index} style={{ flexDirection: "row" }}>
              <Text>
                Number of Good Questions: {quiz.numberGoodQuestions}/
                {quiz.numberOfAllQuestions}
              </Text>
              <Text>Time: {quiz.time}</Text>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <DisplaySectionColumn
        sectionData={quizDataList}
        x={0}
        sectionTitle="0 Good Questions"
      />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "black",
    marginTop: 50,
    fontSize: 28,
  },
});
export default observer(ViewForTabsScores);
