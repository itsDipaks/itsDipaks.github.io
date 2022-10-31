import React, {useContext} from "react";
import "./Portfolio.css";
import "swiper/css";
import {themeContext} from "../../Context";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import b1 from "../../img/bitrixfiles/bitrix1home.png";
import b2 from "../../img/bitrixfiles/bitrix2signup.png";
import b3 from "../../img/bitrixfiles/bitrix3feeds.png";
import n1 from "../../img/Nordstrom/1.png"
import n2 from "../../img/Nordstrom/2.png"
import n3 from "../../img/Nordstrom/3.png"
import n4 from "../../img/Nordstrom/4.png"
import s1 from "../../img/shop/s1.png"
import s2 from "../../img/shop/s2.png"
import s3 from "../../img/shop/s3.png"
import s4 from "../../img/shop/s4.png"

const Project = () => {
  const theme = useContext(themeContext);

  // const darkMode = theme.state.darkMode;
  return (
    <div className="Project" id="portfolio">
      <h1>Projects</h1>
<h5>Check out some of my work right here</h5>
      <div className="gridDiv">
        <div className="projetbox">
          <div className="sliderbox">
            <Carousel fade className="corosa" >
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={b1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={b2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={b3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="textdata">
            <p>Bitrix24 Clone</p>
            <p><span className="highlight">
            About : 
            </span>
          This is a clone of Bitrix24 website. From Homepage,
              Login&SignUp to Feeds-Update, Tasks Adding-Deleting-Changing
              Status, Calendar Todos-Adding-Deleting. We have cloned every
              functionalities.
            </p>
            <p><span className="highlight">Tech stack : </span> REACT | React-Router-Dom | Chakra-ui | NodeJs | Express | MongoDB</p>


          </div>

          <div className="btns">
            <a href="https://github.com/amitchouhan948/possible-temper-2642"> <button>Github</button></a>
            <a href="https://bitrix24in.netlify.app/"> <button>Demo</button></a>
           
           
          </div>
        </div>
        <div className="projetbox">
          <div className="sliderbox">
            <Carousel fade className="corosa" variant="dark">
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={n1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={n2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={n3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={n4} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="textdata">
            <p>Bitrix24 Clone</p>
            <p><span className="highlight">
            About : 
            </span>
            Nordstrom.com is a new kind of shopping comparison site that offers the most comprehensive shopping experience on the web. It is the best collection of the stores you can't live without, and the brands and products you love - all in one place.
            </p>
            <p><span className="highlight">Tech stack : </span> REACT | React-Router-Dom | Chakra-ui | NodeJs | Express | MongoDB</p>


          </div>

          <div className="btns">
            <a href="https://github.com/itsDipaks/NordStrom.com"> <button>Github</button></a>
            <a href="https://gilded-axolotl-233746.netlify.app/">   <button>Demo</button></a>
           
         
          </div>
        </div>
        <div className="projetbox">
          <div className="sliderbox">
            <Carousel fade className="corosa" variant="dark">
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={s1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={s2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={s3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={s4} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="textdata">
            <p>Bitrix24 Clone</p>
            <p><span className="highlight">
            About : 
            </span>
          This is a clone of Bitrix24 website. From Homepage,
              Login&SignUp to Feeds-Update, Tasks Adding-Deleting-Changing
              Status, Calendar Todos-Adding-Deleting. We have cloned every
              functionalities.
            </p>
            <p><span className="highlight">Tech stack : </span> REACT | React-Router-Dom | Chakra-ui | NodeJs | Express | MongoDB</p>
          </div>
          <div className="btns">
            <a href="https://github.com/Anantk05/Shop.com-Clone"><button>Github</button></a>
            <a href="https://shop-com-clone-7.netlify.app/"><button>Demo</button></a>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Project;
