import React, { Component, useContext } from "react";
import { RouteProp } from "@react-navigation/native";
import {
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons";
import { SelectScreenNavigationProp } from "../types/navigation.types";
import drawerStore from "../mobx/DrawerStore";
import userQuizStore from "../user-store/UserStore";
import { observer } from "mobx-react-lite";
import { useColorContext } from "../mobx/ColorsStore";
import FlashingText from "../components/FlashingText";
import {
  DEFAULT_COLORS,
  BLACK_WHITE_COLORS,
  getRandomColors,
} from "../consts/COLORS";

interface Props {
  navigation: SelectScreenNavigationProp;
  // openDrawer: () => void;
}
interface State {}

const Settings: React.FC<Props> = ({ navigation }) => {
  const { changeDrawerPosition, openDrawer } = drawerStore;
  const { colors, setColors } = useColorContext();
  const resetAllData = () => {
    Alert.alert(
      "Reset All Data",
      "Are you sure you want to reset all your data?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Reset", style: "destructive", onPress: handleReset },
      ],
      { cancelable: true }
    );
  };

  const handleReset = () => {
    userQuizStore.resetAllData();
  };

  const handleColorChange = () => {
    Alert.alert(
      "Change Theme",
      "Choose according to your preferences",
      [
        { text: "Default", onPress: () => setColors(DEFAULT_COLORS) },
        {
          text: "Black/White",
          style: "destructive",
          onPress: () => setColors(BLACK_WHITE_COLORS),
        },
        {
          text: "Random",
          style: "destructive",
          onPress: () => setColors(getRandomColors()),
        },
      ],
      { cancelable: true }
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 16,
    },
    title: {
      color: colors.silver,
      marginTop: 50,
      fontSize: 28,
      marginBottom: 20,
    },
    touchableContainer: {
      width: "100%",
      height: 40,
      borderRadius: 10,
      borderColor: colors.silver,
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
    },
    touchableText: {
      color: colors.silver,
      fontSize: 19,
    },
  });

  return (
    <ImageBackground
      source={require("../assets/ai-images/settings.jpg")}
      style={styles.container}
    >
      <Text style={styles.title}>Settings Screen </Text>
      <TouchableOpacity onPress={openDrawer} style={styles.touchableContainer}>
        <Text style={styles.touchableText}>Open Drawer </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={changeDrawerPosition}
        style={styles.touchableContainer}
      >
        <Text style={styles.touchableText}>Change Drawer Position </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleColorChange}
        style={styles.touchableContainer}
      >
        <FlashingText text="Change Colors" fontSize={18} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={resetAllData}
        style={styles.touchableContainer}
      >
        <Text style={styles.touchableText}>Reset all Data </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default observer(Settings);
