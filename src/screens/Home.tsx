import React, { Component, useRef, useEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Animated,
} from "react-native";
import { HomeScreenNavigationProp } from "../types/navigation.types";
import { COLORS } from "../consts/COLORS";

const { height } = Dimensions.get("window");

interface Props {
  navigation: HomeScreenNavigationProp;
}

interface State {}

const Home: React.FC<Props> = ({ navigation }) => {
  const animLR = useRef(new Animated.Value(-500)).current;
  const animBT = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    const animationLR = Animated.loop(
      Animated.sequence([
        Animated.timing(animLR, {
          toValue: 500,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(animLR, {
          toValue: -500,
          duration: 5000,
          useNativeDriver: true,
        }),
      ])
    );

    const animationBT = Animated.loop(
      Animated.sequence([
        Animated.timing(animBT, {
          toValue: 50,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(animBT, {
          toValue: 200,
          duration: 5000,
          useNativeDriver: true,
        }),
      ])
    );

    animationLR.start();
    animationBT.start();
  }, []);

  return (
    <ImageBackground
      source={require("../assets/ai-images/marksq.png")}
      style={styles.container}
    >
      <Text style={styles.title}>Home Home</Text>
      <Animated.Text
        style={[styles.text, { transform: [{ translateX: animLR }] }]}
      >
        This is a long text that is moving from left to right.
      </Animated.Text>
      <Animated.Text
        style={[styles.text, { transform: [{ translateY: animBT }] }]}
      >
        This is a long text that is moving from bottom to top.
      </Animated.Text>
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
  text: {
    fontSize: 16,
    color: COLORS.white,
    position: "absolute",
  },
});
export default Home;
