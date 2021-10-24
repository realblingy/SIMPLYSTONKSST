import axios from "axios";

const STOCK_LIST_API =
  "https://api.simplywall.st/api/grid/filter?include=info,score";

export const fetchStocks = async (page, SIZE, marketCap, country) => {
  return axios.post(STOCK_LIST_API, {
    offset: page * SIZE,
    size: SIZE,
    rules: [
      ["order_by", "market_cap", marketCap],
      ["primary_flag", "=", true],
      ["grid_visible_flag", "=", true],
      ["market_cap", "is_not_null"],
      ["is_fund", "=", false],
      ["aor", [["country_name", "in", [country]]]],
    ],
  });
};
