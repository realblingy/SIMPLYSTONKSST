import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { Radar, RadarChart, PolarGrid } from "recharts";
import styled from "styled-components";

const StockTileContainer = styled(TableRow)`
  width: 100%;
  padding: 8px 10px;
  && {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const StyledTableCell = styled(TableCell)`
  && {
    width: ${(props) => props.width};
    color: white;
    height: 50px;
  }
`;

const renderStrokeColor = (future, health, income, misc, past) => {
  const maxValue = Math.max(future, health, income, misc, past);
  if (future === maxValue) {
    return "purple";
  } else if (health === maxValue) {
    return "green";
  } else if (income === maxValue) {
    return "yellow";
  } else if (misc === maxValue) {
    return "orange";
  } else if (past === maxValue) {
    return "lightblue";
  }
};

const StockTile = ({ name, symbol, lazy, scoreData = {} }) => {
  const { future, health, income, misc, past } = scoreData;

  return (
    <StockTileContainer data-testid="stocktile" hover>
      {lazy ? (
        <>
          <StyledTableCell>
            ---------------------------------------
          </StyledTableCell>
          <StyledTableCell>---</StyledTableCell>
          <StyledTableCell>---</StyledTableCell>
        </>
      ) : (
        <>
          <StyledTableCell>{name}</StyledTableCell>
          <StyledTableCell>{symbol}</StyledTableCell>
          <StyledTableCell>
            <RadarChart
              cx={25}
              cy={25}
              outerRadius={25}
              width={50}
              height={50}
              data={[
                { score: future },
                { score: health },
                { score: income },
                { score: misc },
                { score: past },
              ]}
            >
              <PolarGrid />
              <Radar
                name="Mike"
                dataKey="score"
                fill={renderStrokeColor(future, health, income, misc, past)}
                fillOpacity={0.6}
              />
            </RadarChart>
          </StyledTableCell>
        </>
      )}
    </StockTileContainer>
  );
};

export default StockTile;
