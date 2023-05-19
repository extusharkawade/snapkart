import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import Categories from "../../Categories/Categories";
import Category from "../Category";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios");

const renderComponent = () => {
  const data = {
    id: 1,
    name: "Grocery 1",
    Image: "grocery.JPG",
  };
  return render(<Category categoryComponent={data} />, {
    wrapper: BrowserRouter,
  });
};

describe("Category", () => {
  it("Component should render", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId("single-category")).toBeInTheDocument();
  });

  it("Should display category image ", async () => {
    const { getByTestId, findByAltText } = renderComponent();
    expect(getByTestId("single-category")).toBeInTheDocument();
    const image = await findByAltText("grocery.JPG");
    expect(image).toBeInTheDocument();
  });

  it("Should show display category name ", async () => {
    const { getByTestId, findByText } = renderComponent();
    expect(getByTestId("single-category")).toBeInTheDocument();
    const category = await findByText("Grocery 1");
    expect(category).toBeInTheDocument();
  });

  it("Should open another page on click", async () => {
    const { getByTestId } = renderComponent();
    const card = getByTestId("card");
    expect(card).toBeInTheDocument();
    fireEvent.click(card);
    expect(global.window.location.pathname).toContain("products/1");
  });
});
