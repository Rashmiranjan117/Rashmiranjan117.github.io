import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="foot-element">
        <a href="#" className="btn btn-primary" >Scroll To Top</a>
        <h5>Made by Rashmiranjan</h5>
      </div>
    </footer>
  );
};

export default Footer;
