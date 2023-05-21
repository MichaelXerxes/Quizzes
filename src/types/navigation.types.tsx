import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
  Settings: undefined;
  Scores: undefined;

  // Other screens go here
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Detail"
>;

export type SettingsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Settings"
>;

export type ScoreScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Scores"
>;

export type UniversalNavigationProps =
  | HomeScreenNavigationProp
  | DetailScreenNavigationProp
  | SettingsScreenNavigationProp
  | ScoreScreenNavigationProp;
