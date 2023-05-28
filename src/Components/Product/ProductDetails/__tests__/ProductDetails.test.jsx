import { render, waitFor } from "@testing-library/react";
import ProductDetails from "../ProductDetails";
import axios from "axios";

jest.mock("axios");

const renderComponent = () => {
  return render(<ProductDetails />);
};
describe("ProductDetails", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        prodName: "Farmley Selecta Light Broken (Akrot) Walnuts  (200 g)\r\n",
        desc: "Farmley, source all the nuts & dry fruits directly from the farms ",
        price: 215,
        catId: "1",
        image: "walnut.jpg",
        id: "1",
      },
    });
  });

  it("Should render component", async () => {
    const { getByTestId } = renderComponent();
    await waitFor(() => {
      expect(getByTestId("prod-details")).toBeInTheDocument();
    });
  });

  it("Image component should be present", async () => {
    const { getByTestId, getByAltText } = renderComponent();

    await waitFor(() => {
      expect(getByTestId("prod-details")).toBeInTheDocument();
      expect(
        getByAltText("/AppImages/Products/walnut.jpg")
      ).toBeInTheDocument();
    });
  });
  it("Product name,price,desc should be visible", async () => {
    const { getByText, container } = renderComponent();
    await waitFor(() => {
      expect(container.innerHTML).toMatch(
        "Farmley Selecta Light Broken (Akrot) Walnuts  (200 g)"
      );
      expect(container.innerHTML).toMatch(
        "Farmley, source all the nuts &amp; dry fruits directly from the farms"
      );
      expect(container.innerHTML).toMatch("215");
    });
  });
  it("Should show error message if api failed to load data", async () => {
    axios.get.mockRejectedValue();
    const { getByText, container } = renderComponent();

    await waitFor(() => {
      expect(getByText("⚠ Something went wrong"));
    });
  });
});
