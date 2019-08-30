import React from 'react';
import keycloak from '../services/KeycloakService';

function LoginSuggestion() {
  return (
    <div>
      <p>Ops, parece que você ainda não está logado.</p>
      <button onClick={keycloak.login}>Faça seu login</button>
    </div>
  );
}

export default LoginSuggestion;
