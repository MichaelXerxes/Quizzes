import React, { Component } from "react";
import { RouteProp } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons";
import { GameScreenNavigationProp } from "../types/navigation.types";
import { COLORS } from "../consts/COLORS";
interface CategoryProps {
  sourceLink: "image1" | "image2" | "image3";
}
interface Props {
  navigation: GameScreenNavigationProp;
}
interface State {}
// interface CategoryProps {
//   sourceLink: string;
// }
const imageMapper = {
  image1: require("../assets/buttons/reactjs.png"),
  image2: require("../assets/buttons/rnative.png"),
  image3: require("../assets/buttons/ts.png"),
  // ...add more images here
};
const Category: React.FC<CategoryProps> = ({ sourceLink }) => {
  const imageSource = imageMapper[sourceLink];
  return (
    <View style={styles.categoryContainer}>
      <ImageBackground
        source={imageSource}
        style={styles.categoryItem}
        resizeMode="cover"
      />
    </View>
  );
};
const Game: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Screen </Text>

      <Category sourceLink="image1" />
      <Category sourceLink="image2" />
      <Category sourceLink="image3" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "black",
    marginTop: 50,
    fontSize: 28,
  },
  categoryContainer: {
    width: 150,
    height: 150,
    margin: 15,
    borderColor: COLORS.dark,
    borderWidth: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  categoryItem: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});
export default Game;
