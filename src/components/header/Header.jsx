import React from "react";
import "./header.css";
import Subcomponent from "./Subcomponent";
import Professional_Picture from "../../assests/Removed_background.png";
import Header_Socials from "./Header_Socials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rashmiranjan Mahanta</h1>
        <h5 className="text-light">Fullstack Web Devloper</h5>
        <Subcomponent />
        <Header_Socials />

        <div className="me">
          <img src={Professional_Picture} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
