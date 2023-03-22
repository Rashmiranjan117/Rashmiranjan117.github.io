import React from "react";
import "./about.css";
import Professional_Picture from "../../assests/professional_picture.jpg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsAward } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Professional_Picture} alt="professional picture" />
        </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <AiOutlineClockCircle className="about__icon" />
              <h5>+1200 hours</h5>
              <small>of coding</small>
            </article>

            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Hands on Experience</h5>
              <small>On Working on Various Projects</small>
            </article>
          </div>
          <p>
            I am a Fullstack web developer with a focus on the MERN stack. I
            have more than 1200 hours of coding experience, working on various
            projects, both as part of a team and as an individual. I am
            passionate about web development and am always looking to improve my
            skills.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
