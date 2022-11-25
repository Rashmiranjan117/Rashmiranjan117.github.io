import React from "react";
import "./project.css";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import MailChimp from "../../assests/MailChimp.jpg";
import bluemercury from "../../assests/bluemercury.jpg";

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects_container">
        {/* first project here */}
        <article className="project_item">
          <div className="project_item-image">
            <img src={MailChimp} alt="mailchimp" />
            <h3>MailChimp Clone</h3>
            <div className="project__item-cta">
              <a
                href="https://github.com/Rashmiranjan117/Rashmi
ranjan_Mahanta-cold-lamp-3047-"
                className="btn"
                target="_blank"
              >
                <AiOutlineGithub /> Github
              </a>
              <a
                href="https://rashmiranjanmahanta-fw20-1193-
unit2constructweekproject.netlify.app/"
                className="btn btn-primary"
                target="_blank"
              >
                <FiExternalLink /> Deployed Url
              </a>
            </div>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item-image">
            <img src={bluemercury} alt="" />
            <h3>bluemercury Clone</h3>
            <div className="project__item-cta">
              <a
                href="https://github.com/ignitinsharma/bluemercury_clone"
                className="btn"
                target="_blank"
              >
                <AiOutlineGithub /> Github
              </a>
              <a
                href="https://bluemercury-clone-project.netlify.app/"
                className="btn btn-primary"
                target="_blank"
              >
                <FiExternalLink /> Deployed Url
              </a>
            </div>
          </div>
        </article>

        {/* second project here */}
      </div>
    </section>
  );
};

export default Projects;
