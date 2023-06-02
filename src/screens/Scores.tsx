import React, { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons";
import { SelectScreenNavigationProp } from "../types/navigation.types";
import { Tab, TabView } from "@rneui/themed";
import ViewForTabsScores from "../components/ViewForTabsScores";
import userQuizStore from "../user-store/UserStore";
import { observer } from "mobx-react-lite";
import { COLORS } from "../consts/COLORS";
interface Props {
  navigation: SelectScreenNavigationProp;
}
interface State {}

const Scores: React.FC<Props> = ({ navigation }) => {
  const [outerTabIndex, setOuterTabIndex] = useState(0);
  const [innerTabIndex, setInnerTabIndex] = useState(0);
  const [quizDataList, setQuizDataList] = React.useState(
    userQuizStore.quizDataList
  );
  const outerTabItems = ["React JS", "React Native", "TypeScript"];
  const innerTabItems = [1, 3, 5, 10, 15, 20, 25, 50];
  React.useEffect(() => {
    const updateQuizData = () => {
      const data = userQuizStore.quizDataList.slice();
      setQuizDataList(data);
    };

    const unsubscribe = userQuizStore.subscribe(updateQuizData);
    updateQuizData();
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
      <Tab value={outerTabIndex} onChange={setOuterTabIndex} dense>
        {outerTabItems.map((item, index) => (
          <Tab.Item key={index}>{item}</Tab.Item>
        ))}
      </Tab>

      <TabView
        value={outerTabIndex}
        onChange={setOuterTabIndex}
        animationType="spring"
      >
        {outerTabItems.map((quizType, outerIndex) => {
          const filteredData = quizDataList.filter(
            (quiz) => quiz.quizzType === quizType
          );

          return (
            <TabView.Item key={outerIndex} style={styles.container}>
              <ViewForTabsScores navigation={navigation} data={filteredData} />
            </TabView.Item>
          );
        })}
      </TabView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "black",
    marginTop: 50,
    fontSize: 28,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },
  containerLeft: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    width: "100%",
  },
  containerRight: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    width: "100%",
  },
});

export default observer(Scores);
