import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
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
