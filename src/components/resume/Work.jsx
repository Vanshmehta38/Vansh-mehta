import React from "react";

const Experience = () => {
  return (
    <>
      {/* Experience */}
      <div>
        <fieldset data-aos="zoom-in">
          <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
            Experiences
          </legend>
        </fieldset>
      </div>

      <div className="card-wrapper w-[90%] sm:w-full flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <div
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  React Js Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Codentic Software
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Aug 2023 - Present
                </span>
                <p className="text-[.9rem] text-justify break-words text-gray-500">
                  &#x2022; Responsible for developing and implementing software
                  applications, Crafted and deployed a novel software
                  application
                </p>
                <p className="text-[.9rem] text-justify break-words text-gray-500">
                  &#x2022; Leading the development of efficient and innovative
                  solutions, I harness a strong coding skill set and adept
                  problem-solving abilities. Through seamless collaboration with
                  cross-functional teams, I guarantee the delivery of premium
                  software products, consistently exceeding client expectations
                  and project deadlines.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <div
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Software Developer Intern
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Codentic Software
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Jan 2023 - Aug 2023
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  &#x2022; Assisted in the design and development of software
                  applications, collaborated in designing and developing
                  software applications, enhancing overall user experience..
                </p>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  &#x2022; Improved the efficiency of the codebase, Consistently
                  met project deadlines and received a commendation for
                  dedication and focus, demonstrated strong commitment to
                  project timelines, earning recognition for reliability and
                  focus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
