import React from "react";
import "./header.css";
import Subcomponent from "./Subcomponent";
import Professional_Picture from "../../assests/Removed_background.png";
import Header_Socials from "./Header_Socials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 id="user-detail-name">Rashmiranjan Mahanta</h1>
        <h5 className="text-light">Fullstack Web Devloper</h5>
        <Subcomponent />
        <Header_Socials />

        {/* <div className="me">
          <img src={Professional_Picture} alt="" />
        </div> */}
        <div className="gif-image">
          <img src="https://camo.githubusercontent.com/8bf6f6d78abc81fcf9c49f10649423e73ea44bc248e83aaae8759d401c829a84/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966" alt="gif" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
