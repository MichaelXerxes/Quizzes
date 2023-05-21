import React, { useRef, useState, useEffect } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS } from "./src/consts/COLORS";
import NavigationView from "./src/navigation/navigationView";
import { DrawerLayoutAndroid } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import drawerStore from "./src/mobx/DrawerStore";
import { observer } from "mobx-react-lite";
import MainStackNavigator from "./src/navigation/Stack";

const Drawer = createDrawerNavigator();

function App() {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const { drawerPosition, setDrawerRef } = drawerStore;
  useEffect(() => {
    drawerStore.setDrawerRef(drawer);
  }, []);
  return (
    <NavigationContainer>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={() => <NavigationView drawer={drawer} />}
      >
        {/* <View style={{ flex: 1 }}>
          <View style={styles.container}>
            <Text style={styles.paragraph}>
              Drawer on the {drawerPosition}!
            </Text>

            <Button
              title="Open drawer"
              onPress={() => drawer.current?.openDrawer()}
            />
          </View> */}
        <MainStackNavigator />
        {/* </View> */}
      </DrawerLayoutAndroid>
    </NavigationContainer>
  );
}

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
