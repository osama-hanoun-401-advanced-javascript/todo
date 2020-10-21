import React from 'react';

import ToDo from './components/todo/todo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/todo/header'
import Settings from './components/todo/settings'

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <ToDo />
            </Route>
            <Route exact path="/settings" >
              <Settings />
            </Route>
          </Switch>
        </BrowserRouter>

      </>
    );
  }
}
