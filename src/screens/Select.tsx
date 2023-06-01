import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  SelectScreenNavigationProp,
  SelectcreenRouteProp,
} from "../types/navigation.types";
import { COLORS } from "../consts/COLORS";

interface Props {
  navigation?: SelectScreenNavigationProp;
  route?: SelectcreenRouteProp;
}
interface State {
  selectedValue: number;
}
const data = [1, 3, 5, 10, 15, 20, 25, 50];

const Select: React.FC<Props> = ({ navigation, route }) => {
  const [selectedValue, setSelectedValue] = useState(1);
  const colors = [
    "white",
    "#E0D88F",
    "#D88D2F",
    "#9F9F9F",
    "#12db47",
    "#ebeae6",
    "#7efcf2",
  ];
  const [colorIndex, setColorIndex] = useState(0);
  const handlePress = (item: number) => {
    setSelectedValue(item);
  };

  if (!route || !route.params) {
    return (
      <View>
        <Text>Error: No route params provided!</Text>
      </View>
    );
  }
  const { quizType } = route.params;
  const [quiz, setQuiz] = useState(quizType);
  const onPress = () => {
    navigation?.navigate("Quiz", {
      quizType: quiz,
      numberQuestions: selectedValue,
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, 500);

    return () => clearInterval(interval);
  }, [colorIndex]);
  return (
    <ImageBackground
      source={require("../assets/ai-images/marksq.png")}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={[styles.title, { color: colors[colorIndex] }]}>
          Select number of
        </Text>
        <Text style={[styles.title, { color: colors[colorIndex] }]}>
          {" "}
          Questions!
        </Text>
        <View style={styles.scrollViewContainer}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}
          >
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handlePress(item)}
                style={styles.touchableItem}
              >
                <Text
                  style={[
                    styles.item,
                    selectedValue === item && styles.selectedItem,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <Text style={styles.selected}>Selected: {selectedValue}</Text>
      </View>

      <TouchableOpacity onPress={onPress} style={styles.buttonAccept}>
        <Text style={styles.buttonAcceptText}>Accept {quizType}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 35,
    marginBottom: 10,
    color: COLORS.white,
  },
  selected: { fontSize: 28, marginTop: 40, color: COLORS.white },
  scrollViewContainer: {
    height: 180,

    width: 180,
    marginBottom: 20,
  },
  scrollViewContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    fontSize: 70,
    marginRight: 20,
    fontWeight: "bold",
  },
  touchableItem: {
    width: 175,
    height: 175,
    borderColor: COLORS.dark,
    borderRadius: 25,
    borderWidth: 5,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
  },
  selectedItem: {
    color: COLORS.red,
  },
  buttonAcceptText: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.white,
  },
  buttonAccept: {
    width: "100%",
    height: 50,
    borderWidth: 3,
    borderColor: COLORS.dark,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Select;
