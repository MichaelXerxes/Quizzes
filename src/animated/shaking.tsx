import React, { useRef, useEffect } from "react";
import { View, Animated, Easing, StyleSheet, Text } from "react-native";
import { useColorContext } from "../mobx/ColorsStore";
type ShakeAnimationProps = {
  makeShake: boolean;
  question: string;
};
const ShakingQuestion: React.FC<ShakeAnimationProps> = ({
  makeShake,
  question,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const { colors, setColors } = useColorContext();

  useEffect(() => {
    if (makeShake) {
      startShakeAnimation();
    }
  }, [makeShake]);

  const startShakeAnimation = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: -1,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: -1,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: -1,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => {
      startDisappearAnimation();
    });
  };

  const startDisappearAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const translateX = animatedValue.interpolate({
    inputRange: [-1, 1],
    outputRange: [-10, 10],
  });

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 30,
    },
    box: {
      width: 300,
      height: 120,
      backgroundColor: colors.primary,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: colors.grey,
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 5,
    },
    question: {
      fontSize: 18,
      textAlign: "center",
      color: colors.dark,
      fontWeight: "bold",
      paddingHorizontal: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, { transform: [{ translateX }], opacity }]}
      >
        <Text style={styles.question}>{question} </Text>
      </Animated.View>
    </View>
  );
};

export default ShakingQuestion;
