import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header';
import PublicComponent from './components/PublicComponent';
import LoggedComponent from './components/LoggedComponent';
import RoleAccessComponent from './components/RoleAccessComponent';
import keycloak from './services/KeycloakService';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      initialized: false,
    };
  }

  componentDidMount() {
    keycloak.init().success(() => {
      this.setState({ initialized: true });
    }).error((err) => {
      console.error('Erro ao inicializar o keycloak');
      console.log(err);
    });
  }

  render() {
    if (!this.state.initialized) return '';
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
}

export default App;
