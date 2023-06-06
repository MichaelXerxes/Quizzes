import React, { useRef, useState, useEffect } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NavigationView from "./src/navigation/navigationView";
import { DrawerLayoutAndroid } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import drawerStore from "./src/mobx/DrawerStore";
import { observer } from "mobx-react-lite";
import MainStackNavigator from "./src/navigation/Stack";
import { ColorProvider } from "./src/mobx/ColorsStore";
const Drawer = createDrawerNavigator();

const App = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const { drawerPosition, setDrawerRef } = drawerStore;
  useEffect(() => {
    drawerStore.setDrawerRef(drawer);
  }, []);
  return (
    <ColorProvider>
      <NavigationContainer>
        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={300}
          drawerPosition={drawerPosition}
          renderNavigationView={() => <NavigationView drawer={drawer} />}
        >
          <MainStackNavigator />
        </DrawerLayoutAndroid>
      </NavigationContainer>
    </ColorProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "yellow",
    rflexDirection: "row",
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
});

export default observer(App);
