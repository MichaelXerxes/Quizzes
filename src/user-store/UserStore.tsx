import { observable, action, runInAction, makeObservable, autorun } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class UserStore {
  @observable time = 0;
  numberGoodQuestions = 0;
  numberOfAllQuestions = 0;
  quizDataList: {
    time: number;
    numberGoodQuestions: number;
    numberOfAllQuestions: number;
  }[] = [];
  unsubscribe: () => void = () => {};

  constructor() {
    makeObservable(this);
    this.loadQuizData();
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

  resetQuizData() {
    this.time = 0;
    this.numberGoodQuestions = 0;
    this.numberOfAllQuestions = 0;
  }

  async storeQuizData() {
    const newQuizData = {
      time: this.time,
      numberGoodQuestions: this.numberGoodQuestions,
      numberOfAllQuestions: this.numberOfAllQuestions,
    };

    try {
      const existingQuizData = await AsyncStorage.getItem("@quizData");
      let quizDataList: {
        time: number;
        numberGoodQuestions: number;
        numberOfAllQuestions: number;
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
        this.quizDataList = quizDataList; // Update the quizDataList property
      });
      console.log("Quiz Data Stored:", quizDataList);
    } catch (e) {
      console.error(e);
    }
  }

  async loadQuizData() {
    try {
      const value = await AsyncStorage.getItem("@quizData");
      console.log("Retrieved Value:", value); // Check the retrieved value
      if (value !== null) {
        const quizDataList = JSON.parse(value);
        console.log("Quiz Data List:", quizDataList); // Check the parsed quiz data list
        if (quizDataList.length === 0) {
          console.log("No quiz data found");
          return;
        }
        const latestQuizData = quizDataList[quizDataList.length - 1];
        console.log("Latest Quiz Data:", latestQuizData); // Check the latest quiz data
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
}

const userQuizStore = new UserStore();

export default userQuizStore;
