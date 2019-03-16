import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { Switch } from 'react-router';
import Header from '../komponentit/header';
import Etusivu from '../komponentit/etusivu';
import Toinen from '../komponentit/toinen';
import Kolmas from '../komponentit/kolmas';
import NotFound from '../komponentit/notFound';
import '../css/App.css';

const AppRouter = () => (
  <BrowserRouter>
    <div className="App fontti">
      <Header />
      <Switch>   
        <Route path="/" component={Etusivu} exact={true} />
        <Route path="/toinen" component={Toinen} />
        <Route path="/kolmas" component={Kolmas} />
        <Route component={NotFound} />
      </Switch>  
    </div>
  </BrowserRouter>
);

export default AppRouter;


