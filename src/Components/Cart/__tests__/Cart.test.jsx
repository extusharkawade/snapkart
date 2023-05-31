import { cleanup, render, waitFor } from "@testing-library/react";
import Cart from "../Cart";
import axios from "axios";

jest.mock("axios");

const renderComponent = () => {
  axios.get.mockResolvedValue({
    data: [
      {
        prodId: "2",
        quantity: 1,
        id: 1,
      },
      {
        prodId: "1",
        quantity: 1,
        id: 2,
      },
    ],
  });
  return render(<Cart />);
};
describe("cart", () => {
  afterEach(() => {
    cleanup;
  });

  it("Component should render", () => {
    renderComponent();
  });

  it("cart-component should be present", async () => {
    const { getAllByTestId } = renderComponent();

    await waitFor(() => {
      const testid = getAllByTestId("cart-component")[0];
      expect(testid).toBeInTheDocument();
    });
  });

  it("Should show error page if axios failed to load data", async () => {
    axios.get.mockRejectedValue({});
    const { getByTestId } = render(<Cart />);

    expect(getByTestId("error-page")).toBeInTheDocument();
  });
});
