import React, {useState} from "react";
import {Link} from "react-scroll";
import "./Home.css";
import paint2 from "../../assets/Intro/paint6.png";
import dipak from "../../assets/Intro/DipakHalfsleev.png";
import resum from "../../assets/Intro/fp03_059-Dipak-Pawar.pdf";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {IoIosArrowDropdown} from "react-icons/io";
import Typewriter from "typewriter-effect";
const Home = () => {
  const [nvbsrscroll, setnvbarscroll] = useState(false);
  let [open, setOpen] = useState(false);
  const onscrollbackgraund = () => {
    if (window.scrollY >= 12) {
      setnvbarscroll(true);
    } else {
      setnvbarscroll(false);
    }
  };
  window.addEventListener("scroll", onscrollbackgraund);

  let links = [
    {name: "Home", to: "Home"},
    {name: "About", to: "About"},
    {name: "Skills", to: "Techstack"},
    {name: "Projects", to: "Projects"},
    {name: "Contact", to: "Contact"},
  ];
  return (
    <div>
      <div
        className="backgraund flex justify-center bg-gradient-to-r fbg-gradient-to-t from-gray-300 to-white bg-no-repeat  bg-cover h-screen md:bg-center "
        id="Home"
      >
        <div className="flex flex-col items-center ">
          <nav
            className={
              nvbsrscroll
                ? "self-center w-full max-w-full fixed bg-black text-white z-20 "
                : "self-center w-full max-w-full fixed z-20"
            }
          >
            <div className="flex md:flex-row flex-col justify-between items-center md:items-start">
              <h1 className=" py-4 text-2xl font-sans font-bold px-10 text-rose-800">
                its𝕯𝖎𝖕𝖆𝖐
              </h1>
              <div
                onClick={() => setOpen(!open)}
                className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
              >
                {open ? <AiOutlineCloseCircle /> : <IoIosArrowDropdown />}
              </div>
              <ul
                className={`flex items-center text-sm md:text-[18px] sm:bg-rose-600 lg:bg-transparent   lg:w-1/2 sm:w-full sm:left-0 font-bold lg:flex-row lg:relative  sm:absolute  lg:top-2 sm:flex-col md:px-10 my-2 pl-9 transition-all duration-500 ease-in ${
                  open ? "top-14 " : "top-[-480px]"
                }`}
              >
                {links &&
                  links.map((li) => (
                    <li
                      key={li.name}
                      className="hover:underline underline-offset-4  decoration-2 decoration-rose-500 cursor-pointer  py-4 rounded-lg px-2 md:px-5"
                    >
                      <Link to={li.to} spy={true} smooth={true} offset={-50}>
                        {li.name}
                      </Link>
                    </li>
                  ))}

                <li className="hover:underline-offset-4 decoration-2 decoration-cyan-500 py-2 border-2 border-rose-400 cursor-pointer lg:mt-4 rounded-lg lg:px-8 sm:px-4 sm:mb-4 md:px-8 cursor-pointer">
                  <a
                    href="https://drive.google.com/file/d/1MTz7r6B5jMDNIEegsuHlVOmTiEUFdcVF/view?usp=share_link"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="absolute flex w-full lg:top-16 justify-between items-center flex-wrap sm:top-24   align-center h-64 my-2 py-2 ">
            <div className="lg:w-1/2 sm:w-full  ">
              <h1 className="lg:text-xl font-medium sm:text-sm tracking-wider ">
                𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝒎𝒚 𝑷𝒓𝒐𝒇𝒊𝒍𝒆
              </h1>
              <span className="inline-block h-1 sm:w-1/5  rounded bg-rose-500  "></span>
              <div className="flex flex-col text-black mt-3">
                <h1 className="lg:text-4xl sm:text-2xl md:text-[50px] font-semibold">
                  Hello I'm{" "}
                  <span className="lg:text-7xl sm:text-4xl"> 𝑫𝒊𝒑𝒂𝒌 𝑷𝒂𝒘𝒂𝒓 </span>
                </h1>
                <p className="text-xl text-rose-800 mt-4 md:mt-4 tracking-wide">
                  <Typewriter
                    options={{
                      strings: [
                        " ꜰᴜʟʟ-ꜱᴛᴀᴄᴋ-ᴅᴇᴠᴇʟᴏᴘᴇʀ",
                        "ꜰʀᴏɴᴛᴇɴᴅ ᴅᴇᴠᴇʟᴏᴘᴇʀ",
                        "ᴘʀᴏɢʀᴀᴍᴍᴇʀ",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </p>
              </div>

              <h1 className="border-2 border-rose-400 lg:w-1/3 sm:w-1/2 rounded-2xl m-auto p-2 mt-4">
                <a
                  href={resum}
                  className="lg:text-lg sm:text-md"
                  download={true}
                >
                  𝑫𝒂𝒘𝒐𝒏𝒍𝒐𝒂𝒅 𝑹𝒆𝒔𝒖𝒎𝒆
                </a>
              </h1>
            </div>

            <div className="w-1/2 lg:py-2 sm:py-14">
              <img
                src={paint2}
                className="z-14 w-full h-full lg:relative sm:absolute"
                alt=""
              />
              <img
                src={dipak}
                className="z-18 lg:top-20 lg:w-1/5 lg:h-11/12  sm:w-full sm:top-14 sm:left-24  lg:left-2/3 rounded-full lg:absolute  sm:relative sm:right-1/2"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
