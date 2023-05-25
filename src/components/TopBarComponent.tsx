import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { observer } from "mobx-react-lite";
import drawerStore from "../mobx/DrawerStore";
import { UniversalNavigationProps } from "../types/navigation.types";
import Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../consts/COLORS";

interface Props {
  navigation: UniversalNavigationProps;
  title: string;
}
const DIMENSIONS = {
  iconSize: 26,
};
const TopBarComponent: React.FC<Props> = ({ navigation, title }) => {
  const { openDrawer, drawerPosition } = drawerStore;
  const colors = ["red", "blue", "green", "yellow"];
  const [colorIndex, setColorIndex] = useState(0);
  const handleBackPress = () => {
    if (title === "Game Over") {
      navigation.navigate("Home");
    } else {
      navigation.goBack();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, 500);

    return () => clearInterval(interval);
  }, [colorIndex]);
  return (
    <ImageBackground
      source={require("../assets/ai-images/tab2.png")}
      style={styles.container}
    >
      {drawerPosition === "left" ? (
        <View
          style={
            drawerPosition === "left"
              ? styles.paddingIconLeft
              : styles.paddingIconRight
          }
        >
          <TouchableOpacity onPress={handleBackPress}>
            <Icon name="long-arrow-alt-left" size={DIMENSIONS.iconSize} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.paddingIconLeft}>
          <TouchableOpacity
            onPress={openDrawer}
            style={styles.paddingIconRight}
          >
            <Icon name="indent" size={DIMENSIONS.iconSize} />
          </TouchableOpacity>
        </View>
      )}
      <Text
        style={
          title === "Quizzes"
            ? [styles.title, { color: colors[colorIndex] }]
            : styles.title
        }
      >
        {title}
      </Text>
      {drawerPosition === "left" ? (
        <View style={styles.paddingIconLeft}>
          <TouchableOpacity
            onPress={openDrawer}
            style={styles.paddingIconRight}
          >
            <Icon name="indent" size={DIMENSIONS.iconSize} />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={
            drawerPosition === "right"
              ? styles.paddingIconRight
              : styles.paddingIconLeft
          }
        >
          <TouchableOpacity onPress={handleBackPress}>
            <Icon name="long-arrow-alt-right" size={DIMENSIONS.iconSize} />
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 75,
    width: "100%",
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  paddingIconRight: {
    paddingRight: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  paddingIconLeft: {
    paddingLeft: 16,
  },
});

export default observer(TopBarComponent);
