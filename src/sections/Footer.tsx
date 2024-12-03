import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className="footer-link">
        <small className="footer-info">
          &copy; {currentYear} Deva Aulia Putri Syam. All rights reserved.
        </small>
      </p>
    </footer>
  );
}

export default Footer;
