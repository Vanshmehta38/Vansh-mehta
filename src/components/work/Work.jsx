import React from "react";
import WorkCard from "../../chip/WorkCard";

const Work = () => {
  return (
    <div id="works" className="container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="section-title">
        <span>My Works</span>
        <h2>My Works</h2>
        <p>Here are some of my works.</p>
      </div>

      {/* card */}
      <div className="card-wrapper mx-auto w-[90%] sm:w-fit mt-5">
        <div className="card-box grid grid-cols-3 space-y-5 space-x-5 w-full md:grid-cols-2 sm:gap-8 sm:grid-cols-1 sm:space-y-0 ">
          <WorkCard />
        </div>
      </div>
    </div>
  );
};

export default Work;
