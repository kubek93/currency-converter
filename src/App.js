import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { ThemeProvider } from "styled-components";
import React from "react";
import styled from "styled-components";

import SelectLanguages from "./containers/SelectLanguages";
import GlobalStyle from "./styles";
import logo from "./logo.svg";

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

const App = () => (
  <ThemeProvider theme={{ fontFamily: "Helvetica Neue" }}>
    <>
      <GlobalStyle />
      <AppContainer>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>
            <FormattedMessage id="app.title" defaultMessage="app.title" />
          </AppTitle>
        </AppHeader>
        <AppIntro>
          <FormattedMessage id="app.intro" defaultMessage="app.intro" />
          <SelectLanguages />
        </AppIntro>
      </AppContainer>
    </>
  </ThemeProvider>
);

const mapStateToProps = state => ({
  languages: state.languages
});

export default connect(mapStateToProps)(App);
