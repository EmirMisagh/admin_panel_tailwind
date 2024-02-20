import React, { useState } from "react";
import { useSidebarMode } from "../context/MenuContext";
import { NavLink } from "react-router-dom";
import {
  BsSpeedometer,
  BsBarChartLineFill,
  BsBank2,
  BsFillFileMusicFill,
} from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSolidUserRectangle } from "react-icons/bi";

function Sidebar() {
  const [sidebarMode] = useSidebarMode();
  return (
    <div
      className={` w-full h-[100vh]  sticky  top-0 left-0 m-0 ${
        sidebarMode ? "px-3" : "px-3"
      }  py-5 font-Libre`}
    >
      <div className="flex justify-center font-Libre text-textSecond_400 ">
        Admin
      </div>
      <div className="mt-10">
        <span
          className={`uppercase text-textSecond_700 text-xs flex  ${
            sidebarMode
              ? "text-left  justify-between  "
              : " text-center justify-center"
          }`}
        >
          OVERVIEW
        </span>
        <div className="mt-3">
          <ItemOverview title={"App"} address={"/"} icon={<BsSpeedometer />} />
          <ItemOverview
            title={"Commerce"}
            address={"/"}
            icon={<BsBarChartLineFill />}
          />
          <ItemOverview title={"Analytics"} address={"/"} icon={<BsBank2 />} />
        </div>
      </div>
      <div className="mt-4">
        <span
          className={`uppercase text-textSecond_700 text-xs flex  ${
            sidebarMode
              ? "text-left  justify-between  "
              : " text-center justify-center"
          }`}
        >
          managment
        </span>
        <div className="mt-3">
          <ItemSide
            title={"User"}
            address={"/"}
            icon={<BiSolidUserRectangle />}
          />
          <div className="opendiv">amir</div>
          <ItemSide
            title={"Song"}
            address={"/"}
            icon={<BsFillFileMusicFill />}
          />
        </div>
      </div>
    </div>
  );
}

function ItemOverview({ title, address, icon }) {
  const [sidebarMode] = useSidebarMode();

  const downHandle = (e) => {
    e.target.classList.add("btn");
    e.target.classList.remove("hover:bg-bg_secend_400");
  };
  const upHandle = (e) => {
    e.target.classList.remove("btn");
    e.target.classList.add("hover:bg-bg_secend_400");
  };
  const clickHandle = (e) => {
    e.target.classList.add("btn");
    e.target.classList.remove("hover:bg-bg_secend_400");
    setTimeout(() => {
      e.target.classList.remove("btn");
      e.target.classList.add("hover:bg-bg_secend_400");
    }, 400);
  };
  return (
    <>
      <NavLink
        to={`${address}`}
        className={`flex 
                    w-full 
                    rounded-lg 
                    ${
                      sidebarMode
                        ? "text-left  justify-between  "
                        : " text-center justify-center"
                    } 
                    text-textgray300 
                    focus:outline-none 
                    font-Libre
                    bg-none  
                    overflow-hidden
                    transition ease-in-out duration-300
                  `}
      >
        <button
          onMouseDown={(e) => downHandle(e)}
          onMouseUp={(e) => upHandle(e)}
          onClick={(e) => clickHandle(e)}
          className={`w-full h-full flex items-center text-sm font-bold
              ${
                sidebarMode
                  ? "px-4 text-left  justify-start flex-row gap-3"
                  : "px-2 text-center justify-center flex-col gap-1"
              } 
              py-3   hover:bg-bg_secend_400`}
        >
          <span className=" text-lg pointer-events-none">{icon}</span>
          {title}
        </button>
      </NavLink>
    </>
  );
}

