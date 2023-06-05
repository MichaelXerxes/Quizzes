import { observable, action, runInAction, makeObservable, autorun } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class UserStore {
  @observable time = 0;
  numberGoodQuestions = 0;
  numberOfAllQuestions = 0;
  quizzType = "";
  quizDataList: {
    time: number;
    numberGoodQuestions: number;
    numberOfAllQuestions: number;
    quizzType: string;
  }[] = [];
  unsubscribe: () => void = () => {};

  constructor() {
    makeObservable(this);
    this.loadQuizData();
    this.resetAllData = this.resetAllData.bind(this);
  }

  setTime(time: number) {
    this.time = time;
  }

  setNumberGoodQuestions(number: number) {
    this.numberGoodQuestions = number;
  }

  setNumberOfAllQuestions(number: number) {
    this.numberOfAllQuestions = number;
  }
  setQuizzType(quizzType: string) {
    this.quizzType = quizzType;
  }

  resetQuizData() {
    this.time = 0;
    this.numberGoodQuestions = 0;
    this.numberOfAllQuestions = 0;
    this.quizzType = "";
  }

  async storeQuizData() {
    const newQuizData = {
      time: this.time,
      numberGoodQuestions: this.numberGoodQuestions,
      numberOfAllQuestions: this.numberOfAllQuestions,
      quizzType: this.quizzType,
    };

    try {
      const existingQuizData = await AsyncStorage.getItem("@quizData");
      let quizDataList: {
        time: number;
        numberGoodQuestions: number;
        numberOfAllQuestions: number;
        quizzType: string;
      }[] = [];
      if (existingQuizData !== null) {
        quizDataList = JSON.parse(existingQuizData);
        if (!Array.isArray(quizDataList)) {
          quizDataList = [quizDataList];
        }
      }

      quizDataList.push(newQuizData);

      await AsyncStorage.setItem("@quizData", JSON.stringify(quizDataList));
      runInAction(() => {
        this.quizDataList = quizDataList;
      });
      console.log("Quiz Data Stored:", quizDataList);
    } catch (e) {
      console.error(e);
    }
  }

  async loadQuizData() {
    try {
      const value = await AsyncStorage.getItem("@quizData");

      if (value !== null) {
        const quizDataList = JSON.parse(value);

        if (quizDataList.length === 0) {
          console.log("No quiz data found");
          return;
        }
        const latestQuizData = quizDataList[quizDataList.length - 1];

        runInAction(() => {
          this.time = latestQuizData.time;
          this.numberGoodQuestions = latestQuizData.numberGoodQuestions;
          this.numberOfAllQuestions = latestQuizData.numberOfAllQuestions;
          this.quizDataList = quizDataList;
          console.log(
            "Loaded Quiz Data:",
            this.time,
            this.numberGoodQuestions,
            this.numberOfAllQuestions
          );
        });
      }
    } catch (e) {
      console.log(e);
      console.log("Loader Error");
    }
  }
  subscribe(listener: () => void): () => void {
    this.unsubscribe = autorun(listener);
    return this.unsubscribe;
  }

  ///For Data reset
  async resetAllData() {
    this.resetQuizData();
    try {
      await AsyncStorage.removeItem("@quizData");
    } catch (e) {
      console.error("Failed to remove the data from AsyncStorage:", e);
    }
  }
}

const userQuizStore = new UserStore();

export default userQuizStore;
