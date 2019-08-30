import React from 'react';
import keycloak from '../services/KeycloakService';
import LoginSuggestion from './LoginSuggestion';

const ROLE_NAME = 'ticaracatica';

function RoleAccessComponent() {
  if (!keycloak.authenticated) return (<LoginSuggestion/>);
  const hasRole = keycloak.hasRealmRole(ROLE_NAME);
  if (!hasRole) return (
    <div>
      { keycloak.tokenParsed.name }, parece que você logou, mas não tem acesso à role { ROLE_NAME }
    </div>
  );
  return (
    <div>
      Permissão { ROLE_NAME } concedida!
    </div>
  );
}

export default RoleAccessComponent;
