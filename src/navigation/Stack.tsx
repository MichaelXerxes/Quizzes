import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Detail from "../screens/Details";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Scores from "../screens/Scores";
import { Button } from "react-native";
import drawerStore from "../mobx/DrawerStore";
import TopBarComponent from "../components/TopBarComponent";
import { SettingsScreenNavigationProp } from "../types/navigation.types";
const Stack = createStackNavigator();

const MainStackNavigator: React.FC = () => {
  const navigationSettings: SettingsScreenNavigationProp = useNavigation();
  const { openDrawer } = drawerStore;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => (
            <TopBarComponent navigation={navigationSettings} title="Quizzes" />
          ),
          headerStyle: {
            backgroundColor: "green",
          },
          headerTintColor: "white",
          headerTitleStyle: { fontSize: 24 },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        options={{
          header: () => (
            <TopBarComponent navigation={navigationSettings} title="Settings" />
          ),
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitleStyle: { fontSize: 24 },
        }}
      >
        {(props) => (
          <Settings
            {...props}
            //openDrawer={DrawerStore.openDrawer}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="Scores"
        component={Scores}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
