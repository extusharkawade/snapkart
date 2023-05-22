import QuantityStore from "../Stores/QuantityStore";

let quantityStore;

export class RootStore {
  constructor() {
    quantityStore = new QuantityStore(this);
  }
}
