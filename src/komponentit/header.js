import React from 'react';
import { NavLink } from 'react-router-dom';
import Otsikko from './otsikko';

const Header = () => (
    <div>
      <Otsikko />
      <div className="header w3-card-4">
      <NavLink to="/" className="navlink w3-hover-opacity" activeClassName="is-active w3-hover-opacity-off" exact={true}>Pelaa</NavLink>
      <NavLink to="/toinen" className="navlink w3-hover-opacity" activeClassName="is-active w3-hover-opacity-off">Ohjeet</NavLink>
      <NavLink to="/kolmas" className="navlink w3-hover-opacity" activeClassName="is-active w3-hover-opacity-off">Tietoa uhkapelaamisesta</NavLink>
      </div>
    </div>
  );

  export default Header;