import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import StockToolBar from "../StockList/StockToolBar";

test("Should render stock tool bar component with empty props", () => {
  render(<StockToolBar />);
  const StockToolBarElement = screen.getByTestId("stocktoolbar");
  expect(StockToolBarElement).toBeInTheDocument();
});

test("Should render stock tool bar component with country AU", () => {
  render(<StockToolBar country="AU" />);
  const StockToolBarElement = screen.getByTestId("stocktoolbar");
  expect(StockToolBarElement).toHaveTextContent("AU");
});
