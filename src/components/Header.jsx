import React from 'react';
import { Link } from "react-router-dom";
import keycloak from '../services/KeycloakService';

function Header() {
  return (
    <div>
      { keycloak.authenticated ? (
        <button onClick={keycloak.logout}>
          Logout
         </button>
      ) : '' }
      <ul>
        <li>
          <Link to="/">Home page pública</Link>
        </li>
        <li>
          <Link to="/logged">Página com login requerido</Link>
        </li>
        <li>
          <Link to="/role-access">Página com role requerida</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
