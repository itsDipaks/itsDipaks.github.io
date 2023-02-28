import React from "react";
import {AiFillLinkedin} from "react-icons/ai";
import {BiPhoneCall} from "react-icons/bi";
import {BsGithub, BsWhatsapp} from "react-icons/bs";
import "./Contact.css";
const FollowLinks = () => {
  let data = [
    {
      iconImg: <AiFillLinkedin className="w-6 h-6 text-black" />,
      mainTitle: "Connect Me On",
      semiTitle: "Linkdin",
      link:"https://www.linkedin.com/in/dipak-pawar-550776221/"
    },
    {
      iconImg: <BiPhoneCall className="w-6 h-6 text-black" />,
      mainTitle: "Contact Me On",
      semiTitle: "+91-8600405446",
      link: "tel:+918600405446",
    },
    {
      iconImg: <BsGithub className="w-6 h-6 text-black" />,
      mainTitle: "Follow Me On",
      semiTitle: "Github",
      link:"https://github.com/itsDipaks"
    },
    {
      iconImg: <BsWhatsapp className="w-6 h-6 text-black" />,
      mainTitle: "Connect Me On",
      semiTitle: "WhatsApp",
      link:"https://wa.me/918600405446"
    },
  ];
  return (
    <div>
      <section className="text-gray-500 body-font">
        <div className=" px-5 py-8 mx-auto sm:px-2  md:flex-row flex-col">
          <div className=" md:ml-auto md:mr-0 mx-auto flex-wrap  space-x-4 ">
            {data &&
              data.map((el) => (
                <a href={el.link} target="_blanck">
                  <button
                    data-aos="zoom-out-down"
                    className="bg-gray-100 inline-flex py-3 px-10 m-2 sm:px-4 rounded-lg items-center "
                  >
                    <div className="myicon hover:shadow-lg   drop-shadow-md shadow-current h-auto  hover:transform hover:scale-105 duration-500 ease-in-out">{el.iconImg} </div>
                    <span className="ml-4 flex items-start flex-col leading-none">
                      <span className="text-xs text-rose-600 mb-1 ">
                        {el.mainTitle}
                      </span>
                      <span className="title-font font-medium hover:text-white">
                        {el.semiTitle}
                      </span>
                    </span>
                  </button>
                </a>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default FollowLinks;
