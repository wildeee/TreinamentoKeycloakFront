import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
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
  );
}

export default Header;
