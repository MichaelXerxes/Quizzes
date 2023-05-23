import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../consts/COLORS";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SelectScreenNavigationProp } from "../types/navigation.types";
interface CategoryProps {
  sourceLink: "image1" | "image2" | "image3";
  quizType: string;
}

const imageMapper = {
  image1: require("../assets/buttons/reactjs.png"),
  image2: require("../assets/buttons/rnative.png"),
  image3: require("../assets/buttons/ts.png"),
};

const Category: React.FC<CategoryProps> = ({ sourceLink, quizType }) => {
  const imageSource = imageMapper[sourceLink];
  const navigation: SelectScreenNavigationProp = useNavigation();
  const onPress = () => {
    console.log(quizType);
    navigation.navigate("Select", { quizType: quizType });
  };
  return (
    <View style={styles.categoryContainer}>
      <TouchableOpacity onPress={onPress}>
        <ImageBackground
          source={imageSource}
          style={styles.categoryItem}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    width: 150,
    height: 150,
    margin: 15,
    borderColor: COLORS.dark,
    borderWidth: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  categoryItem: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});
export default Category;
