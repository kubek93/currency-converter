import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles";
import logo from "./logo.svg";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppTitle = styled.h1`
  font-size: 3.5em;
`;

const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const AppIntro = styled.p`
  font-size: large;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{ fontFamily: "Helvetica Neue" }}>
        <>
          <GlobalStyle />
          <AppContainer>
            <AppHeader>
              <AppLogo src={logo} alt="logo" />
              <AppTitle>Welcome to React</AppTitle>
            </AppHeader>
            <AppIntro>
              To get started, edit <code>src/App.js</code> and save to reload.
            </AppIntro>
          </AppContainer>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
