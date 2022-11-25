import React from "react";
import Rashmiranjan_Mahanta_Resume from "../../assests/Rashmiranjan_Mahanta_Resume.pdf";
import {AiOutlineDownload} from 'react-icons/ai'

const Subcomponent = () => {
  return (
    <div className="cta">
      <a href={Rashmiranjan_Mahanta_Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default Subcomponent;
