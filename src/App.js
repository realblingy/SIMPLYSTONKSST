import "./App.css";
import styled from "styled-components";
import MainAppBar from "./components/MainAppBar";
import StockList from "./components/StockList";

const AppContainer = styled.main`
  background-color: rgb(21, 27, 36);
  padding-bottom: 70px;
  min-width: 1200px;
  position: relative;
  overflow-y: hidden;
`;

const AppListContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 1200px;
  margin-top: 64px;
  min-height: 1200px;

  position: relative;
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
