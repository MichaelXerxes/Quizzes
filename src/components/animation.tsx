import React, { useState, useRef } from "react";
import {
  Text,
  Animated,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";

const AnimatedComponent = () => {
  const [isClicked, setIsClicked] = useState(false);
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const handleClick = () => {
    setIsClicked(true);

    Animated.timing(position, {
      toValue: { x: 0, y: -Dimensions.get("window").height },
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        { transform: position.getTranslateTransform() },
        {
          flex: 1,
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
