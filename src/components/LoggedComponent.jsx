import React from 'react';
import keycloak from '../services/KeycloakService';
import LoginSuggestion from './LoginSuggestion';

function LoggedComponent() {
  if (!keycloak.authenticated) return (<LoginSuggestion/>);
  return (
    <div>
      <p>Se você está vendo essa mensagem, certamente está logado!</p>
      <p>Bem vindo(a) { keycloak.tokenParsed.name }</p>
    </div>
  );
}

export default LoggedComponent;
