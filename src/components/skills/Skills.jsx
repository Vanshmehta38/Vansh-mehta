import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { icon } from "../../data/icons";
import { EachElement } from "../utils/ElementMap";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className="skill-container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="section-title">
          <span> My Skills</span>
          <h2> My Skills</h2>
          <p>Here are my skills.</p>
        </div>

        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={95} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={88} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={80}
                />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={80} />
                <ProgressBar
                  logo={<SiTailwindcss />}
                  name={"Tailwind CSS"}
                  value={80}
                />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                className=""
                logo={<SiReact />}
                black={"white"}
                white={"black"}
                skill={"React Js"}
              />
              <SkillBox
                className=""
                logo={<SiNextdotjs />}
                white={"black"}
                black={"white"}
                skill={"Next Js"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                className=""
                logo={<SiHtml5 />}
                black={"black"}
                white={"white"}
                skill={"HTML"}
              />
              <SkillBox
                logo={<SiCss3 />}
                black={"black"}
                white={"white"}
                skill={"Css"}
              />
              <SkillBox
                logo={<SiJavascript />}
                black={"black"}
                white={"white"}
                skill={"JavaScript"}
              />
            </div>
          </div>
        </div>

        <div className="skill-container m-auto flex  items-center justify-center mt-8 gap-8 md:gap-1">
          <EachElement
            of={icon}
            render={(item, index) => {
              return (
                <marquee
                  key={index}
                  direction={item?.direction ?? "down"}
                  width="100%"
                  height="100"
                  behavior="alternate"
                >
                  <marquee behavior="alternate">
                    <img
                      className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
                      src={item?.link}
                    />
                  </marquee>
                </marquee>
              );
            }}
          />

          {/* <marquee
            direction="down"
            width="100%"
            height="100"
            behavior="alternate"
          >
            <marquee behavior="alternate">
              <img
                className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
                src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000"
              />
            </marquee>
          </marquee>
          <marquee
            direction="up"
            width="100%"
            height="100"
            behavior="alternate"
          >
            <marquee behavior="alternate">
              <img
                className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
                src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000"
              />
            </marquee>
          </marquee>
          <marquee
            direction="down"
            width="100%"
            height="100"
            behavior="alternate"
          >
            <marquee behavior="alternate">
              <img
                className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
                src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000"
              />
            </marquee>
          </marquee>
          <marquee
            direction="up"
            width="100%"
            height="100"
            behavior="alternate"
          >
            <marquee behavior="alternate">
              <img
                className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
                src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000"
              />
            </marquee>
          </marquee> */}
        </div>

        {/* icons */}
        {/*<div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5"
        >
           <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/c-plus-plus-logo.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/windows/50/null/sass--v1.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/c-plus-plus-logo.png"
          />
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
          src="https://img.icons8.com/ios-filled/50/null/python.png" />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/python--v1.png"
          /> 

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/?size=100&id=YYYhFVbH4vFv&format=png&color=000000"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/git.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/javascript--v1.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/nodejs.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"
          />
        </div>*/}
      </div>
    </div>
  );
};

export default Skills;
