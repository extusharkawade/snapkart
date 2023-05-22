import { createContext, useContext } from "react";
import QuantityStore from "../QuantityStore";

let quantityStore;

export class RootStore {
  quantityStore;
  constructor(price, quantity) {
    quantityStore = new QuantityStore(price, quantity);
  }
}

export const rootStoreContext = createContext({
  //   rootStore: new RootStore(price, quantity),
});

export const useStore = () => useContext(rootStoreContext);
