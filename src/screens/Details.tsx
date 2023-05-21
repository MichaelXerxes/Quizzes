import React, { Component } from "react";
import { RouteProp } from "@react-navigation/native";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import Icon from "react-native-vector-icons";
import { DetailScreenNavigationProp } from "../types/navigation.types";
import { RootStackParamList } from "../types/navigation.types";
interface DetailRouteParams {
  itemId: number;
}
interface Props {
  navigation: DetailScreenNavigationProp;
}
interface State {}

const Detail: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    marginTop: 50,
    fontSize: 28,
  },
});
export default Detail;
