import { render } from "@testing-library/react";
import React from "react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

const renderHeader = () => {
  return render(<Header />, { wrapper: BrowserRouter });
};
describe("Header", () => {
  it("Component should render", () => {
    const { getByTestId } = renderHeader();
    expect(getByTestId("header")).toBeInTheDocument();
  });
  it("Search bar should be in the document", () => {
    const { getByTestId, getByPlaceholderText } = renderHeader();
    expect(getByTestId("header")).toBeInTheDocument();
    expect(getByPlaceholderText("Search for products")).toBeInTheDocument();
  });

  it("Login button should be present in the document if user is not login", () => {
    const { getByRole } = renderHeader();
    const LoginBtn = getByRole("button", { name: "Login" });
    expect(LoginBtn).toBeInTheDocument();
  });

  it("Become a seller link should be present", () => {
    const { getByText } = renderHeader();
    const sellerLink = getByText("Become a Seller");
    expect(sellerLink).toBeInTheDocument();
  });

  it("Cart icon with label should be present in the header", () => {
    const { getByAltText, getByText } = renderHeader();
    const cartIcon = getByAltText("cart");
    const cartText = getByText("Cart");
    expect(cartIcon).toBeInTheDocument();
    expect(cartText).toBeInTheDocument();
  });
});
