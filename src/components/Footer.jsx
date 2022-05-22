import React from 'react';

function Footer() {
  return (
    <div className='footer-style'>
      <footer className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex justify-content-center py-5">
            © {new Date().getFullYear()} Copyright Text
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;