import { createContext } from "react";

export const RootStoreContext = createContext({
  rootStore: new RootStore(),
});
