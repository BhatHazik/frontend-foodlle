import React from "react";
import "../Styles/Section.css"
import bg5 from "../Assets/bg5.jpg";
import men from "../Assets/men.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faBowlRice,
  faDrumstickBite,
  faCircleCheck,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import Scroll from "../Scroll/Scroll";
import { Link } from "react-router-dom";

const Section = (props) => {


  return (
    <div className="sec-main">
      {/* MAIN DIV 1 */}

      <div className={props.mainDiv1}>
        <div className="sec1-left">
          <h1>
            Eat Joyfully Taste Life's <span>Delicious</span> Moments.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit
            fugiat laboriosam iusto quidem cupiditate nesciunt hic soluta
            praesentium debitis enim saepe quae ducimus nulla repudiandae illum,
            tenetur amet odio.
          </p>
          <Link to='/recipes'><button>Explore</button></Link>
        </div>
        <div className="sec1-right">
          <img src={bg5} />
        </div>
      </div>

      {/* MAIN DIV 2 */}

      <div className={props.mainDiv2}>
        <div className="div-icon">
          <FontAwesomeIcon className="main2-icons" icon={faTruck} />
          <p>Sonic Dilivery</p>
        </div>
        <div className="div-icon">
          <FontAwesomeIcon className="main2-icons" icon={faBowlRice} />
          <p>Quality Food</p>
        </div>
        <div className="div-icon">
          <FontAwesomeIcon className="main2-icons" icon={faCrown} />
          <p>The Best</p>
        </div>
        <div className="div-icon">
          <FontAwesomeIcon className="main2-icons" icon={faDrumstickBite} />
          <p>Tasty Bites</p>
        </div>
        <div className="div-icon">
          <FontAwesomeIcon className="main2-icons" icon={faCircleCheck} />
          <p>Trusted</p>
        </div>
      </div>

      {/* MAIN DIV 3 */}

      <div className={props.mainDiv3}>
        <div className="sec2-left">
          <img src={men} />
        </div>
        <div className="sec2-right">
          <h1>
            WE <span>RESPECT</span> OUR CUSTOMERS WITH OUR HEART!
          </h1>
        </div>
      </div>
      {/* MAIN DIV 4 */}

      <div className={props.mainDiv4}>
        
          
          <Scroll/>
          
        
      </div>
    </div>
  );
};

export default Section;
