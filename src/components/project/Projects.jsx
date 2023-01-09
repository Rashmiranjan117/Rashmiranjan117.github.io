import React from "react";
import "./project.css";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import MailChimp from "../../assests/MailChimp.jpg";
import bluemercury from "../../assests/bluemercury.jpg";
import smartStore from "../../assests/smartStore.jpg";
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
            <div>
              <p>
                Mailchimp is an marketing automation platform and email
                marketing service(Reaching to their targeted audience via
                emails.).
              </p>
              <div style={{ display: "flex", gap: "8px", margin: "10px" }}>
                <img
                  style={{ width: "35px" }}
                  src="https://img.icons8.com/color/48/null/html-5--v1.png"
                />
                <img
                  style={{ width: "35px" }}
                  src="https://img.icons8.com/fluency/48/null/css3.png"
                />
                <img
                  style={{ width: "35px" }}
                  src="https://img.icons8.com/fluency/48/null/javascript.png"
                />
              </div>
            </div>
            <div className="project__item-cta">
              <a
                href="https://github.com/Rashmiranjan117/Rashmiranjan_Mahanta-cold-lamp-3047-Construct-week-project"
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
        {/* second project here */}
        <article className="project_item">
          <div className="project_item-image">
            <img src={bluemercury} alt="" />
            <h3>bluemercury Clone</h3>
            <div>
              <p>
                Bluemercury.com is a leading luxury beauty retailer offering the
                best of cosmetics, skincare, makeup, perfume, hair, bath, and
                body products.
              </p>
              <div style={{ display: "flex", gap: "8px", margin: "10px" }}>
                <img
                  style={{ width: "35px" }}
                  src="https://img.icons8.com/color/48/null/html-5--v1.png"
                />
                <img
                  style={{ width: "35px" }}
                  src="https://img.icons8.com/fluency/48/null/css3.png"
                />
                <img
                  style={{ width: "35px" }}
                  src="https://img.icons8.com/fluency/48/null/javascript.png"
                />
              </div>
            </div>
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

        {/* third Project here */}
        <article className="project_item">
          <div className="project_item-image">
            <img src={smartStore} alt="" />
            <h3>Smart Store</h3>
            <div>
              <p>
                Smartstore.com is a clone of JioMart, India's most convenient
                online grocery channel.
                <br /> No more hassles of sweating it out in crowded markets,
                grocery shops & supermarkets - now shop from the comfort of your
                -home office or on the move.
              </p>
              <div style={{ display: "flex", gap: "8px", margin: "10px" }}>
                <img
                  style={{ width: "35px" }}
                  src="https://img.icons8.com/color/48/null/react-native.png"
                />
                <img
                  style={{ width: "35px" }}
                  src="https://img.icons8.com/fluency/48/null/css3.png"
                />
                <img
                  style={{ width: "35px" }}
                  src="https://img.icons8.com/color/48/null/redux.png"
                />
                <img
                  style={{ width: "35px" }}
                  src="https://img.icons8.com/color/48/null/chakra-ui.png"
                />
                <img
                  style={{ width: "35px" }}
                  src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/null/external-Bootstrap-social-media-those-icons-lineal-color-those-icons.png"
                />
              </div>
            </div>
            <div className="project__item-cta">
              <a
                href="https://github.com/ajayahara/naive-rings-3032"
                className="btn"
                target="_blank"
              >
                <AiOutlineGithub /> Github
              </a>
              <a
                href="https://melodic-wisp-f3c5fb.netlify.app/"
                className="btn btn-primary"
                target="_blank"
              >
                <FiExternalLink /> Deployed Url
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
{
  /* <article className="project_item">
<div className="project_item-image">
  <img src={smartStore} alt="" />
  <h3>Smart Store</h3>
  <p>
    Smartstore.com is a clone of JioMart, India's most convenient
    online grocery channel.
    <br /> No more hassles of sweating it out in crowded markets,
    grocery shops & supermarkets - now shop from the comfort of your
     -home office or on the move.
  </p>
  <div style={{ display: "flex", gap: "8px", margin: "10px" }}>
      <img
        style={{ width: "35px" }}
        src="https://img.icons8.com/color/48/null/react-native.png"
      />
      <img
        style={{ width: "35px" }}
        src="https://img.icons8.com/color/48/null/redux.png"
      />
      <img
        style={{ width: "35px" }}
        src="https://img.icons8.com/color/48/null/chakra-ui.png"
      />
      <img
        style={{ width: "35px" }}
        src="https://img.icons8.com/fluency/48/null/css3.png"
      />
      <img
        style={{ width: "35px" }}
        src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/null/external-Bootstrap-social-media-those-icons-lineal-color-those-icons.png"
      />
    </div>
</div>
</article> */
}
