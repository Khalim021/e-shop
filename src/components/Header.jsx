import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faGamepad} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className='header-style'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid py-3">
          <a className="navbar-brand" href="navbar">Fortnite Royal Game</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="gamepad">
            <FontAwesomeIcon icon={faGamepad}/>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
