import React, { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons";
import { SelectScreenNavigationProp } from "../types/navigation.types";
import { Tab, TabView } from "@rneui/themed";
import ViewForTabsScores from "../components/ViewForTabsScores";
import userQuizStore from "../user-store/UserStore";
import { observer } from "mobx-react-lite";
import { useColorContext } from "../mobx/ColorsStore";

interface Props {
  navigation: SelectScreenNavigationProp;
}
interface State {}

const Scores: React.FC<Props> = ({ navigation }) => {
  const [outerTabIndex, setOuterTabIndex] = useState(0);

  const { colors } = useColorContext();

  const [quizDataList, setQuizDataList] = React.useState(
    userQuizStore.quizDataList
  );
  const outerTabItems = ["React JS", "React Native", "TypeScript"];

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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.dark,
      width: "100%",
    },
    item: {
      color: colors.white,
    },
    tabContainer: {
      backgroundColor: colors.dark,
    },
    indicator: {
      backgroundColor: colors.white,
    },
  });

  return (
    <>
      <Tab
        value={outerTabIndex}
        onChange={setOuterTabIndex}
        style={styles.tabContainer}
        indicatorStyle={styles.indicator}
        dense
      >
        {outerTabItems.map((item, index) => (
          <Tab.Item key={index} titleStyle={styles.item}>
            {item}
          </Tab.Item>
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

export default observer(Scores);
