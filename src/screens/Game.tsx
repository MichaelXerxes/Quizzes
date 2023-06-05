import React, { useEffect, useRef } from "react";
import { View, StyleSheet, ImageBackground, Animated } from "react-native";
import { GameScreenNavigationProp } from "../types/navigation.types";
import { useIsFocused } from "@react-navigation/native";
import Category from "../components/Category";

interface Props {
  navigation: GameScreenNavigationProp;
}

const Game: React.FC<Props> = ({ navigation }) => {
  const animMiddle = useRef(new Animated.Value(0)).current;
  const anim1 = useRef(new Animated.Value(-500)).current;
  const anim2 = useRef(new Animated.Value(500)).current;
  const anim3 = useRef(new Animated.Value(-500)).current;
  const isFocused = useIsFocused();

  useEffect(() => {
    const animation =
      //Animated.loop(
      Animated.parallel([
        Animated.spring(anim1, {
          toValue: 0,
          useNativeDriver: false,
          speed: 0.05,
        }),
        Animated.spring(anim2, {
          toValue: 0,
          useNativeDriver: false,
          speed: 1,
        }),
        Animated.spring(anim3, {
          toValue: 0,
          useNativeDriver: false,
          speed: 1,
        }),
      ]);

    // );

    const middleAnimation = Animated.loop(
      Animated.sequence([
        Animated.delay(2000),
        Animated.timing(anim2, {
          toValue: -120,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(anim2, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: false,
        }),
      ])
    );

    if (isFocused) {
      animation.start(() => middleAnimation.start());
    }
    //  else {
    //   animation.stop();
    // }

    return () => {
      animation.stop();
      middleAnimation.stop();
      anim1.setValue(-500);
      anim2.setValue(500);
      anim3.setValue(-500);
      animMiddle.setValue(0);
    };
  }, [anim1, anim2, anim3, isFocused]);
  return (
    <ImageBackground
      source={require("../assets/ai-images/marksq.png")}
      style={styles.container}
    >
      <Animated.View style={[styles.category1, { left: anim1 }]}>
        <Category sourceLink="image1" quizType="React JS" />
      </Animated.View>
      <Animated.View style={[styles.category2, { left: anim2 }]}>
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
