import React from "react";
// import Harry from "../assets/harry.png";
import me from "../assets/me.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row ">
        <div className="flex flex-col justify-center h-full mt-24 sm:mt-0">
          <h2 className="text-4xl md:text-7xl font-bold text-white ">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            {" "}
            A passionate front end developer experience using HTML, CSS,
            JavaScript, React, Bootstrap & Tailwind looking for an opportunity
            to to extend my expertise working with an experienced web
            development team.
          </p>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 pl-2">
                <BsArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div className="">
          <img
            src={me}
            alt="my profile"
            className=" rounded-full  mx-auto w-2/3 md:w-3/4 profile-photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
