import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const About = () => {
  return (
    <div id="about">
      <div className="m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="section-title">
          <span>About</span>
          <h2>About</h2>
          <p>Here are About me.</p>
        </div>

        {/* content */}
        <div className="flex md:flex-col about-container">
          {/* left box */}
          <div
            data-aos="zoom-in"
            className="left relative flex-1 flex flex-wrap gap-10 items-center justify-center sm:w-[90%]"
          >
            {/* Profile Image Section */}
            <div className="about-section-profile">
              <img
                src="/images/profile-img.png"
                alt="Profile"
                className="about-section-profile-image"
              />
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap gap-10 items-center justify-center sm:w-[90%]">
            {/* Profile Details Section */}
            <div className="profile-details">
              <h1 className="mb-5">Vansh Mehta</h1>
              <h6 className="mb-5">
                I'm a Passionate{" "}
                <span className="text-primary">Web Designer</span>
              </h6>
              <p className="text-muted">
                I'm a React.js Developer with a demonstrated history of
                delivering high-quality, scalable software solutions.Experienced
                with all stages of the development cycle for dynamic web
                projects.Skilled in HTML, CSS, and JavaScript, with specialized
                knowledge in React and Next.js for web application
                development.Seeking a stimulating software engineering position
                to contribute expertise in driving innovation and delivering
                impactful projects.
              </p>
              <p className="text-muted">
                Proficient in designing and implementing maintainable software
                solutions in dynamic environments.Ability to complete tasks on
                time. Dependable and reliable, ready to learn and grow with your
                company.Hard worker experienced in problem-solving, service and
                time management.Work closely with other developers and
                professionals.Dedicated worker with excellent communication,
                time management and computer skills.
              </p>
              <img
                src="/images/Signature.png"
                alt="vansh mehta"
                className="signature-image mb-5"
              />
              <a href="#works" className="portfolio-button">
                <span>View Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
