import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import '../css/App.css';

import LandingPage from '../components/LandingPage';
import Login from '../components/Login';
import LoginRegister from '../components/LoginRegister';

const App =()=>(
  <BrowserRouter>
    <div className="margen">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/login/register" component={LoginRegister}/>
    </div>
  </BrowserRouter>
);

export default App;
