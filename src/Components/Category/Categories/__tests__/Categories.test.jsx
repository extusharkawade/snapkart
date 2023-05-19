import React from "react";
import { render, waitFor } from "@testing-library/react";
import Categories from "../Categories";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-dom/test-utils";

jest.mock("axios");

describe("Categories", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          name: "Grocery 1",
          Image: "grocery.JPG",
        },
        {
          id: 2,
          name: "Grocery 2",
          Image: "grocery2.JPG",
        },
      ],
    });
  });
  it("should render component", () => {
    const { getByTestId } = render(<Categories />);
    expect(getByTestId("categories")).toBeInTheDocument();
  });

  test("Should show server error message on screen if there is server error", async () => {
    const data = [];
    axios.get.mockRejectedValueOnce();
    const { getByText, container } = render(<Categories />);
    await waitFor(() => {
      expect(container.innerHTML).toMatch("Something went wrong");
    });
  });
});
