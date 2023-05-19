import React from "react";
import CONSTANTS from "../../Gobal/Constant";
import style from "./Header.css";
import { Logo, Cart } from "../../Gobal/Images";

export default function Header() {
  return (
    <div className="header" data-testid="header">
      <Logo />
      <input
        className="inputBox"
        type="text"
        title={CONSTANTS.SEARCH_INPUT}
        placeholder={CONSTANTS.SEARCH_INPUT}
      ></input>
      <button className="LoginBtn">{CONSTANTS.LOGIN}</button>
      <h5 className="text ">{CONSTANTS.BECOME_SELLER}</h5>
      <Cart />
      <h5 className="cart">Cart</h5>
    </div>
  );
}
