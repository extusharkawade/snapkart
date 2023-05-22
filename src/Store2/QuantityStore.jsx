import { observer } from "mobx-react-lite";

import { action, observable } from "mobx";

export default class QuantityStore {
  quantity = observable.box(1);
  price = observable.box();

  constructor(price, quantity) {
    console.log("Object created");
    this.price.set(price);
    this.quantity.set(quantity);
  }

  calculatePrice = action(() => {
    this.price.set(this.quantity.get() * this.price.get());
    console.log("Called calculatePrice", this.price.get());
  });
}
