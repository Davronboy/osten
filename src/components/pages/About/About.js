import React from "react";
import AboutSec1 from "../../containers/about/Section 1";
import AboutSec2 from "../../containers/about/Section 2";
import AboutSec3 from "../../containers/about/Section 3";

// const about = document.getElementById("about");
// const loading = document.getElementById("loading");

// const Work = () => {
//   about.classList.add("d-none");
//   loading.classList.remove("d-none");
// };
// Work();
const About = () => {
  return (
    <div>
      {/* <div id="loading" className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div> */}
      <AboutSec1 />
      <AboutSec2 />
      <AboutSec3 />
    </div>
  );
};

export default About;
