import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const navItems = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 2,
    name: "about",
  },
  {
    id: 3,
    name: "skills",
  },
  {
    id: 4,
    name: "works",
  },
  {
    id: 5,
    name: "resume",
  },
  {
    id: 6,
    name: "contact",
  },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  // ** State
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Toggle the navbar
  const toggleNavOpen = () => {
    setIsOpen(true);
  };

  const toggleNavClose = () => {
    setIsOpen(false);
  };

  const handleActiveTab = (name) => {
    setActiveIndex(name === activeIndex ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full mx-auto  fixed top-0 py-5 sm:py-4 z-30 ${
        scrollPosition > 0 ? `bg-white shadow-md` : "bg-transparent"
      } `}
    >
      <nav className=" container m-auto flex items-center justify-between">
        <div data-aos="fade-down" className="logo">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-3xl font-bold sm:text-3xl"
          >
            Vansh Mehta
          </Link>
        </div>
        <div className="nav-items flex items-center">
          {/* hamburger */}
          <button
            onClick={toggleNavOpen}
            data-aos="fade-down"
            className="cursor-pointer text-2xl hidden md:block"
          >
            <HiMenu size={25} />
          </button>

          <ul
            className={`flex items-center space-x-11 ${
              isOpen ? "custom-background md:right-[0%]" : "md:flex"
            } md:flex-col md:absolute m-auto md:top-0 md:right-[-100%] md:w-[78%] md:h-screen`}
            style={{ backgroundColor: isOpen && "#bcf4d56e" }}
          >
            {/* Use a button tag for better accessibility */}
            <button
              onClick={toggleNavClose}
              className={`text-3xl hidden md:block relative right-0 top-4 container mx-auto`}
            >
              <RxCross2 size={25} />
            </button>
            {navItems.map((item) => (
              <li
                data-aos="fade-down"
                key={item.id}
                className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center"
              >
                <a
                  onClick={() => {
                    handleActiveTab(item.name);
                    toggleNavClose();
                  }}
                  href={`#${item.name}`}
                  className={`uppercase cursor-pointer text-black hover:text-yellow-600 font-bold ${
                    item.name === activeIndex ? "text-yellow-600" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              data-aos="fade-down"
              onClick={() => toggleNavClose}
              className="bg-black text-[1rem] text-white px-8 py-2 rounded-lg font-bold hover:text-yellow-400 md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
            >
              HIRE ME
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
