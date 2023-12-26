import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import createStore from "../shared/mockStore";
import Navbar from "../../components/Navbar";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";

// Mocking the Redux store
const store = createStore();

test("renders Navbar component", () => {
  render(
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>
  );

  const titleElement = screen.getByText(/Flick app/i);
  expect(titleElement).toBeInTheDocument();

  const searchInput = screen.getByPlaceholderText(/Search By Title/i);
  expect(searchInput).toBeInTheDocument();
});

test("handles search input change", () => {
  render(
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>
  );

  const searchInput = screen.getByPlaceholderText(/Search By Title/i);
  fireEvent.change(searchInput, { target: { value: "Test Movie" } });
  expect(store.getState().dataReducer.searchText).toBe("Test Movie");
});
