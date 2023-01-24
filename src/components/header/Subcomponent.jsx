import React from "react";
import Rashmiranjan_Mahanta_Resume from "../../assests/Rashmiranjan_Mahanta_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const Subcomponent = () => {
  return (
    <div className="cta">
      <a href={Rashmiranjan_Mahanta_Resume} download >
        <p 
        className="btn"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1T6rrjn1ZjfbWQzQYBfY5ryO_9nuQlEP2/view?usp=sharing",
              "_blank"
            );
          }}
        >
          Download Resume
        </p>
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default Subcomponent;
