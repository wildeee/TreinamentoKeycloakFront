import React from 'react';
import keycloak from '../services/KeycloakService';

const ROLE_NAME = 'ticaracatica';

class RoleAccessComponent extends React.Component {
  componentDidMount() {
    if (!keycloak.authenticated) {
      keycloak.login();
    }
  }
  render() {
    const hasRole = keycloak.hasRealmRole(ROLE_NAME);
    if (!hasRole) return (
      <div>
        Opa, parece que você não tem acesso à role { ROLE_NAME }
      </div>
    );
    return (
      <div>
        Permissão { ROLE_NAME } concedida!
      </div>
    );
  }
}

export default RoleAccessComponent;