function ItemSide({ title, address, icon }) {
  const [sidebarMode] = useSidebarMode();
  const [openDiv, setOpenDiv] = useState(false);

  const downHandle = (e) => {
    e.target.classList.add("btn");
    e.target.classList.remove("hover:bg-bg_secend_400");
  };
  const upHandle = (e) => {
    e.target.classList.remove("btn");
    e.target.classList.add("hover:bg-bg_secend_400");
  };
  const clickHandle = (e) => {
    e.target.classList.add("btn");
    e.target.classList.remove("hover:bg-bg_secend_400");
    setOpenDiv(!openDiv);
    setTimeout(() => {
      e.target.classList.remove("btn");
      e.target.classList.add("hover:bg-bg_secend_400");
    }, 400);
  };
  return (
    <NavLink
      to={`#`}
      className={`flex flex-col mt-1 
                    w-full 
                    rounded-lg 
                    ${
                      sidebarMode
                        ? "text-left  justify-between  "
                        : " text-center justify-center"
                    } 
                    text-textgray300 
                    focus:outline-none 
                    font-Libre
                    bg-none  
                    overflow-hidden
                    transition ease-in-out duration-300
                  `}
    >
      <button
        onMouseDown={(e) => downHandle(e)}
        onMouseUp={(e) => upHandle(e)}
        onClick={(e) => clickHandle(e)}
        className={`w-full h-full flex items-center text-sm rounded-lg
              ${
                sidebarMode
                  ? "px-4 text-left  justify-between flex-row gap-3"
                  : " text-center justify-center  gap-1"
              } 
              py-3   hover:bg-bg_secend_400 relative`}
      >
        <span
          className={`flex items-center gap-3 w-full h-full pointer-events-none font-bold ${
            sidebarMode ? " flex-row " : "text-xs flex-col "
          } `}
        >
          <i
            className={` ${
              sidebarMode ? " text-lg " : "text-xs  "
            } pointer-events-none`}
          >
            {icon}
          </i>
          {title}
        </span>
        <i className=" pointer-events-none">
          <MdKeyboardArrowRight />
        </i>
      </button>
      <div
        className={`pt-1 pb-2 text-sm text-gray-500 ${
          openDiv ? "" : "opendiv"
        }`}
      >
        <Item title={"List"} address={"User/List"} icon={""} />
        <Item title={"Create"} address={"User/new"} icon={""} />
        <Item title={"Accont"} address={"User/accont"} icon={""} />
        <Item title={"Card"} address={"User/card"} icon={""} />
      </div>
    </NavLink>
  );
}

function Item({ title, address, icon }) {
  const [sidebarMode] = useSidebarMode();

  const downHandle = (e) => {
    e.target.classList.add("btn");
    e.target.classList.remove("hover:bg-bg_secend_400");
  };
  const upHandle = (e) => {
    e.target.classList.remove("btn");
    e.target.classList.add("hover:bg-bg_secend_400");
  };
  const clickHandle = (e) => {
    e.target.classList.add("btn");
    e.target.classList.remove("hover:bg-bg_secend_400");
    setTimeout(() => {
      e.target.classList.remove("btn");
      e.target.classList.add("hover:bg-bg_secend_400");
    }, 400);
  };
  return (
    <NavLink
      to={`${address}`}
      className={`flex 
      w-full 
      rounded-lg 
      ${
        sidebarMode
          ? "text-left  justify-between  "
          : " text-center justify-center"
      } 
      text-textSecond_400 
      focus:outline-none 
      font-Libre
      bg-none 
      overflow-hidden
      transition ease-in-out duration-300 mt-1
    `}
    >
      <button
        onMouseDown={(e) => downHandle(e)}
        onMouseUp={(e) => upHandle(e)}
        onClick={(e) => clickHandle(e)}
        className={`w-full h-full flex justify-start items-center gap-3 
              ${
                sidebarMode
                  ? "px-4 text-left  justify-start text-sm "
                  : "px-2 text-center justify-center text-[0.7rem]"
              } 
              py-3   hover:bg-bg_secend_400`}
      >
        <span className="w-1 icon h-1 rounded-full bg-bg_secend_100"></span>
        {title}
      </button>
    </NavLink>
  );
}

export default Sidebar;
