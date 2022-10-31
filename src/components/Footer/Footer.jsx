import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import wavefotter from "../../img/bottom_header.svg"
import mail from "../../img/Other/gmail.png"
import call from "../../img/Other/phone-call.png"
import location from "../../img/Other/location.png"

const Footer = () => {
  return (
    <div className="footer">
      <img src={wavefotter} alt="" style={{ width: "100%",height:"600px" }} />
      <div className="f-content">
     
<div className="fouterdiv">
  <div className="fdiv">
    <div className="data">
       <img src={mail} alt="" />
       <h4>itsdipakpawar4206@gmail.com</h4>
    </div>
    <div className="data">
      <img src={call}alt="" />
      <h4>+91-8600405446</h4>
    </div>
  </div>

  <div className="data1">
    <img src={location} alt="" />
 <h4>At Post : Sonambe ,Sinner-42213,Dist-Nashik,Maharashtra</h4></div>
</div>



<p>Portfolio created with ♥ by Dipak Pawar</p>


      </div>
    </div>
  );
};

export default Footer;
