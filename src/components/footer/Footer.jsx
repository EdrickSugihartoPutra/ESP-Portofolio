import React from "react";

import "./footer.css";

import LinkedIn from "../../img/linkedin.png";
import IG from "../../img/ig.png";
import Github from "../../img/github.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <h3 className="f-left-title">My Social Media</h3>
          <div className="f-social" data-aos="fade-right" data-aos-offset="100">
            <a
              href="https://www.linkedin.com/in/edrick-sugiharto-putra/"
              className="f-social-wrapper"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIn} alt="linkedin" className="f-social-item" />
              <p>LinkedIn</p>
            </a>
            <a
              href="https://www.instagram.com/driicke/"
              className="f-social-wrapper"
              target="_blank"
              rel="noreferrer"
            >
              <img src={IG} alt="instagram" className="f-social-item" />
              <p>Instagram</p>
            </a>
            <a
              href="https://github.com/EdrickSugihartoPutra"
              className="f-social-wrapper"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="github" className="f-social-item" />
              <p>GitHub</p>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <h2
            className="f-right-title"
            data-aos="zoom-in"
            data-aos-offset="100"
          >
            That's it!
          </h2>
          <div className="f-text" data-aos="zoom-in" data-aos-offset="100">
            That's all from me for now, I will update this website periodically
            as I progress with my studies. Thanks for visitting!
            <p className="copyright">&copy; Edrick Sugiharto Putra 2022</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
