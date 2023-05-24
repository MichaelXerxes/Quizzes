import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  Animated,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { COLORS } from "../consts/COLORS";

type AnimatedComponentProps = {
  x: number;
  y: number;
  triggerAnimation: boolean;
  timing: number;
  id: string;
  onPress: (id: string) => void;
  question: string;
  onAnimationEnd?: () => void;
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

  const handleClick = () => {
    onPress(id);
    triggerAnimationAction();
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

  return (
    <Animated.View
      style={[
        { transform: position.getTranslateTransform() },
        styles.animatedView,
      ]}
    >
      <TouchableOpacity onPress={handleClick} style={styles.touchableOpacity}>
        <Text style={styles.text}>{question}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animatedView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    borderWidth: 2,
    borderColor: COLORS.dark,
    borderRadius: 10,
    marginBottom: 5,
  },
  touchableOpacity: { width: 300, height: 80, padding: 3 },
  text: { fontSize: 18, textAlign: "center" },
});
export default AnimatedComponent;
