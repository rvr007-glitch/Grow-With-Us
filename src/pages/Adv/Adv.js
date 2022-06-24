import React from "react";

import Banner from "../../components/Advc/Banner/Banner";
import Graph from "../../components/Advc/Graph/Graph";
import Offers from "../../components/Advc/Offers/Offers";
import RecentWorks from "../../components/Advc/RecentWorks/RecentWorks";
import "./Adv.css";
const Adv = () => {
  return (
    <div className="S-adv">
    
      <div className="S-adv-banner">
        <Graph  />
      </div>
      <div className="">
        <RecentWorks />
        <Offers />
      </div>
      {/* <button>Button</button> */}
    </div>
  );
};

export default Adv;
