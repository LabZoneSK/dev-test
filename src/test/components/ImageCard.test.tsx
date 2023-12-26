import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";
import ImageCard from "../../components/ImageCard";

// Mock data for testing
const item = {
  title: "Test Image",
  author: '("Test Author")',
  date_taken: "2021-01-01",
  link: "/test",
  media: {
    m: "https://via.placeholder.com/300",
  },
};

describe("ImageCard component", () => {
  test("renders without crashing and displays correct data", () => {
    render(
      <Router>
        <ImageCard item={item} />
      </Router>
    );

    // Check if the title, author, and date are displayed correctly
    expect(screen.getByText("Test Image")).toBeInTheDocument();
    expect(screen.getByText("Test Author")).toBeInTheDocument();
    expect(screen.getByText("Fri Jan 01 2021")).toBeInTheDocument();
  });
});
