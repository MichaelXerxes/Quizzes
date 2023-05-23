import React, { Component, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons";
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
const ItemView = ({ item }: { item: number }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item}</Text>
    </View>
  );
};
const Select: React.FC<Props> = ({ navigation, route }) => {
  const [selectedValue, setSelectedValue] = useState(1);
  const handlePress = (item: number) => {
    setSelectedValue(item);
  };
  const items = [
    { label: "5", value: 5 },
    { label: "10", value: 10 },
    { label: "15", value: 15 },
    { label: "20", value: 20 },
    { label: "50", value: 50 },
  ];

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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Select number of Questions!</Text>
        <View style={styles.scrollViewContainer}>
          <ScrollView
            //horizontal={true}
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
    </SafeAreaView>
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
    fontSize: 24,
    marginBottom: 40,
  },
  selected: { fontSize: 24, marginTop: 40 },
  scrollViewContainer: {
    height: 80,

    width: 100,
    marginBottom: 20,
  },
  scrollViewContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    fontSize: 30,
    marginRight: 20,
    fontWeight: "bold",
  },
  touchableItem: {
    width: 75,
    height: 75,
    borderColor: COLORS.dark,
    borderRadius: 7,
    borderWidth: 2,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
  },
  selectedItem: {
    color: "red",
  },
  buttonAcceptText: {
    fontSize: 24,
    fontWeight: "bold",
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
