import {
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchStocks } from "../../utils/api";
import StockTile from "./StockTile";
import "react-svg-radar-chart/build/css/index.css";
import StockToolBar from "./StockToolBar";

const StockListContainer = styled.div`
  // margin-top: 1rem;
  position: relative;

  && {
    background-color: transparent;
  }
`;

const StockListTable = styled(Table)`
  display: flex;
  flex-direction: column;
  height: 100%;
  && {
    width: 800px;
  }
`;

const StyledTableHead = styled(TableHead)`
  && {
    background-color: #3b4358;
  }
`;

const StyledTableCell = styled(TableCell)`
  && {
    color: white;
    font-weight: bold;
  }
`;

const renderStocks = (stocks) => {
  if (stocks !== null) {
    return stocks.map(({ name, ticker_symbol, score }) => (
      <StockTile
        key={ticker_symbol}
        name={name}
        symbol={ticker_symbol}
        scoreData={score.data}
      />
    ));
  }
};

const lazyLoadStocks = (rows) => {
  return Array(rows).fill(<StockTile lazy />);
};

/**
 * Renders the stock tiles in a table
 * Also contains sorting by marketCap of country
 */
const StockList = () => {
  // Used to filter data
  const [country, setCountry] = useState("AU");
  const [marketCap, setMarketCap] = useState("desc");
  const [page, setPage] = useState(0);
  const [stockListData, setStockListData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [rows, setRows] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingData(true);
        const { data } = await fetchStocks(page, rows, marketCap, country);
        setStockListData(data.data);
      } catch (error) {
        alert("Could not load stocks at this time " + error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
  }, [country, marketCap, page, rows]);

  const handlePageChange = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRows(parseInt(e.target.value));
  };

  return (
    <StockListContainer>
      <StockToolBar
        country={country}
        setCountry={setCountry}
        marketCap={marketCap}
        setMarketCap={setMarketCap}
      />
      <StockListTable>
        <StyledTableHead>
          <TableRow>
            <StyledTableCell key="name" width={"500px"}>
              Name
            </StyledTableCell>
            <StyledTableCell key="symbol">Symbol</StyledTableCell>
            <StyledTableCell key="score">Score</StyledTableCell>
          </TableRow>
        </StyledTableHead>
        {loadingData ? (
          lazyLoadStocks(rows)
        ) : (
          <>
            {renderStocks(stockListData)}
            <TablePagination
              style={{
                color: "white",
              }}
              component="div"
              page={page}
              count={-1}
              rowsPerPage={rows}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        )}
      </StockListTable>
    </StockListContainer>
  );
};

export default StockList;
