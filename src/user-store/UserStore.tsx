import { observable, action, runInAction, makeObservable, autorun } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class UserStore {
  @observable time = 0;
  numberGoodQuestions = 0;
  numberOfAllQuestions = 0;
  quizzType = "";
  quizDataList: {
    id: string;
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
    this.quizDataList = [];
  }

  async storeQuizData() {
    const newQuizData = {
      id: Math.random().toString(36).substr(2, 9),
      time: this.time,
      numberGoodQuestions: this.numberGoodQuestions,
      numberOfAllQuestions: this.numberOfAllQuestions,
      quizzType: this.quizzType,
    };

    try {
      const existingQuizData = await AsyncStorage.getItem("@quizData");
      let quizDataList: {
        id: string;
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
      const duplicateQuiz = quizDataList.find(
        (item) =>
          item.time === newQuizData.time &&
          item.numberGoodQuestions === newQuizData.numberGoodQuestions &&
          item.numberOfAllQuestions === newQuizData.numberOfAllQuestions &&
          item.quizzType === newQuizData.quizzType
      );
      if (!duplicateQuiz) {
        quizDataList.push(newQuizData);
        await AsyncStorage.setItem("@quizData", JSON.stringify(quizDataList));
        runInAction(() => {
          this.quizDataList = quizDataList;
        });
        console.log("Quiz Data Stored:", quizDataList);
      } else {
        console.log("An identical quiz already exists. Skipping storage.");
      }
      // if (!quizDataList.find((item) => item.id === newQuizData.id)) {
      //   quizDataList.push(newQuizData);

      //   await AsyncStorage.setItem("@quizData", JSON.stringify(quizDataList));
      //   runInAction(() => {
      //     this.quizDataList = quizDataList;
      //   });
      //   console.log("Quiz Data Stored:", quizDataList);
      // } else {
      //   console.log("Quiz data already exists with this id. Skipping storage.");
      // }
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
    try {
      await AsyncStorage.removeItem("@quizData");
      this.resetQuizData();
    } catch (e) {
      console.error("Failed to remove the data from AsyncStorage:", e);
    }
  }
}

const userQuizStore = new UserStore();

export default userQuizStore;
