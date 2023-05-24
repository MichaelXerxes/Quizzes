import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class UserStore {
  time: number = 0;
  numberGoodQuestions: number = 0;
  numberOfAllQuestions: number = 0;

  constructor() {
    makeAutoObservable(this);
    this.loadQuizData();
  }

  setTime = (time: number) => {
    this.time = time;
  };

  setNumberGoodQuestions = (number: number) => {
    this.numberGoodQuestions = number;
  };
  setNumberOfAllQuestions = (number: number) => {
    this.numberOfAllQuestions = number;
  };

  resetQuizData = () => {
    this.time = 0;
    this.numberGoodQuestions = 0;
    this.numberOfAllQuestions = 0;
  };

  storeQuizData = async () => {
    const quizData = {
      time: this.time,
      numberGoodQuestions: this.numberGoodQuestions,
      numberOfAllQuestions: this.numberOfAllQuestions,
    };

    try {
      await AsyncStorage.setItem("@quizData", JSON.stringify(quizData));
    } catch (e) {
      console.error(e);
    }
  };

  loadQuizData = async () => {
    try {
      const value = await AsyncStorage.getItem("@quizData");
      if (value !== null) {
        const quizData = JSON.parse(value);
        this.time = quizData.time;
        this.numberGoodQuestions = quizData.numberGoodQuestions;
        this.numberOfAllQuestions = quizData.numberOfAllQuestions;
      }
    } catch (e) {
      console.log(e);
    }
  };
}

const userQuizStore = new UserStore();

export default userQuizStore;
