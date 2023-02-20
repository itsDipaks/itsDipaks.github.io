import React, {useEffect} from "react";
import {useState} from "react";
import {AiOutlineArrowUp} from "react-icons/ai";
import "./ScrolltoTop.css";
const ScrolltoTop = () => {
  // -------To Check Whether icon hide or not ---------
  const [visiblity, setvisiblity] = useState(false);

  //   ----Scroll Position -----
  const ScrolltoTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  };

  //   -------Check Scroll---------
  const listenscroll = () => {
    let hidetoheight = 200;
    const checkscroll = (document.body.scrollTop =
      document.documentElement.scrollTop);
    if (checkscroll >= hidetoheight) {
      setvisiblity(true);
    } else {
      setvisiblity(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenscroll);
    // -----Cleanup privious Events To avoid load on page ------------
    return () => {
      window.removeEventListener("scroll", listenscroll);
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        {visiblity && (
          <div className="scroll-btn" onClick={ScrolltoTop}>
            <AiOutlineArrowUp className="top-scroll" />
          </div>
        )}
      </div>
    </>
  );
};

export default ScrolltoTop;
