import React, { RefObject } from "react";
import {
  Button,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { DrawerLayoutAndroid } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation.types";
import { useColorContext } from "../mobx/ColorsStore";
interface NavigationViewProps {
  drawer: RefObject<DrawerLayoutAndroid>;
}

type NavigationProp = StackNavigationProp<RootStackParamList, "Home">;
const NavigationView: React.FC<NavigationViewProps> = ({ drawer }) => {
  const { colors } = useColorContext();

  const navigation = useNavigation<NavigationProp>();
  const closeDrawer = () => {
    drawer.current?.closeDrawer();
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",

      paddingVertical: 16,
      paddingTop: 80,
      overflow: "hidden",
      width: "100%",
    },
    navigationContainer: {
      backgroundColor: colors.secondary,
    },
    paragraph: {
      padding: 12,
      fontSize: 28,
      textAlign: "center",
    },
    drawerTouchable: {
      borderBottomColor: colors.darkBlack,
      borderBottomWidth: 1,
      marginBottom: 10,
    },
    drawerTouchableText: {
      fontSize: 22,
      fontWeight: "bold",
    },
    buttonClose: {
      bottom: 140,
      position: "absolute",
      borderWidth: 2,
      borderColor: colors.darkBlack,
      borderRadius: 10,
      width: "80%",
      alignItems: "center",
    },
  });

  return (
    <ImageBackground
      source={require("../assets/buttons/expo.png")}
      style={[styles.container, styles.navigationContainer]}
      resizeMode="contain"
    >
      <Text style={styles.paragraph}>Quizzes Menu</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
          closeDrawer();
        }}
        style={styles.drawerTouchable}
      >
        <Text style={styles.drawerTouchableText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Game");
          closeDrawer();
        }}
        style={styles.drawerTouchable}
      >
        <Text style={styles.drawerTouchableText}>Game</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Scores");
          closeDrawer();
        }}
        style={styles.drawerTouchable}
      >
        <Text style={styles.drawerTouchableText}>Scores</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Settings");
          closeDrawer();
        }}
        style={styles.drawerTouchable}
      >
        <Text style={styles.drawerTouchableText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={closeDrawer} style={styles.buttonClose}>
        <Text style={styles.drawerTouchableText}>Close drawer</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default NavigationView;
