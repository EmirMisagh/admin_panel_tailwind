import React from "react";
import { gsap } from "gsap";
import { BsPersonVcardFill } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import { MdVpnKey } from "react-icons/md";

function NavbarEdit() {
  const clickHandle = (submit) => {
    switch (submit) {
      case "general":
        console.log("click");
        gsap.to(".square", 0.4, { x: 0, width: 100 });
        break;
      case "biling":
        console.log("click");
        gsap.to(".square", 0.4, { x: 137, width: 90 });
        break;
      case "notifaction":
        console.log("click");
        gsap.to(".square", 0.4, { x: 259, width: 125 });
        break;
      case "social":
        console.log("click");
        gsap.to(".square", 0.4, { x: 422, width: 136 });
        break;
      case "security":
        console.log("click");
        gsap.to(".square", 0.4, { x: 594, width: 110 });
        break;

      default:
        break;
    }
  };
  return (
    <div className="flex navbarUser gap-10 mt-10 text-textgray300 font-bold relative py-3">
      <p className="flex" onClick={() => clickHandle("general")}>
        <NavLink
          to="./"
          className="flex items-center focus:text-textgray50 gap-2 navbarUser"
        >
          <i className="text-2xl">
            <BsPersonVcardFill />
          </i>
          General
        </NavLink>
      </p>
      <p className="flex" onClick={() => clickHandle("biling")}>
        <NavLink
          to="./edit"
          className="flex items-center gap-2 focus:text-textgray50 navbarUser"
        >
          <i className="text-2xl">
            <GiNotebook />
          </i>
          Biling
        </NavLink>
      </p>
      <p className="flex" onClick={() => clickHandle("notifaction")}>
        <NavLink
          to="./notif"
          className="flex focus:text-textgray50 items-center gap-2"
        >
          <i className="text-2xl">
            <IoIosNotifications />
          </i>
          Notifaction
        </NavLink>
      </p>
      <p className="flex" onClick={() => clickHandle("social")}>
        <NavLink
          to={""}
          className="flex focus:text-textgray50 items-center gap-2"
        >
          <i className="text-2xl">
            <IoShareSocial />
          </i>
          Social Links
        </NavLink>
      </p>
      <p className="flex" onClick={() => clickHandle("security")}>
        <NavLink
          to={""}
          className="flex focus:text-textgray50 items-center gap-2"
        >
          <i className="text-2xl">
            <MdVpnKey />
          </i>
          Security
        </NavLink>
      </p>
      <div className="square absolute left-0 bottom-[-5px] w-24 h-[0.15rem] bg-bg_50"></div>
    </div>
  );
}

export default NavbarEdit;
