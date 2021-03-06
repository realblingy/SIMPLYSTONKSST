import React from "react";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";

const useStyles = makeStyles({
  icon: {
    fill: "white",
  },
  root: {
    fill: "white",
  },
});

const StyledTypography = styled(Typography)`
  && {
    margin-right: 1rem;
    flex: 1;
  }

  @media (max-width: 550px) {
    && {
      margin-bottom: 1rem;
    }
  }
`;

const StyledSelect = styled(Select)`
  && {
    color: white;
    margin-right: 1rem;
    width: 150px;
  }

  @media (max-width: 550px) {
    && {
      margin-bottom: 1rem;
    }
  }
`;

const StyledInputLabel = styled(InputLabel)`
  .Mui-focused {
    color: darkred;
  }

  && {
    color: white;
  }
`;

const StyledToolBar = styled(Toolbar)`
  @media (max-width: 550px) {
    && {
      flex-direction: column;
    }
  }
`;

/**
 * Used to filter stocks by either market cap and/or country
 * @param country Country of stocks to be searched
 * @param marketCap Sorting order by market cap (either ascending or desecnding)
 */
const StockToolBar = ({ country, setCountry, marketCap, setMarketCap }) => {
  const classes = useStyles();

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleMarketCapChange = (e) => {
    setMarketCap(e.target.value);
  };

  return (
    <StyledToolBar data-testid="stocktoolbar" style={{ color: "white" }}>
      <StyledTypography>Biggest {country} Market Cap Gainers</StyledTypography>
      <FormControl>
        <StyledInputLabel id="country-select">Country</StyledInputLabel>
        <StyledSelect
          labelId="country-select"
          value={country}
          onChange={handleCountryChange}
          label="Country"
          data-testid="country-select-test"
          inputProps={{
            classes: {
              icon: classes.icon,
              root: classes.root,
            },
          }}
        >
          <MenuItem value="AU" data-testid="country-select-option">
            Australia
          </MenuItem>
          <MenuItem value="US" data-testid="country-select-option">
            United States
          </MenuItem>
          <MenuItem value="CA" data-testid="country-select-option">
            Canada
          </MenuItem>
        </StyledSelect>
      </FormControl>
      <FormControl>
        <StyledInputLabel id="market-cap-select">Market Cap</StyledInputLabel>
        <StyledSelect
          labelId="market-cap-select"
          label="Sort by Market Cap"
          value={marketCap}
          onChange={handleMarketCapChange}
          inputProps={{
            classes: {
              icon: classes.icon,
              root: classes.root,
            },
          }}
        >
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </StyledSelect>
      </FormControl>
    </StyledToolBar>
  );
};

export default StockToolBar;
