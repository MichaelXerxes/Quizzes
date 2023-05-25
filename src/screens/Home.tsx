import React, { Component } from "react";
import { RouteProp } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { HomeScreenNavigationProp } from "../types/navigation.types";
import { COLORS } from "../consts/COLORS";

const { height } = Dimensions.get("window");

interface Props {
  navigation: HomeScreenNavigationProp;
}

interface State {}

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/ai-images/marksq.png")}
      style={styles.container}
    >
      <Text style={styles.title}> Home Home</Text>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.white,
  },
});
export default Home;
