import { ApolloProvider } from "@apollo/react-hooks";
import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle, theme } from "./utils/styleUtils/resets.style";
import {
  AnimatedRoutes,
  RouteTransition
} from "Component/routes/AnimatedRoutes";

import Nav from "Component/Nav/Nav";
import Footer from "Component/Footer/Footer";

import UserContextProvider from "Context/UserContext";

import client from "Utility/client";

import CreateAccount from "View/CreateAccount/CreateAccount";
import CreatePlaylist from "View/CreatePlaylist/CreatePlaylist";
import Login from "View/Login/Login";
import Home from "View/Home/Home";
import ViewPlaylist from "View/ViewPlaylist/ViewPlaylist";

const App: FC<{}> = (): JSX.Element => (
  <Router>
    <Nav />
    <AnimatedRoutes exitBeforeEnter initial={true}>
      <RouteTransition exact path="/login" slide={50}>
        <Login />
      </RouteTransition>
      <RouteTransition exact path="/" slide={-50}>
        <Home />
      </RouteTransition>
      <RouteTransition exact path="/createPlaylist" slideUp={-50}>
        <CreatePlaylist />
      </RouteTransition>
      <RouteTransition exact path="/createAccount" slideUp={-50}>
        <CreateAccount />
      </RouteTransition>
      <RouteTransition exact path="/viewPlaylist" slideUp={50}>
        <ViewPlaylist />
      </RouteTransition>
    </AnimatedRoutes>
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
