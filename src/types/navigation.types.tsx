import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
export type RootStackParamList = {
  Home: undefined;
  Select: { quizType: string } | undefined;
  Settings: undefined;
  Scores: undefined;
  Game: undefined;
  Quiz: { quizType: string; numberQuestions: number };

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
export type SelectcreenRouteProp = RouteProp<RootStackParamList, "Select">;
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
export type QuizScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Quiz"
>;
export type QuizScreenRouteProp = RouteProp<RootStackParamList, "Quiz">;

export type UniversalNavigationProps =
  | HomeScreenNavigationProp
  | SelectScreenNavigationProp
  | SettingsScreenNavigationProp
  | ScoreScreenNavigationProp
  | GameScreenNavigationProp
  | QuizScreenNavigationProp;
