import React from "react";

import { FaHeart, FaTwitter, FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'

import "./Footer.css";

import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <br/>

      <div className="footer">
        <div className="social-links">
          <span className="social-span">Siga nós nas rede sociais</span>
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          <img src={Twitter} alt="" />
        </div>

        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
      <br/>
      <hr />
      <div className="footer-dev">
        <p className="footer__copyright">
          Desenvolvido por <a 
            href="https://2system.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            2System
          </a> <FaHeart size={15} color="#FFF" />
        </p>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/2system_dev/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={20} color="#FFF" />
          </a>

          <a
            href="https://wa.me/5516996318063"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp size={20} color="#FFF" />
          </a>

          <a
            href="https://www.linkedin.com/in/elvis-felix/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={20} color="#FFF" />
          </a>

          <a
            href="https://github.com/ElvisFelix-dev"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={20} color="#FFF" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Footer;
