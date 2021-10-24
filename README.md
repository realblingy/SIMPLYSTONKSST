# Assignment for Simply Wall ST

### Overview

---

I used JavaScript to make this application, along with styled-components, axios and Material UI. It also includes unit tests, which you can find under the components folder. It fulfils all the requirements listed on the specification which included:

\- Show a list of companies presented in a tile

\- Tile that shows the company name (Apple), unique symbol (NasdaqGS:APPL), snowflake score

\- Pagination (Pages, Infinite scrolling or Load more)

\- Filtering by country (refer to `https://simplywall.st/stocks` for supported country list)

\- Sorting by market cap (ASC and DESC direction)

\- Some form of basic styling (this is a front-end role). Feel free to use libraries (bootstrap, material-ui) as long as it doesn't conflict with the primary criteria.

You can also find the deployed version at https://6174efb7a5f84be219e146c1--priceless-einstein-ed2145.netlify.app/.

Hope you like what I've built!

### Notes

---

- I only included the following countries: US, CA and AUS
- API requests are only adjusted by market cap, country, offset and size
- This is not responsive for mobile
