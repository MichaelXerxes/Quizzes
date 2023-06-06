import React, { Component, useRef, useEffect, useState } from "react";
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
import { useColorContext } from "../mobx/ColorsStore";

const { height } = Dimensions.get("window");

interface Props {
  navigation: HomeScreenNavigationProp;
}

interface State {}

const Home: React.FC<Props> = ({ navigation }) => {
  const animLR = useRef(new Animated.Value(-500)).current;
  const animBT = useRef(new Animated.Value(height)).current;
  const { colors, setColors } = useColorContext();

  const story = [
    "A long time ago, in a galaxy far, far away...",
    "In the distant realm of digital design and development, there existed a supreme force named Michael, known across the galaxies as The Emperor.",
    "His dominion was the renowned Dungeon Studio, a bastion of creativity and innovation, where ordinary ideas were transformed into extraordinary applications.",
    "Like a modern-day sorcerer, he wielded the tools of technology with unprecedented prowess, commanding the elements of code and design to his will.",
    "Through his ingenuity and relentless pursuit of excellence, a new application was born, one that held the power to captivate the minds and hearts of all who dared to engage with it.",
    "In the silence of his creative sanctum, the soft luminescence of computer screens casting an ethereal glow, Michael worked, each keystroke echoing like the rhythm of a grand symphony reaching its crescendo.",
    "To the onlookers, it was as though time itself had stilled, eagerly awaiting the culmination of this monumental endeavor.",
    "And then, there it was...an application, a marvel of digital engineering, a testament to Michael's unfettered brilliance.",
    "Thus, in the heart of Dungeon Studio, a spark of genius was kindled, illuminating the endless expanse of the digital universe, forever imprinting the legacy of Michael The Emperor.",
    "The world would remember, in code we trust...and so, the legend continues.",
    "May the code be with you...always.",
  ];
  const [lines, setLines] = useState<Animated.Value[]>([]);

  useEffect(() => {
    const startAnimation = () => {
      const newAnimated = new Animated.Value(height - 80);
      setLines((lines) => [...lines, newAnimated]);

      const animateText = () => {
        newAnimated.setValue(height - 80);
        Animated.timing(newAnimated, {
          toValue: -height,
          duration: 60000,
          useNativeDriver: true,
        }).start(({ finished }) => {
          if (finished) {
            setTimeout(animateText, 2000);
          }
        });
      };

      animateText();
    };

    const startTimer = setTimeout(() => {
      startAnimation();

      const timers = story.slice(1).map((_, index) => {
        return setTimeout(() => {
          startAnimation();
        }, (index + 1) * 4000);
      });

      return () => timers.forEach((timer) => clearTimeout(timer));
    }, 0);

    return () => clearTimeout(startTimer);
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: colors.white,
      textShadowColor: "rgba(0, 0, 0, 0.75)",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
    text: {
      fontSize: 16,
      color: colors.white,
      position: "absolute",
      bottom: 80,
      textAlign: "justify",
      lineHeight: 24,
      letterSpacing: 0.5,
      textShadowColor: "rgba(0, 0, 0, 0.75)",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
    animatedView: {
      backgroundColor: "transparent",
      height: 500,
      width: "100%",
    },
  });

  return (
    <ImageBackground
      source={require("../assets/ai-images/space.png")}
      style={styles.container}
    >
      {lines.map((animation, index) => (
        <Animated.Text
          style={[
            styles.text,
            {
              transform: [{ translateY: animation }],
            },
          ]}
          key={index}
        >
          {story[index]}
        </Animated.Text>
      ))}
    </ImageBackground>
  );
};

export default Home;
