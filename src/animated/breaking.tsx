import React, { useRef, useEffect } from "react";
import { View, Animated, Easing, StyleSheet } from "react-native";

const BreakAnimation: React.FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -150, 0],
  });

  const scaleY = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.5, 1],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.square, { transform: [{ translateX }, { scaleY }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: 300,
    height: 100,
    backgroundColor: "red",
  },
});

export default BreakAnimation;
