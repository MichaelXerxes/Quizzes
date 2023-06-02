import React, { useEffect, useRef } from "react";
import { View, StyleSheet, ImageBackground, Animated } from "react-native";
import { GameScreenNavigationProp } from "../types/navigation.types";
import { useIsFocused } from "@react-navigation/native";
import Category from "../components/Category";

interface Props {
  navigation: GameScreenNavigationProp;
}

const Game: React.FC<Props> = ({ navigation }) => {
  const anim1 = useRef(new Animated.Value(-500)).current;
  const anim2 = useRef(new Animated.Value(500)).current;
  const anim3 = useRef(new Animated.Value(-500)).current;
  const isFocused = useIsFocused();

  useEffect(() => {
    Animated.parallel([
      Animated.spring(anim1, {
        toValue: 0,
        useNativeDriver: false,
      }),
      Animated.spring(anim2, {
        toValue: 0,
        useNativeDriver: false,
      }),
      Animated.spring(anim3, {
        toValue: 0,
        useNativeDriver: false,
      }),
    ]).start();
  }, [anim1, anim2, anim3, isFocused]);
  return (
    <ImageBackground
      source={require("../assets/ai-images/marksq.png")}
      style={styles.container}
    >
      <Animated.View style={[styles.category1, { left: anim1 }]}>
        <Category sourceLink="image1" quizType="React JS" />
      </Animated.View>
      <Animated.View style={[styles.category2, { right: anim2 }]}>
        <Category sourceLink="image2" quizType="React Native" />
      </Animated.View>
      <Animated.View style={[styles.category3, { left: anim3 }]}>
        <Category sourceLink="image3" quizType="TypeScript" />
      </Animated.View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    padding: 10,
  },
  category1: {
    alignSelf: "flex-start",
  },
  category2: {
    alignSelf: "flex-end",
  },
  category3: {
    alignSelf: "center",
  },
});
export default Game;
