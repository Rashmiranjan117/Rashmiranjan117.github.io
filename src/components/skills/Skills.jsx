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
    <section id="skills">
      <h5>Accomplished</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3 className="ih">Frontend Devlopment</h3>
          <div className="experience__content">
            <article className="experience_details">
              <AiOutlineHtml5 className="experience_details-icon" />
              <h4>Html 5</h4>
            </article>

            <article className="experience_details">
              <TbBrandCss3 className="experience_details-icon" />
              <h4>Css</h4>
            </article>
            <article className="experience_details">
              <TbBrandJavascript className="experience_details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience_details">
              <FaReact className="experience_details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience_details">
              <SiChakraui className="experience_details-icon" />
              <h4>Chakra Ui</h4>
            </article>
            <article className="experience_details">
              <SiRedux className="experience_details-icon" />
              <h4>Redux</h4>
            </article>
          </div>
        </div>
        {/* end of Forntend section */}
        <div className="experience__backend">
        <h3 className="ih">Backend Devlopment</h3>
          <article className="experience_details">
            <FaNodeJs className="experience_details-icon" />
            <h4>NodeJS</h4>
          </article>
          <article className="experience_details">
            <SiExpress className="experience_details-icon" />
            <h4>Express JS</h4>
          </article>
          <article className="experience_details">
            <SiMongodb className="experience_details-icon" />
            <h4>Mongodb</h4>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;
