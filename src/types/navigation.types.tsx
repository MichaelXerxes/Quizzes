import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Select: undefined;
  Settings: undefined;
  Scores: undefined;
  Game: undefined;

  // Other screens go here
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type SelectScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Select"
>;

export type SettingsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Settings"
>;

export type ScoreScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Scores"
>;
export type GameScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Game"
>;

export type UniversalNavigationProps =
  | HomeScreenNavigationProp
  | SelectScreenNavigationProp
  | SettingsScreenNavigationProp
  | ScoreScreenNavigationProp
  | GameScreenNavigationProp;
