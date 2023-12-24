import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
	it("renders", () => {
		render(<App />);

		expect(
			screen.queryByText(
				"Click on the Vite and React logos to learn more",
			),
		).toBeInTheDocument();
	});
});
