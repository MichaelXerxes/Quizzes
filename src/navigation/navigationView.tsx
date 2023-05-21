import React, { RefObject } from "react";
import { Button, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { DrawerLayoutAndroid } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation.types";
interface NavigationViewProps {
  drawer: RefObject<DrawerLayoutAndroid>;
}

type NavigationProp = StackNavigationProp<RootStackParamList, "Home">;
const NavigationView: React.FC<NavigationViewProps> = ({ drawer }) => {
  const navigation = useNavigation<NavigationProp>();
  const closeDrawer = () => {
    drawer.current?.closeDrawer();
  };

  return (
    <View style={[styles.container, styles.navigationContainer]}>
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
          navigation.navigate("Detail");
          closeDrawer();
        }}
        style={styles.drawerTouchable}
      >
        <Text style={styles.drawerTouchableText}>Detail</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    paddingVertical: 16,
    paddingTop: 100,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  drawerTouchable: {
    borderBottomColor: "black",
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
    borderColor: "blue",
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
});

export default NavigationView;
