import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  Animated,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";

type AnimatedComponentProps = {
  x: number;
  y: number;
  triggerAnimation: boolean;
  timing: number;
  id: string;
  onPress: (id: string) => void;
};
const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  x,
  y,
  triggerAnimation,
  timing,
  onPress,
  id,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const handleClick = () => {
    setIsClicked(true);
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
    }).start();
  };

  return (
    <Animated.View
      style={[
        { transform: position.getTranslateTransform() },
        {
          width: 200,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "yellow",
        },
      ]}
    >
      <TouchableOpacity
        onPress={handleClick}
        style={{ backgroundColor: "red" }}
      >
        <Text style={{ fontSize: 24 }}>
          {isClicked ? "Answer1" : "Click Me"} LoL
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
const styles = StyleSheet.create({});
export default AnimatedComponent;
