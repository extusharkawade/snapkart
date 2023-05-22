import { makeObservable, observable, computed } from "mobx";

export default class QuantityStore {
  quantity = 1;
  price = 0;
  rootStore;

  Constructor(rootStore) {
    makeObservable(this, {
      quantity: observable,
      getPrice: computed,
    });
    this.rootStore = rootStore;
  }

  calculatePrice() {
    this.price = this.price * this.quantity;
  }
  get getPrice() {
    console.log("returnin price");
    return this.price;
  }
}
