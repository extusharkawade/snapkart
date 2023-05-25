import { cleanup, render, waitFor } from "@testing-library/react";
import Product from "../Product";
import React from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios");
// jest.mock("../RenderProduct/RenderProduct", () => {
//   const ComponentToMock = () => {
//     <div data-testid="mockedRenderProduct"></div>;
//   };
//   return ComponentToMock;
// });
describe("Product", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          prodName: "Moto Edge 40",
          desc: "Flex Your Stories.Lightweight and stylish, the EOS M50 Mark II is fun and easy to use with Wi-Fi connectivity for content creators to stay close to your audience at all times. Keep your social media feeds lit with high-quality visual storytelling in 4K and accurate eye and face detection autofocusing.Whatever content you create, set yourself apart from the crowd and give your audience something special. The EOS M50 Mark II gives you more ways to shoot photos, movies and live streams and connect with your followers.,suitable_for-Beginners,processor-DIGIC 8,sensor_type-APS-C CMOS,continuous_shooting_speed-11 fps (in High Continuous shooting)n",
          price: 52000,
          catId: "2",
          image: "motoedge.jpg",
          id: "3",
        },
        {
          prodName: "Moto Edge 40",
          desc: "Flex Your Stories.Lightweight and stylish, the EOS M50 Mark II is fun and easy to use with Wi-Fi connectivity for content creators to stay close to your audience at all times. Keep your social media feeds lit with high-quality visual storytelling in 4K and accurate eye and face detection autofocusing.Whatever content you create, set yourself apart from the crowd and give your audience something special. The EOS M50 Mark II gives you more ways to shoot photos, movies and live streams and connect with your followers.,suitable_for-Beginners,processor-DIGIC 8,sensor_type-APS-C CMOS,continuous_shooting_speed-11 fps (in High Continuous shooting)n",
          price: 52000,
          catId: "2",
          image: "motoedge.jpg",
          id: "3",
        },
      ],
    });
  });
  afterEach(() => {
    cleanup;
  });
  test("Should render componenet", async () => {
    const { getByTestId } = render(<Product catId={1} />, {
      wrapper: BrowserRouter,
    });
    await waitFor(() => {
      expect(getByTestId("products")).toBeInTheDocument();
    });
  });

  test("Should show error messgage data failed to login ", async () => {
    axios.get.mockRejectedValue({ data: [] });
    const { queryByTestId, container } = render(<Product catId={1} />);
    expect(container.innerHTML).toMatch("⚠ No Products in this category");
    expect(queryByTestId("products")).not.toBeInTheDocument();
  });

  test("Should show error if no products available", () => {
    axios.get.mockResolvedValue({ data: [] });
    const { queryByTestId, container } = render(<Product catId={1} />);
    expect(container.innerHTML).toMatch("⚠ No Products in this category");
    expect(queryByTestId("products")).not.toBeInTheDocument();
  });

  // test("Should call RenderProduct", async () => {
  //   const { getByTestId, debug } = render(<Product catId={1} />, {
  //     wrapper: BrowserRouter,
  //   });

  //   await waitFor(() => {
  //     expect(getByTestId("mockedRenderProduct")).toBeInTheDocument();
  //     debug();
  //   });
  // });
});
