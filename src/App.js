import "./App.css";
import styled from "styled-components";
import MainAppBar from "./components/MainAppBar";
import StockList from "./components/StockList";

const AppContainer = styled.main`
  background-color: rgb(21, 27, 36);
  padding-bottom: 70px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <MainAppBar />
      <StockList />
    </AppContainer>
  );
}

export default App;
