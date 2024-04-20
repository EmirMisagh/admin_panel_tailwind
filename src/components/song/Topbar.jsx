import React from "react";
import { gsap } from "gsap";
import { BsPersonVcardFill } from "react-icons/bs";
import { GiLyre } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import { MdInsertComment, MdSecurity } from "react-icons/md";

export default function Topbar() {
  const clickHandle = (submit) => {
    switch (submit) {
      case "general":
        gsap.to(".square", 0.4, { x: 0, width: 100 });
        break;
      case "biling":
        gsap.to(".square", 0.4, { x: 119, width: 120 });
        break;
      case "notifaction":
        gsap.to(".square", 0.4, { x: 267, width: 145 });
        break;
      case "social":
        gsap.to(".square", 0.4, { x: 422, width: 136 });
        break;
      case "security":
        gsap.to(".square", 0.4, { x: 594, width: 110 });
        break;

      default:
        break;
    }
  };
  return (
    <div className="flex navbarUser gap-10 mt-10 text-textSecond_300 font-bold relative py-3">
      <p className="flex" onClick={() => clickHandle("general")}>
        <NavLink
          to="./"
          className="flex items-center focus:text-textSecond_50 gap-2 navbarUser"
        >
          <i className="text-xl">
            <GiLyre />
          </i>
          Lyrics
        </NavLink>
      </p>
      <p className="flex" onClick={() => clickHandle("biling")}>
        <NavLink
          to="./comment"
          className="flex items-center gap-2 focus:text-textSecond_50 navbarUser"
        >
          <i className="text-xl">
            <MdInsertComment />
          </i>
          Comment
        </NavLink>
      </p>
      <p className="flex" onClick={() => clickHandle("notifaction")}>
        <NavLink
          to="./danger"
          className="flex focus:text-textSecond_50 items-center gap-2"
        >
          <i className="text-xl">
            <MdSecurity />
          </i>
          Danger Zone
        </NavLink>
      </p>

      <div className="square absolute left-0 bottom-[0px] w-24 h-[0.15rem] bg-bg_50"></div>
    </div>
  );
}
