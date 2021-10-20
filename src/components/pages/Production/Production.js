import "./Production.css";
import React from "react";
import ProSec1 from "../../containers/production/Section 1";
import Produksiya from "../../containers/production/Section 2/Produksiya";
import Prosec3 from "../../containers/production/Section 3";

const Production = () => {
  return (
    <div>
      <ProSec1 />
     
      <Produksiya />
      <Prosec3 />
    </div>
  );
};

export default Production;
