import React from "react";
import AboutSec1 from "../../containers/about/Section 1";
import AboutSec2 from "../../containers/about/Section 2";
import AboutSec3 from "../../containers/about/Section 3";
import { BrowserHistory } from "react-router-dom";
const About = () => {
  return (
    <div>
      <AboutSec1 />

      <AboutSec2 />
      <AboutSec3 />
    </div>
  );
};

export default About;
