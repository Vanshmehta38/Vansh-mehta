import React from "react";
import Experience from "./Work";
import Education from "./Education";
import Courses from "./Courses";

const Resume = () => {
  return (
    <>
      <div id="resume" className=" container m-auto   mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="section-title">
          <span>My Resume</span>
          <h2>My Resume</h2>
          <p>Here are my experiences and qualifications.</p>
        </div>

        {/* Experience */}
        <Experience />

        {/* Education */}
        <Education />

        {/* <Courses /> */}
      </div>
    </>
  );
};

export default Resume;
