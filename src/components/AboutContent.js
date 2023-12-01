import "./AboutContentStyles.css"

import {Link} from "react-router-dom"
import React1 from "../assets/react1.png";
import React2 from "../assets/react2.jpg";
import React from 'react'

const AboutContent = () => {
  return <div className="about">
    <div className="left">
        <h1>who am i?</h1>
        <p>im a react front-end developer. i create responsive secure websites for my clients</p>
        <Link to="/contact">
            <button className="btn">contact</button>
        </Link>
    </div>
    <div className="right">
    <div className="img-container">
        <div className="img-stack top">
            <img src={React1}
            className="img" alt="true"/>
        </div>
    </div>
    <div className="img-container">
        <div className="img-stack bottom">
            <img src={React2}
            className="img" alt="true"/>
        </div>
    </div>
    </div>
  </div>
};

export default AboutContent
