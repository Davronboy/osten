import "./Home.css";
import React from "react";
import Section1 from "../../containers/home/Section1";
import Section2 from "../../containers/home/Section2";
import Section3 from "../../containers/home/Section3";
import Section4 from "../../containers/home/Section4";
import Section5 from "../../containers/home/Section5";
import Section6 from "../../containers/home/Section6";
import Section7 from "../../containers/home/Section7";

const Home = () => {
  return (
    <div>
      {/* <h1>Home</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo similique, blanditiis sit perspiciatis nihil rem ducimus eum. Vero, consectetur dignissimos ab, architecto nostrum tempora explicabo veniam ratione corrupti necessitatibus adipisci!</p>
            <img src="http://prettypinktulips.com/wp-content/uploads/2016/07/original.jpg" alt="" className="w-100" /> */}

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
};

export default Home;
