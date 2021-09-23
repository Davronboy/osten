import "./Manufaction.css";
import React from "react";
import ManufacSec1 from "../../containers/manufaction/Section 1";
import ManufacSec2 from "../../containers/manufaction/Section 2";
import ManufacSec3 from "../../containers/manufaction/Section 3";

const Manufaction = () => {
  return (
    <div>
      <ManufacSec1 />
      <ManufacSec2 />
      <ManufacSec3 />
    </div>
  );
};

export default Manufaction;
