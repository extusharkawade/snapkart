import { render } from "@testing-library/react";
import CartProduct from "../CartProduct";
import axios from "axios";

jest.mock("axios");

const renderComponent = () => {
  const mockProduct = [
    {
      prodName:
        "Drogo Multi-Purpose Ergonomic Gaming Chair with Adjustable Seat, Head & USB Massager Gaming Chair  ",
      desc: "ERGONOMIC DESIGN: Gaming chair linkage armrest design gaming chair with USB cable power supply massager",
      price: 17991,
      catId: "2",
      image: "gaming-chair.jpg",
      id: "14",
    },
    {
      prodName: "Surf excel Easy Wash Detergent Powder 1.5 kg\n",
      price: 197,
      catId: "1",
      image: "surf-excel.jpg",
      id: "15",
    },
    {
      prodName: "Ariel Top Load Matic Fresh Liquid Detergent  (3 L)",
      price: 475,
      catId: "1",
      image: "ariel-top.jpg",
      id: "16",
    },
  ];
  const mockIndex = 2;
};
describe("CartProduct", () => {
  it.skip("Should render component", () => {
    axios.get.mockResolvedValue({
      data: [],
    });
    render(<CartProduct />);
  });
});
