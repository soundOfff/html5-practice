import React from "react";
import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Enlace html (no recomendado)</span>
          <a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <span>Componente Link: </span>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/no-existe">Error 404</Link>
        </li>
        <li>
          <span>
            Componente NavLink: Para que funcione active classname, hay que
            aplicar exact
          </span>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/acerca" exact activeClassName="active">
            Acerca
          </NavLink>
          <NavLink to="/contacto" exact activeClassName="active">
            Contacto
          </NavLink>
        </li>
        <li>
          <span>Parametros: </span>
          <Link to="/usuario/jonmircha">jonmircha</Link>
          <Link to="/usuario/kenia">Kenia</Link>
        </li>

        <li>
          <span>Parametros de consulta: </span>
          <Link to="/productos">Productos</Link>
        </li>

        <li>
          <span>Redirecciones: </span>
          <Link to="/about">About</Link>
          <Link to="/Contact">Contact</Link>
        </li>

        <li>
          <span>Rutas anidadas: </span>
          <Link to="/react">React</Link>
        </li>

        <li>
          <span>Rutas privadas: </span>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
