import React, { Component } from "react";
import { RouteProp } from "@react-navigation/native";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { HomeScreenNavigationProp } from "../types/navigation.types";

const { height } = Dimensions.get("window");

interface Props {
  navigation: HomeScreenNavigationProp;
}

interface State {}

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Home Home Home</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default Home;
