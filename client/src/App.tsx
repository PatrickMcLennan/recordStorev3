import { ApolloProvider } from "@apollo/react-hooks";
import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle, theme } from "./utils/styleUtils/resets.style";

import Nav from "Component/Nav/Nav";
import Footer from "Component/Footer/Footer";

import UserContextProvider from "Context/UserContext";

import client from "Utility/client";

import CreateAccount from "View/CreateAccount/CreateAccount";
import CreatePlaylist from "View/CreatePlaylist/CreatePlaylist";
import Login from "View/Login/Login";
import Home from "View/Home/Home";

const App: FC = (): JSX.Element => (
  <Router>
    <Nav />
    <main>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/createPlaylist" component={CreatePlaylist} />
        <Route exact path="/createAccount" component={CreateAccount} />
      </Switch>
    </main>
    <Footer />
  </Router>
);

export const Index: FC<{}> = (): JSX.Element => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </UserContextProvider>
  </ApolloProvider>
);

export default App;
