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
        <View style={styles.arrowCallBack}>
          <TouchableOpacity onPress={handleBackPress}>
            <Icon name="long-arrow-alt-left" size={DIMENSIONS.iconSize} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.drawerOpenTouchableIconView}>
          <TouchableOpacity
            onPress={openDrawer}
            style={styles.drawerOpenTouchable}
          >
            <Icon name="indent" size={DIMENSIONS.iconSize} />
          </TouchableOpacity>
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
      {drawerPosition === "left" ? (
        <View style={styles.drawerOpenTouchableIconView}>
          <TouchableOpacity
            onPress={openDrawer}
            style={styles.drawerOpenTouchable}
          >
            <Icon name="indent" size={DIMENSIONS.iconSize} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.arrowCallBack}>
          <TouchableOpacity onPress={handleBackPress}>
            <Icon name="long-arrow-alt-left" size={DIMENSIONS.iconSize} />
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
  },
  arrowCallBack: {
    flex: 1,
    fontSize: 20,

    //paddingTop: 25,
    paddingLeft: 15,
  },
  drawerOpenTouchable: {
    // marginTop: 25,
  },
  drawerOpenTouchableIconView: {
    flex: 1,

    alignItems: "flex-end",
    paddingRight: 15,
  },
  title: {
    flex: 2,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",

    // paddingTop: 25,
  },
});

export default observer(TopBarComponent);
