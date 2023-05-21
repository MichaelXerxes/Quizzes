import { makeAutoObservable } from "mobx";
import { DrawerLayoutAndroid } from "react-native-gesture-handler";
import { RefObject } from "react";
import { createContext, useContext, useRef, useEffect } from "react";

class DrawerStore {
  drawerPosition: "left" | "right" = "left";
  drawerRef: RefObject<DrawerLayoutAndroid> | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setDrawerRef = (ref: RefObject<DrawerLayoutAndroid>) => {
    this.drawerRef = ref;
  };

  changeDrawerPosition = () => {
    this.drawerPosition = this.drawerPosition === "left" ? "right" : "left";
  };

  openDrawer = () => {
 
        this.drawerRef?.current?.openDrawer();

  };
  
}

const drawerStore = new DrawerStore();

export default drawerStore;
