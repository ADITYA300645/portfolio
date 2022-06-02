import React from "react";
import "./Header.css";
import { HiMenuAlt2 } from "react-icons/hi";

function Header() {
  return (
    <div className="Header">
      <div className="threebar">
        <HiMenuAlt2 size={25} width={30}></HiMenuAlt2>
      </div>
      <div className="options home long">
      About me</div>
      <div className="options home">
      Ideas</div>
      <div className="options home active">
      Home</div>
    </div>
  );
}

export default Header;
