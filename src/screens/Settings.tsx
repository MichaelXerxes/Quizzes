import React, { Component, useContext } from "react";
import { RouteProp } from "@react-navigation/native";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons";
import { SelectScreenNavigationProp } from "../types/navigation.types";
import drawerStore from "../mobx/DrawerStore";
import userQuizStore from "../user-store/UserStore";
import { observer } from "mobx-react-lite";
import { COLORS } from "../consts/COLORS";
interface Props {
  navigation: SelectScreenNavigationProp;
  // openDrawer: () => void;
}
interface State {}

const Settings: React.FC<Props> = ({ navigation }) => {
  const { changeDrawerPosition, openDrawer } = drawerStore;
  const resetAllData = () => {
    Alert.alert(
      "Reset All Data",
      "Are you sure you want to reset all your data?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Reset", style: "destructive", onPress: handleReset },
      ]
    );
  };

  const handleReset = () => {
    userQuizStore.resetAllData();
  };
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
        onPress={resetAllData}
        style={styles.touchableContainer}
      >
        <Text style={styles.touchableText}>Reset all Data </Text>
      </TouchableOpacity>
      {/* <Button title="Change Drawer Position" onPress={changeDrawerPosition} />*/}
      {/* <Button title="Open Drawer" onPress={openDrawer} /> */}
      {/* <Button title="Reset all Data" onPress={userQuizStore.resetAllData} /> */}
    </ImageBackground>
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
    color: COLORS.silver,
    marginTop: 50,
    fontSize: 28,
    marginBottom: 20,
  },
  touchableContainer: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    borderColor: COLORS.silver,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  touchableText: {
    color: COLORS.silver,
    fontSize: 19,
  },
});
export default observer(Settings);
