import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header';
import PublicComponent from './components/PublicComponent';
import LoggedComponent from './components/LoggedComponent';
import RoleAccessComponent from './components/RoleAccessComponent';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Header}/>
        <Route exact path="/" component={PublicComponent}/>
        <Route path="/logged" component={LoggedComponent}/>
        <Route path="/role-access" component={RoleAccessComponent}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
