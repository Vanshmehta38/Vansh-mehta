import React from "react";

// ** Icon imports
import { FaCheck } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaAward } from "react-icons/fa6";

const Experience = () => {
  return (
    <>
      <div className="section stats-container parallax-mf bg-image mt-[5rem]">
        <div className="overlay-mf"></div>
        <div data-aos="fade-up" className="stat-item">
          <div className="counter-ico">
            <span className="ico-circle">
              <FaCheck className="icon" />
            </span>
          </div>
          <div className="stat-number">26+</div>
          <div className="stat-description">Projects Completed</div>
        </div>
        <div data-aos="fade-up" className="stat-item">
          <div className="counter-ico">
            <span className="ico-circle">
              <MdOutlineDateRange className="icon" />
            </span>
          </div>
          <div className="stat-number">1+</div>
          <div className="stat-description">Years of Experience</div>
        </div>
        <div data-aos="fade-up" className="stat-item">
          <div className="counter-ico">
            <span className="ico-circle">
              <FaAward className="icon" />
            </span>
          </div>
          <div className="stat-number">2+</div>
          <div className="stat-description">Awards Won</div>
        </div>
      </div>
    </>
  );
};

export default Experience;
