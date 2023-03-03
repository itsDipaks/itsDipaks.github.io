import React from "react";
import {BsGithub} from "react-icons/bs";
import {VscLiveShare} from "react-icons//vsc";

import FarmBuddy from "../../assets/Projects/FarmBuddy.png";
import Bitriz24 from "../../assets/Projects/Bitriz24.png";
import nordstrom from "../../assets/Projects/nordstrom.png";
import shop from "../../assets/Projects/shop.png";
import DmTipper from "../../assets/Projects/DmTipper.png";
const Project = () => {
  const ProjectData = [
    {
      projectImg: FarmBuddy,
      ProjectTitle: "FarmBuddy",
      projectDescription:
        "Farm Buddy is an online pharmacy & medical stores offering pharmaceutical and healthcare products at a FLAT 20% OFF*.",
      techstackUsed: [
        "REACT",
        "React-Router-Dom",
        "Chakra-ui",
        "NodeJs",
        "Express",
        "MongoDB",
        "Redux",
        "JWT",
      ],
      githubLink: "https://github.com/itsDipaks/Farm-Buddy.com",
      liveLink: "https://pharmbuddy.vercel.app/",
      type: "FullStack",
    },
    {
      projectImg: Bitriz24,
      ProjectTitle: "Bitrix24",
      projectDescription:
        "This is a clone of Bitrix24 website. From Homepage ,Login&SignUp to Feeds-Update, Tasks Adding-Deleting-Changing Status, Calendar Todos-Adding-Deleting. We have cloned everyfunctionalities.",
      techstackUsed: [
        "REACT",
        "React-Router-Dom",
        "Chakra-ui",
        "NodeJs",
        "Express",
        "MongoDB",
        "Redux",
      ],
      githubLink: "https://github.com/amitchouhan948/possible-temper-2642",
      liveLink: "https://bitrix24in.netlify.app/",
      type: "FullStack",
    },
    {
      projectImg: shop,
      ProjectTitle: "Shop",
      projectDescription:
        "Shop.com is an American E-commerce website that deals in clothing, beauty, electronics, home-appliances, etc",
      techstackUsed: ["HTML", "CSS", "Javascript", "Local-Storage"],
      githubLink: "https://github.com/Anantk05/Shop.com-Clone",
      liveLink: "https://shop-com-clone-7.netlify.app/",
      type: "Frontend",
    },
    {
      projectImg: nordstrom,
      ProjectTitle: "Nordstrom",
      projectDescription:
        "Nordstrom.com is a new kind of shopping comparison site that offers the most comprehensive shopping experience on the web. ",
      techstackUsed: ["HTML", "CSS", "Javascript", "Local-Storage"],
      githubLink: "https://github.com/itsDipaks/NordStrom.com",
      liveLink: "https://gilded-axolotl-233746.netlify.app/",
      type: "Frontend",
    },
    {
      projectImg: DmTipper,
      ProjectTitle: "DmTipper",
      projectDescription:
        "DmTipper in the business of fabricating custom equipments for Automobile and construction sector industries, ",
      techstackUsed: ["REACT", "React-Router-Dom", "Tailwind-Css"],
      githubLink: "https://github.com/itsDipaks/Deshmukh-Manufacturingweb",
      liveLink: "https://dmtipperpvt.netlify.app/",
      type: "Freelance",
    },
  ];

  // let sortby = [
  //   " All Projects ",
  //   "  Frontend Projects ",
  //   " Full-Stack Projects ",
  //   "  Freelance Projects ",
  // ];

  let sortprojectswidth = (el) => {
    console.log(el);
  };
  return (
    <div className="w-full mt-14  " id="Projects">
      <h1 className="text-4xl text-black font-semibold" data-aos="fade-right">
        Projects
      </h1>
      <span
        className="inline-block h-1 sm:w-1/12 mb-8 rounded bg-rose-500 mt-4 "
        data-aos="fade-left"
      ></span>
      <div className="lg:m-14 sm:m-0 bg-gradient-to-r fbg-gradient-to-t from-gray-400 to-gray-200 lg:p-4 sm:p-8">
        <div className="flex flex-col text-center w-full mb-4 ">
          {/* <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Projects
        </h1> */}
          <p className="lg:w-1/3 mx-auto leading-relaxed font-semibold text-base p-2 mb-4 mt-4 bg-rose-400 rounded-full"  data-aos="zoom-in-down">
            These are the Projects I've worked on
          </p>
        </div>
        {/* <div>
        <ul className="flex w-3/5 m-auto justify-between">
          {sortby && sortby.map((el) => <li onClick={(el)=>sortprojectswidth(el)} className="p-2 border-4">{el}</li>)}
        </ul>
      </div> */}

        <section className="text-gray-600 body-font">
          <div className=" lg:px-5 pb-14 py-4 mx-auto sm:px-2">
            <div className="flex flex-wrap  -mx-4 gap-5 -mb-10 m-auto -mt-4">
              {ProjectData &&
                ProjectData.map((el) => (
                  <div key={el.ProjectTitle}
                    data-aos="flip-right"
                    className="p-4 md:w-96 sm:mb-0 sm:p-4 sm:w-full mb-6 w-full border-black border-2 bg-black hover:shadow-lg rounded-2xl  drop-shadow-md shadow-current h-auto  hover:transform hover:scale-105 duration-500 ease-in-out"
                  >
                    <div className="rounded-lg h-60 overflow-hidden">
                      <img
                        alt="content"
                        className="object-cover object-center h-full w-full border-2"
                        src={el.projectImg}
                      />
                    </div>
                    <h2 className="text-xl font-medium title-font text-white mt-5 ">
                      {el.ProjectTitle}
                    </h2>
                    <p className="lg:text-sm text-start leading-relaxed mt-2 h-24 sm:h-14 text-white sm:text-xs">
                      {" "}
                      <span className="text-rose-400 text-lg font-bold">
                        Description :{" "}
                      </span>{" "}
                      {el.projectDescription}
                    </p>
                    <p className="lg:text-sm text-start leading-relaxed lg:mt-10 h-14 text-white sm:mt-12 sm:text-xs">
                      {" "}
                      <span className="text-rose-400  text-lg font-bold">
                        TechStack :{" "}
                      </span>{" "}
                      {el.techstackUsed.map((tech) => (
                        <span key={tech}>{tech} , </span>
                      ))}
                    </p>

                    <div className="flex justify-between w-1/2  m-auto mt-2">
                      <a href={el.githubLink} target="_blank">
                        <BsGithub className="w-6 h-6  text-rose-400" />
                      </a>
                      <a href={el.liveLink}  target="_blank">
                        <VscLiveShare className="w-6 h-6 text-rose-400" />
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
