import { render, screen } from "@testing-library/react";
import StockTile from "../StockList/StockTile";

test("Should render stock tile component with empty props", () => {
  render(<StockTile />);
  const StockTileElement = screen.getByTestId("stocktile");
  expect(StockTileElement).toBeInTheDocument();
});

test("Should render lazy stock tile", () => {
  render(<StockTile lazy />);
  const StockTileElement = screen.getByTestId("stocktile");
  expect(StockTileElement).toBeInTheDocument();
  expect(StockTileElement).toHaveTextContent("---");
});

test("Should render with entered props", () => {
  render(<StockTile name="Apple" symbol="AAPL" />);
  const StockTileElement = screen.getByTestId("stocktile");
  expect(StockTileElement).toBeInTheDocument();
  expect(StockTileElement).toHaveTextContent("Apple");
  expect(StockTileElement).toHaveTextContent("AAPL");
});
