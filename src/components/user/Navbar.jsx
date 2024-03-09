import React from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

export default function DataNavbar({ array }) {
  const clickHandle = (submit) => {
    switch (submit) {
      case "0":
        gsap.to(".square", 0.4, { x: 0, width: 54 });
        break;
      case "1":
        gsap.to(".square", 0.4, { x: 85, width: 75 });
        break;
      case "2":
        gsap.to(".square", 0.4, { x: 192, width: 88 });
        break;
      case "3":
        gsap.to(".square", 0.4, { x: 312, width: 85 });
        break;
      case "4":
        gsap.to(".square", 0.4, { x: 428, width: 92 });
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex navbarUser gap-9  px-4 py-1 text-textSecond_300 font-bold relative bg-box ">
      <p className="flex" onClick={() => clickHandle("0")}>
        <NavLink
          to="./"
          className="flex items-center focus:text-textgray50 text-sm gap-2 navbarUser"
        >
          All
          <span className=" bg-black text-xs rounded-md p-1 text-white">
            10
          </span>
        </NavLink>
      </p>
      <p className="flex" onClick={() => clickHandle("1")}>
        <NavLink
          to="./active"
          className="flex items-center focus:text-textgray50 text-sm gap-2 navbarUser"
        >
          Active
          <span className=" bg-green-200 text-xs rounded-md p-1 text-black">
            10
          </span>
        </NavLink>
      </p>
      <p className="flex" onClick={() => clickHandle("2")}>
        <NavLink
          to="./"
          className="flex items-center focus:text-textgray50 text-sm gap-2 navbarUser"
        >
          Pending
          <span className=" bg-yellow-200 text-xs rounded-md p-1 text-black">
            10
          </span>
        </NavLink>
      </p>
      <p className="flex" onClick={() => clickHandle("3")}>
        <NavLink
          to="./banned"
          className="flex items-center focus:text-textgray50 text-sm gap-2 navbarUser"
        >
          Banned
          <span className=" bg-red-200 text-xs rounded-md p-1 text-black">
            10
          </span>
        </NavLink>
      </p>
      <p className="flex" onClick={() => clickHandle("4")}>
        <NavLink
          to="./"
          className="flex items-center focus:text-textgray50 text-sm gap-2 navbarUser"
        >
          Rejected
          <span className=" bg-gray-300 text-xs rounded-md p-1 text-black">
            10
          </span>
        </NavLink>
      </p>
      <div className="square absolute left-[16px] bottom-[-10px] w-[3.2rem] h-[0.15rem] bg-bg_50"></div>
    </div>
  );
}
