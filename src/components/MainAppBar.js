import { AppBar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import StonksLogo from "../assets/images/logo.png";

const TopBar = styled(AppBar)`
  && {
    background-color: rgb(21, 27, 36);
    height: 64px;
    box-shadow: none;
    display: flex;
    justify-content: center;
    padding: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const MainAppBar = () => {
  return (
    <TopBar>
      <span>
        <b>SIMPLY STONKS </b>
        <img width={25} src={StonksLogo} alt="Stonks Logo" />
        <u>ST</u>
      </span>
    </TopBar>
  );
};

export default MainAppBar;
