import "./App.css";
import styled from "styled-components";
import MainAppBar from "./components/MainAppBar";
import StockList from "./components/StockList";

const AppContainer = styled.main`
  background-color: rgb(21, 27, 36);
  padding-bottom: 70px;
`;

const AppListContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 600px;
  margin-top: 64px;
`;

function App() {
  return (
    <AppContainer>
      <MainAppBar />
      <AppListContainer>
        <StockList />
      </AppListContainer>
    </AppContainer>
  );
}

export default App;
