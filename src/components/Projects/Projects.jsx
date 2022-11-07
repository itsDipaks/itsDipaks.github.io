import React, {useContext} from "react";
import "./Portfolio.css";
import "swiper/css";
import {themeContext} from "../../Context";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import bitrix from "../../img/bitrixfiles/Bitriz24.png";
import nordstrom from "../../img/bitrixfiles/nordstrom.png"
import shop from "../../img/bitrixfiles/shop.png"
import chakraui from "../../img/Techstacks/chakra-ui.png";
const Project = () => {
  const theme = useContext(themeContext);

  // const darkMode = theme.state.darkMode;
  return (
    <div className="Project" id="portfolio">
      <h1>Projects</h1>
      <h5>Check out some of my work right here</h5>

      <div className="Projectdiv">
        <div className="imgdiv">
          <img className="projectimg" src={bitrix} alt="" />
        </div>
        <div className="descriptiondiv">
        <div className="textdata">
            <h3 className="project_title">Bitrix24 <span>Clone</span> </h3>
            <p><span className="highlight">About : 
            </span>
          This is a clone of Bitrix24 website. From Homepage,
              Login&SignUp to Feeds-Update, Tasks Adding-Deleting-Changing
              Status, Calendar Todos-Adding-Deleting. We have cloned every
              functionalities.
            </p>
            <p><span className="highlight">Tech stack : </span> REACT | React-Router-Dom | Chakra-ui | NodeJs | Express | MongoDB</p>
            <div className="btns">
            <a href="https://github.com/Anantk05/Shop.com-Clone"><button className="button">Github</button></a>
            <a href="https://shop-com-clone-7.netlify.app/"><button  className="button">Demo</button></a>
          </div>
          </div>
        </div>
      </div>
      <div className="Projectdiv">
        <div className="imgdiv">
          <img className="projectimg" src={shop} alt="" />
        </div>
        <div className="descriptiondiv">
        <div className="textdata">
            <h3 className="project_title">Shop.com <span>Clone</span> </h3>
            <p><span className="highlight">About : 
            </span>
            Shop.com is an American E-commerce website that deals in clothing, beauty, electronics, home-appliances, etc
            </p>
            <p><span className="highlight">Tech stack : </span> REACT | React-Router-Dom | Chakra-ui | NodeJs | Express | MongoDB</p>
            <div className="btns">
            <a href="https://github.com/Anantk05/Shop.com-Clone"><button className="button">Github</button></a>
            <a href="https://shop-com-clone-7.netlify.app/"><button  className="button">Demo</button></a>
          </div>
          </div>
        </div>
      </div>
      <div className="Projectdiv">
        <div className="imgdiv">
          <img className="projectimg" src={nordstrom} alt="" />
        </div>
        <div className="descriptiondiv">
        <div className="textdata">
            <h3 className="project_title">Nordstrom.com <span>Clone</span> </h3>
            <p><span className="highlight">About : 
            </span>
            Nordstrom.com is a new kind of shopping comparison site that offers the most comprehensive shopping experience on the web. It is the best collection of the stores you can't live without, and the brands and products you love - all in one place.
            </p>
            <p><span className="highlight">Tech stack : </span> REACT | React-Router-Dom | Chakra-ui | NodeJs | Express | MongoDB</p>
            <div className="btns">
            <a href="https://github.com/Anantk05/Shop.com-Clone"><button className="button">Github</button></a>
            <a href="https://shop-com-clone-7.netlify.app/"><button  className="button">Demo</button></a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
