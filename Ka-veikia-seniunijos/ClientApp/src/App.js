import React, { Component } from "react";
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from "./components/Pages/Home/Home";
import Eldership from "./components/Pages/Eldership-feed/Eldership";
import Profile from "./components/Pages/Profile/Profile";
import Mailbox from "./components/Pages/Mailbox/Mailbox";
import Map from "./components/Pages/Map/Map";
import Administrative from "./components/Pages/Administrative/Administrative.js";
import About from "./components/Pages/About/About";
import isAuthorized from "./utils/isAuthorized";
import NotFoundPage from './components/Pages/NotFound/NotFound';

function getToken() {
  const tokenString = sessionStorage.getItem("userData");
  const userToken = JSON.parse(tokenString);
  console.log(userToken);
  return userToken;
}
export default class App extends Component {
  static displayName = App.name;
  render () {
      const data = getToken();
      return (
          <>
              <BrowserRouter>
                  <Switch>
                    <Route exact path='/:path(|home)' component={Home} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/eldership' component={Eldership} />
                    <Route exact path='/mailbox' component={Mailbox} />
                     <Route exact path='/map' component={Map} />
                     <Route exact path="/about" component={About} />
                    <Route
                      exact
                      path="/admin/eldership"
                      render={() => {
                        return isAuthorized(data) ? (
                          <Route exact path="/admin/eldership" component={Administrative} />
                          ) : (
                          <Redirect to="/404" />
                        );
                      }}
                    />
                     <Route path="/404" component={NotFoundPage} />
                     <Redirect to="/404" />
                  </Switch>
              </BrowserRouter>
        </>
    );
  }
}
