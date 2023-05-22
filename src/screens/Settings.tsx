import React, { Component, useContext } from "react";
import { RouteProp } from "@react-navigation/native";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import Icon from "react-native-vector-icons";
import { SelectScreenNavigationProp } from "../types/navigation.types";
import drawerStore from "../mobx/DrawerStore";
import { observer } from "mobx-react-lite";
interface Props {
  navigation: SelectScreenNavigationProp;
  // openDrawer: () => void;
}
interface State {}

const Settings: React.FC<Props> = ({ navigation }) => {
  const { changeDrawerPosition, openDrawer } = drawerStore;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen </Text>
      <Button title="Change Drawer Position" onPress={changeDrawerPosition} />
      <Button title="Open Drawer" onPress={openDrawer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "black",
    marginTop: 50,
    fontSize: 28,
  },
});
export default observer(Settings);
