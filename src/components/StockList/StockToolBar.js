import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";

const StyledTypography = styled(Typography)`
  && {
    margin-right: 1rem;
    flex: 1;
  }
`;

const StyledSelect = styled(Select)`
  && {
    color: white;
    margin-right: 1rem;
    width: 150px;
  }
`;

const StyledInputLabel = styled(InputLabel)`
  && {
    color: white;
  }
`;

const StockToolBar = ({ country, setCountry, marketCap, setMarketCap }) => {
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleMarketCapChange = (e) => {
    setMarketCap(e.target.value);
  };

  return (
    <Toolbar style={{ color: "white" }}>
      <StyledTypography>Biggest {country} Market Cap Gainers</StyledTypography>
      <FormControl>
        <StyledInputLabel id="country-select">Country</StyledInputLabel>
        <StyledSelect
          labelId="country-select"
          value={country}
          onChange={handleCountryChange}
          label="Country"
        >
          <MenuItem value="AU">Australia</MenuItem>
          <MenuItem value="US">United States</MenuItem>
          <MenuItem value="CA">Canada</MenuItem>
        </StyledSelect>
      </FormControl>
      <FormControl>
        <StyledInputLabel id="market-cap-select">Market Cap</StyledInputLabel>
        <StyledSelect
          labelId="market-cap-select"
          label="Sort by Market Cap"
          value={marketCap}
          onChange={handleMarketCapChange}
        >
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </StyledSelect>
      </FormControl>
    </Toolbar>
  );
};

export default StockToolBar;
