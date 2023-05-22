import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import drawerStore from "../mobx/DrawerStore";
import { Feather } from "@expo/vector-icons";
import { UniversalNavigationProps } from "../types/navigation.types";
//import { Icon } from "react-native-vector-icons/Icon";
import Icon from "react-native-vector-icons/FontAwesome5";

interface Props {
  navigation: UniversalNavigationProps;
  title: string;
}
const DIMENSIONS = {
  iconSize: 26,
};
const TopBarComponent: React.FC<Props> = ({ navigation, title }) => {
  const { openDrawer, drawerPosition } = drawerStore;
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
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
      <Text style={styles.title}>{title}</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    paddingTop: 30,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paddingIconRight: {
    paddingRight: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  paddingIconLeft: {
    paddingLeft: 16,
  },
});

export default observer(TopBarComponent);
