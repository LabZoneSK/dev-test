import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../../components/Footer";

describe("Footer component", () => {
  test("renders components correctly", () => {
    render(<Footer />);
    expect(screen.getByText("Images are From Flickr")).toBeInTheDocument();
  });
});
