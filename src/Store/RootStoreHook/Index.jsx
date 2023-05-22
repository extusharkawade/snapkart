import { createContext } from "react";
import { RootStore } from "../RootStore/RootStore";

export const rootStoreContext = createContext({
  rootStore: new RootStore(),
});
