import './App.css';

import React from "react";
import { BrowserRouter as Router /*Va a decirle a la app que tenga navegabilidad*/, Switch, Route } from "react-router-dom";
import Home from '../../Pages/Home'
import Category from '../../Pages/Category'
import Search from '../../Pages/Search'
import SearchAppBar from '../SearchAppBar/SearchAppBar'


function App() {

  //Hacer fetch al endpoint de X categoria

  

  return (
    <>
      <Router>
        <SearchAppBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category/:slug">
            <Category />
          </Route>
          <Route path="/search/:slug">
            <Search />
          </Route>
          <Route path="*">
            <p>Page not found</p>
          </Route>
        </Switch>
      </Router>

    </>
    
  )
}

export default App;
