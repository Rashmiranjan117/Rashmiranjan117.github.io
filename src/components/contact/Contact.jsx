import React from "react";
import "./contact.css";
import { SiGmail } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact_option">
            <SiGmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>rashmiranjan007jb@gmail.com</h5>
            <a href="mailto:rashmiranjan007jb@gmail.com">Send An Email</a>
          </article>
          <article className="contact_option">
            <AiOutlineLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Rashmiranjan Mahanta</h5>
            <a
              href="https://www.linkedin.com//in/rashmiranjan-mahanta-281634202/"
              target="_blank"
            >
              Connect on LinkedIn
            </a>
          </article>
          <article className="contact_option">
            <AiOutlinePhone className="contact_option-icon" />
            <h4>Phone Number</h4>
            <h5>+9179798184908</h5>
            <a href="tel://+917978184908" target="_blank">
              Phone call
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
