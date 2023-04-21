import React from "react";
import "./skills.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiHeroku } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="skills-card">
      <h5>Accomplished</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3 className="ih">Frontend Devlopment</h3>
          <div className="experience__content">
            <article className="experience_details">
              {/* <AiOutlineHtml5 className="experience_details-icon" /> */}
              <img
                style={{ width: "35px", height: "35px" }}
                className="skills-card-img"
                src="https://img.icons8.com/color/48/null/html-5--v1.png"
              />
              <h4 className="skills-card-name">Html 5</h4>
            </article>

            <article className="experience_details">
              {/* <TbBrandCss3 className="experience_details-icon" /> */}
              <img
                style={{ width: "35px", height: "35px" }}
                className="skills-card-img"
                src="https://img.icons8.com/fluency/48/null/css3.png"
              />
              <h4 className="skills-card-name">Css</h4>
            </article>
            <article className="experience_details">
              {/* <TbBrandJavascript className="experience_details-icon" /> */}
              <img
                style={{ width: "35px", height: "35px" }}
                className="skills-card-img"
                src="https://img.icons8.com/fluency/48/null/javascript.png"
              />
              <h4 className="skills-card-name">JavaScript</h4>
            </article>
            <article className="experience_details">
              {/* <FaReact className="experience_details-icon" /> */}
              <img
                style={{ width: "35px", height: "35px" }}
                className="skills-card-img"
                src="https://img.icons8.com/plasticine/100/null/react.png"
              />
              <h4 className="skills-card-name">React</h4>
            </article>
            <article className="experience_details">
              {/* <SiChakraui className="experience_details-icon" /> */}
              <img
                style={{ width: "35px", height: "35px" }}
                className="skills-card-img"
                src="https://img.icons8.com/color/48/null/chakra-ui.png"
              />
              <h4 className="skills-card-name">Chakra Ui</h4>
            </article>
            <article className="experience_details">
              {/* <SiRedux className="experience_details-icon" /> */}
              <img
                style={{ width: "35px", height: "35px" }}
                className="skills-card-img"
                src="https://img.icons8.com/color/48/null/redux.png"
              />
              <h4 className="skills-card-name">Redux</h4>
            </article>
          </div>
        </div>
        {/* end of Forntend section */}
        <div className="experience__backend">
          <h3 className="ih">Backend Devlopment</h3>
          <article className="experience_details">
            {/* <FaNodeJs className="experience_details-icon" /> */}
            <img
              style={{ width: "35px", height: "35px" }}
              className="skills-card-img"
              src="https://img.icons8.com/color/48/null/nodejs.png"
            />
            <h4 className="skills-card-name">NodeJS</h4>
          </article>
          <article className="experience_details">
            {/* <SiExpress className="experience_details-icon" /> */}
            <img
              style={{ width: "35px", height: "35px" }}
              className="skills-card-img"
              src="https://img.icons8.com/office/40/null/express-js.png"
            />
            <h4 className="skills-card-name">Express JS</h4>
          </article>
          <article className="experience_details">
            {/* <SiMongodb className="experience_details-icon" /> */}
            <img
              style={{ width: "35px", height: "35px" }}
              className="skills-card-img"
              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"
            />
            <h4 className="skills-card-name">Mongodb</h4>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;
