import React from "react";
import NavComponent from "./NavComponent";

function SideBar() {
  return (
    <div className="bg-white pt-5 text-jetPrimary">
      <div className="flex gap-2  px-5 items-center">
        <img src="./img/logo.png" />
        <h1 className="md:text-2xl text-primaryblue font-bold">MEDHAVHI</h1>
      </div>
      <NavComponent />
    </div>
  );
}

export default SideBar;
