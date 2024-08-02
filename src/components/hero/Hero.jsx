import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill, RiTwitterXLine } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "/pdf/Vansh Mehta.pdf";

const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-green-200 to-blue-200 `}>
      <div className="container mx-auto pt-5 h-[750px] md:h-[900px] md:flex-col-reverse sm:h-[680px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center sm:items-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center sm:items-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[1.45rem]"
            >
              Hello, I'm Vansh Mehta
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={["Web Developer", 2000, "React Js Developer", 2000, ""]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-2xl"
            />
            <p
              data-aos="fade-up"
              className="text-[1.1rem] font-medium text-gray-600 sm:text-[.95rem]"
            >
              B-Tech in information technology
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="#contact"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span>Hire Me</span>
            </a>
            <a
              href={resumePDF}
              target="_blank"
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Download CV
                <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a
                  href="https://www.linkedin.com/in/vansh-mehta-06988021b/"
                  target="_blank"
                >
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/1sh_mehta_/" target="_blank">
                  <RiInstagramFill className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/mehta.vansh.3"
                  target="_blank"
                >
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />
                </a>
              </li>
              <li>
                <a href="https://x.com/vansh_38" target="_blank">
                  <RiTwitterXLine className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
              data-aos="fade-up"
              className=" h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              src="/images/profile-image.png"
              alt="vansh mehta"
            />
            <div className="absolute bottom-10 md:bottom-3 right-8 md:right-2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer"
              >
                <img
                  className="w-[135px] sm:w-[80px] md:w-[150px] circle-text"
                  src="/images/Full Stack Developer2.png"
                  alt=""
                />
                <FaPlay className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
