import React, { useState, useEffect } from "react";
import { Text, Animated, TouchableOpacity, StyleSheet } from "react-native";
import { useColorContext } from "../mobx/ColorsStore";

type AnimatedComponentProps = {
  x: number;
  y: number;
  triggerAnimation: boolean;
  timing: number;
  id: string;
  onPress: (id: string, answer: string) => void;
  question: string;
  onAnimationEnd?: () => void;
  // selectedAnswer: string;
};
const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  x,
  y,
  triggerAnimation,
  timing,
  onPress,
  id,
  question,
  onAnimationEnd,
}) => {
  const position = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];
  const { colors, setColors } = useColorContext();
  const handleClick = (question: string) => {
    onPress(id, question);
    triggerAnimationAction();
    console.log("ID :", id, "     question :", question);
  };

  useEffect(() => {
    if (triggerAnimation) {
      triggerAnimationAction();
    }
  }, [triggerAnimation]);

  const triggerAnimationAction = () => {
    Animated.timing(position, {
      toValue: {
        x: x,
        y: y,
      },
      duration: timing,
      useNativeDriver: true,
    }).start(() => {
      onAnimationEnd && onAnimationEnd();
    });
  };

  const styles = StyleSheet.create({
    animatedView: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.yellow,
      borderWidth: 2,
      borderColor: colors.darkBlack,
      borderRadius: 10,
      marginBottom: 5,
    },
    touchableOpacity: { width: 300, height: 80, padding: 3 },
    text: { fontSize: 16, textAlign: "center" },
  });

  return (
    <Animated.View
      style={[
        { transform: position.getTranslateTransform() },
        styles.animatedView,
      ]}
    >
      <TouchableOpacity
        onPress={() => handleClick(question)}
        style={styles.touchableOpacity}
      >
        <Text style={styles.text}>{question}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default AnimatedComponent;
