import "./News.css";
import React from "react";
import NewSec1 from "../../containers/news/NewSec1";
import NewSec2 from "../../containers/news/NewSec2";
import NewSec3 from "../../containers/news/NewSec3";

const News = () => {
  return (
    <div>
      <NewSec1 />
      <NewSec2 />
      <NewSec3 />
    </div>
  );
};

export default News;
