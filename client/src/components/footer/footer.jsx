import React from "react";

import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a
          href="https://www.facebook.com/ifzal.kola/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "facebook"]} size="3x" />
        </a>
        <a
          href="https://github.com/ifzalkola"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
        </a>
        <a
          href="https://www.instagram.com/ifzal_kola/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
        </a>
      </div>
      <div className="logo-container">
        <img src="i-tours-logo.png" alt="logo" className="logo" />
      </div>
      <p>ITours &copy; 2021 All Rights Reserved.</p>
    </footer>
  );
};
export default Footer;
