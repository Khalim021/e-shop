import React from 'react';

function Footer() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex justify-content-center">
            © {new Date().getFullYear()} Copyright Text
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;