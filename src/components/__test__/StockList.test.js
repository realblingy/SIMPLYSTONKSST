import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import StockList from "../StockList/";

test("Should render stock tool bar component with empty props", () => {
  render(<StockList />);
  const StockToolBarElement = screen.getByTestId("stocktoolbar");
  expect(StockToolBarElement).toBeInTheDocument();
});

test("Should render list of 10 stocks on initial render", async () => {
  render(<StockList />);
  const stocks = await screen.findAllByTestId("stocktile");
  expect(stocks).toHaveLength(10);
});
