import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from '../data/MenuItems';

import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="header-navbar">
        <div className="navbar-logo">
          <img
            className="logo-image"
            src="https://eu01.edcwb.com/buscador/img/centros/logogrande/7348-a9c730d6b2b644f5b9910364ba6af277.jpg"
          />
        </div>
        <div className="fa.futbol" />
        <ul>
          {MenuItems.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  /**
   * Forma menú nº 1: bucle for
   */
  createMenuLinks() {
    const listComponents = [];
    for (let i = 0; i < MenuItems.length; i++) {
      listComponents.push(
        <li>
          <Link to={MenuItems[i].path}>{MenuItems[i].title}</Link>
        </li>
      );
    }
    return listComponents;
  }
}

export default Header;
