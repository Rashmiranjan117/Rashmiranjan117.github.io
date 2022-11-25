import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const Header_Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/rashmiranjan-mahanta-281634202/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Rashmiranjan117" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default Header_Socials;
