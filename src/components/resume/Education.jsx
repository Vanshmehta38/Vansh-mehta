import React from "react";

const Education = () => {
  return (
    <>
      {/* Education */}
      <div>
        <fieldset data-aos="zoom-in">
          <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
            Education
          </legend>
        </fieldset>
      </div>

      <div className="card-wrapper w-[90%] sm:w-full flex md:flex-col sm:gap-5 mx-auto ">
        <div className="center flex-1 flex items-center justify-center">
          <div
            data-aos="zoom-in"
            className=" w-[40%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
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
                  B.Tech, Information Technology
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Parul University
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2019 - Year 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  An Information Technology degree is a degree that focuses on
                  the use and application of technology in a variety of
                  settings. It is one of the fastest-growing fields in the world
                  and is a great option for those who want to be in the
                  forefront of the technology industry.
                </p>
              </div>
            </div>
          </div>
        </div>
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
                  12 <sup>th</sup>Science and Mathematics
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  GHSEB
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2018 - Year 2019
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  High school is an important and exciting time of life for many
                  teenagers. Students are faced with difficult decisions, new
                  opportunities, and the anticipation of entering adulthood.
                  During high school, students must make decisions about their
                  future, develop relationships with peers and teachers, and
                  focus on academics.
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
                  10<sup>th</sup>Science and Mathematics
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  GSEB
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2016 - Year 2017
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Secondary school is a crucial time for students, as they
                  transition from childhood to adulthood, students are expected
                  to take more responsibility for their learning, Secondary
                  school provides the opportunity to explore their interests and
                  develop the skills they will need to be successful in their
                  future endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
