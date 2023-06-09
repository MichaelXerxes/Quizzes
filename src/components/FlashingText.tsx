import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";
interface Props {
  text: string;
  fontSize: number;
}

const FlashingText: React.FC<Props> = ({ text, fontSize }) => {
  const colorAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.sequence([
        Animated.timing(colorAnimation, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnimation, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: false,
        }),
      ]).start(() => startAnimation());
    };

    startAnimation();
  }, [colorAnimation]);

  const interpolatedColor = colorAnimation.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ["red", "blue", "green", "yellow", "purple"],
  });

  const styles = StyleSheet.create({
    touchableText: {
      fontSize: fontSize,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
  const textStyle = {
    ...styles.touchableText,
    color: interpolatedColor,
  };

  return (
    <View>
      <Animated.Text style={textStyle}>{text}</Animated.Text>
    </View>
  );
};

export default FlashingText;
