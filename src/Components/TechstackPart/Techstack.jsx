import React from "react";
import html from "../../assets/Techstack/Frontend/html-5.png";
import css from "../../assets/Techstack/Frontend/css3.png";
import javascript from "../../assets/Techstack/Frontend/js.png";
import react from "../../assets/Techstack/Frontend/react.png";
import redux from "../../assets/Techstack/Frontend/redux.png";
import chakra from "../../assets/Techstack/Frontend/chakra-ui.png";
import tailwind from "../../assets/Techstack/Frontend/TailwindLogo.png";

import mongodb from "../../assets/Techstack/Backend/mongodb.png"
import express from "../../assets/Techstack/Backend/express.png"
import Nodejs from "../../assets/Techstack/Backend/nodediv.png"


import postman from "../../assets/Techstack/Other/postman.jpg"
import npm from "../../assets/Techstack/Other/npm.png"
import git from "../../assets/Techstack/Other/git.jpg"
import github from "../../assets/Techstack/Other/github..png"
import routerdom from "../../assets/Techstack/Other/routerdom.png"
import visual from "../../assets/Techstack/Other/visual-studio.png"
import netlifiy from "../../assets/Techstack/Other/netlifiy.png"

import backprint from "../../assets/Intro/paint5.png"
const Techstack = () => {
  const teckstack = [
    {
      name: "REACT",
      IconImg: react,
    },
    {
      name: "REDUX",
      IconImg: redux,
    },
    {
      name: "JAVASCRIPT",
      IconImg: javascript,
    },
    {
      name: "HTML",
      IconImg: html,
    },
    {
      name: "CSS",
      IconImg: css,
    },
    {
      name: "Chakra",
      IconImg: chakra,
    },
    {
      name: "TAILWIND-CSS",
      IconImg: tailwind,
    },
  ];

  const Backend=[
    {
      name: "MONGODB",
      IconImg: mongodb,
    },
    {
      name: "EXPRESS",
      IconImg: express,
    },
    {
      name: "NODEJS",
      IconImg: Nodejs,
    },
  ]
 const Other=[
  {
    name: "GIT",
    IconImg: git,
  },
  {
    name: "GITHUB",
    IconImg: github,
  },
  {
    name: "VISUAL-STUDIO",
    IconImg: visual,
  },
  {
    name: "NETLIFIY",
    IconImg: netlifiy,
  },
  {
    name: "NPM",
    IconImg: npm,
  },
  {
    name: "POSTMAN",
    IconImg: postman,
  },
  {
    name: "REACT ROUTER DOM",
    IconImg: routerdom,
  },
 ]

  return (
    <div id="Techstack"> 
      <h1 className="text-4xl  text-black"  data-aos="fade-right">
      Techstack
      </h1>
      <span className="inline-block h-1 sm:w-1/12 mb-8 rounded bg-rose-500 mt-4 "  data-aos="fade-left"></span>
      <section className="text-gray-600 body-font bg-gradient-to-r lg:m-14 sm:m-2 from-gray-100 via-gray-200 to-gray-100 relative ">
        <img src={backprint} className="absolute top-0 lg:left-1/3 sm:left-1/5 lg:pl-16 sm:pl-14 " alt="" />
        <div className="container sm:px-2 px-5 py-8 mx-auto ">
          <div className="flex flex-col text-center w-full mb-4  "  >
          </div>
          <h1 className="py-4 text-2xl text-black font-bold" data-aos="zoom-in-down">Frontend Skills</h1>
          <div className="flex flex-wrap -m-2 m-auto ">
           
            {teckstack &&
              teckstack.map((el) => (
                <div key={el.name} className="p-2 lg:w-1/4 md:w-1/2  sm:w-1/2 w-full" data-aos="fade-up">
                  <div  className="h-full flex items-center border-black border p-4   rounded-lg  bg-gradient-to-t from-red-600 to-black hover:shadow-lg   drop-shadow-md shadow-current h-auto  hover:transform hover:scale-105 duration-500 ease-in-out">
                    <img
                      alt="team"
                      className="sm:w-8 sm:h-8 lg:w-16 lg:h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-2 "
                      src={el.IconImg}
                    />
                    <div className="flex-grow">
                      <h2 className="text-white title-font lg:text-xl sm:text-sm" >
                      {el.name}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <h1 className="py-4 text-2xl font-bold text-black"  data-aos="zoom-in-down">Backend Skills </h1>
          <div className="flex flex-wrap -m-2 m-auto">
           
            {Backend &&
              Backend.map((el) => (
                <div key={el.name} className="p-2 lg:w-1/4 md:w-1/2 w-full sm:w-1/2" data-aos="fade-up">
                  <div className="h-full flex items-center border-black border p-4 rounded-lg bg-gradient-to-t from-red-600 to-black hover:shadow-lg   drop-shadow-md shadow-current h-auto  hover:transform hover:scale-105 duration-500 ease-in-out">
                  <img
                      alt="team"
                      className="lg:w-16 lg:h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-2  sm:w-8 sm:h-8"
                      src={el.IconImg}
                    />
                    <div className="flex-grow">
                    <h2 className="text-white title-font lg:text-xl sm:text-sm">
                      {el.name}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <h1 className="py-4 text-2xl font-bold text-black" data-aos="zoom-in-down">Tools I Use </h1>
          <div className="flex flex-wrap -m-2 m-auto">
           
            {Other &&
              Other.map((el) => (
                <div key={el.name} className="p-2 lg:w-1/4 md:w-1/2 w-full sm:w-1/2" data-aos="fade-up">
                  <div className="h-full flex items-center border-black border p-4 rounded-lg bg-gradient-to-t from-red-600 to-black hover:shadow-lg   drop-shadow-md shadow-current h-auto  hover:transform hover:scale-105 duration-500 ease-in-out" >
                  <img
                      alt="team"
                      className="lg:w-16 lg:h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-2  sm:w-8 sm:h-8"
                      src={el.IconImg}
                    />
                    <div className="flex-grow">
                    <h2 className="text-white title-font lg:text-xl sm:text-sm">
                      {el.name}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Techstack;
