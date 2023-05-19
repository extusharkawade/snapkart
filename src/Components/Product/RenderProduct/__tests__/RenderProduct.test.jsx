import { fireEvent, render } from "@testing-library/react";
import RenderProduct from "../RenderProduct";
import { BrowserRouter } from "react-router-dom";

const renderComponent = () => {
  const prod = {
    image: "prod1.jpg",
    id: "1",
    prodName: "Test Product",
    desc: "test desc",
  };
  return render(<RenderProduct prod={prod} />, { wrapper: BrowserRouter });
};

describe("RenderProduct", () => {
  it("Should render component", () => {
    const { getByTestId, container } = renderComponent();
    const product = getByTestId("rendered-product");
    expect(product).toBeInTheDocument();
  });

  it("Product should display image", () => {
    const { getByAltText } = renderComponent();
    const image = getByAltText("prod1.jpg");
    expect(image).toBeInTheDocument();
  });

  it("Product name should be visible", () => {
    const { getByText } = renderComponent();
    const productName = getByText("Test Product");
    expect(productName).toBeInTheDocument();
  });

  it("Product description should be visible", () => {
    const { getByText } = renderComponent();
    const desc = getByText("test desc");
    expect(desc).toBeInTheDocument();
  });

  it("Should route to the productdetail page with product id", () => {
    const { getByTestId } = renderComponent();
    const product = getByTestId("rendered-product");
    fireEvent.click(product);
    expect(global.window.location.pathname).toContain("product-details/1");
  });
});
