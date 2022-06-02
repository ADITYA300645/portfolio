import React from "react";
import "./slidethree.css";

export default function Slidethree() {
  return (
    <div className="slidethree">
      <div className="Intro">Meet Me</div>
      <div className="container">
        <div className="cardBottom">
          <div className="imageSpace"></div>
          <div className="infoSpace">
            <div className="mainInfo">
              I <div className="red">designs</div> it and turn it into a{" "}
              <div className="bluedarker">website</div> Super Simple !
            </div>
          </div>
        </div>
        <div className=" cardCenter">
          <div className="imageSpaceCenter "></div>
          <div className="infoSpaceCenter ">MAIN </div>
        </div>
        <div className="cardBottom">
          <div className="imageSpace"></div>
          <div className="infoSpace">
            {" "}
            <div className="mainInfo">
              I <div className="red">always</div> puts <div className="blue">100%</div> of myself to <div className="bluedarker">every work</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
