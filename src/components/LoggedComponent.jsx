import React from 'react';
import keycloak from '../services/KeycloakService';

class LoggedComponent extends React.Component {
  componentDidMount() {
    if (!keycloak.authenticated) {
      keycloak.login();
    }
  }

  render() {
    if (!keycloak.authenticated) return '';
    return (
      <div>
        <p>Este componente só deverá aparecer para aqueles que estiverem logados</p>
        <p>Bem vindo(a) { keycloak.tokenParsed.name }</p>
      </div>
    );
  }
}

export default LoggedComponent;
