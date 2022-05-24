import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

function Navbar(props) {
  const element = <FontAwesomeIcon icon={faEarthEurope} />;

  return (
    <div className="navbar">
      <h1 className="navbar-header">
        {element}
        <span> my travel journal.</span>
      </h1>
    </div>
  );
}

export default Navbar;
