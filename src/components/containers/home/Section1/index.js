import "./Section1.css";

import React from "react";
import { Link } from "react-router-dom";
// import logo from './home.section1.jpg'

const Section1 = () => {
  return (
    <div className="box">
      <div className="misol">
        {/* <img src={logo} alt="" className="w-100" /> */}

        <div className="photo">
          <div className="container py-5 main-photo">
            <h1 className="fs-1 fw-bold">
              «Osten» — уникальный производитель, лифтов и эскалаторов в Средней
              Азии
            </h1>

            <p>Компания «Osten» была основана в 2019 году!</p>
            <Link className="btn btn-warning">ПОДРОБНЕЕ</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
