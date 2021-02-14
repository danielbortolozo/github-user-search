import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';


const Routes = () => (
    <BrowserRouter>
    
        <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/search" exact>
              <Search />
          </Route>

          
        </Switch>      
    </BrowserRouter>
  
  );

  export default Routes;