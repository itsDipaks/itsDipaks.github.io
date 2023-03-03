import React from "react";
import GithubCalender from "./GithubCalender";

const Github = () => {
  return (
    <div id="Github" className=" ">
      <h1 className="text-4xl text-black pt-8 font-semibold" data-aos="fade-right">
        Github Contribution
      </h1>
      <span
        className="inline-block h-1 sm:w-1/12 mb-8 rounded bg-rose-500 mt-4 "
        data-aos="fade-left"
      ></span>
      <div className="bg-gradient-to-r fbg-gradient-to-t from-gray-300 to-rose-100 lg:m-14 sm:m-2 pt-8">
      <h1 className="lg:text-2xl mb-2  text-black p-1 bg-rose-400 rounded-full lg:w-1/4 sm:w-1/2 sm:text-lg  m-auto" data-aos="zoom-in-down">
          Github Calender
        </h1>
        <GithubCalender />

        <h1 className="lg:text-2xl mb-2  text-black p-1 bg-rose-400 rounded-full lg:w-1/4 sm:w-1/2 sm:text-lg  m-auto" data-aos="zoom-in-down">
          Contribution Graph
        </h1>
        <img className="lg:w-3/5 sm:w-3/4 m-auto" data-aos="fade-up" src="https://github-readme-activity-graph.cyclic.app/graph?username=itsDipaks&bg_color=000000&color=ffffff&line=ffffff&point=f05656&area=true&hide_border=true" alt="" />
        <h1 className="lg:text-2xl mb-2 mt-2 text-black p-1 bg-rose-400 rounded-full lg:w-1/4 sm:w-1/2 sm:text-lg  m-auto" data-aos="zoom-in-down">
          Github Stats
        </h1>
        <section className="text-gray-600 lg:py-4 body-font">
          <div className=" px-4 py-4  mx-auto flex flex-col">
            <div className="rounded-lg h-full overflow-hidden flex flex-wrap justify-between px-14 item-center">
              <img
                alt="content"
                className="object-cover object-center h-full lg:w-5/12 hover:shadow-lg   drop-shadow-md shadow-current h-auto  hover:transform hover:scale-105 duration-500 ease-in-out"
                src="https://github-readme-stats.vercel.app/api?username=itsDipaks&show_icons=true&theme=radical"
                data-aos="fade-right"
              />
              <img
                alt="content"
                className="object-cover object-center h-full  lg:w-5/12 sm:w-full hover:shadow-lg   drop-shadow-md shadow-current h-auto  hover:transform hover:scale-105 duration-500 ease-in-out"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=itsDipaks&layout=compact&theme=radical"
                data-aos="fade-left"
              />
            </div>
          </div>
          <div className=" flex justify-center lg:px-4 sm:px-16 py-2 mx-auto ">
            <img
              alt="content"
              className="object-cover object-center h-full py-4 lg:w-5/12  sm:w-full hover:shadow-lg  drop-shadow-md shadow-current h-auto  hover:transform hover:scale-105 duration-500 ease-in-out"
              src="https://github-readme-streak-stats.herokuapp.com/?user=itsDipaks&theme=radical"
              data-aos="fade-up"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Github;
