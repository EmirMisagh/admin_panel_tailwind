import React from "react";
import { useSidebarMode } from "../context/MenuContext";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [sidebarMode] = useSidebarMode();
  return (
    <div
      className={` w-full h-[100vh]  sticky  top-0 left-0 m-0 ${
        sidebarMode ? "px-3" : "px-3"
      }  py-5 font-Libre`}
    >
      <div className="flex justify-center font-Libre text-textgray400 ">
        Admin
      </div>
      <div className="container-opendiv">
        dashbourd
        <span tabIndex={1} className="click-opendiv uppercase font-light">OVERVIEW</span>
        <div className="opendiv">
        dashbourd

        </div>
      </div>
      Sidebar
    </div>
  );
}

function ItemOverview({ title, address, icon }) {
  const [sidebarMode] = useSidebarMode();

  const downHandle = (e) => {
    e.target?.classList.add("btn");
    e.target?.classList.remove("hover:bg-secend400");
  };
  const upHandle = (e) => {
    e.target?.classList.remove("btn");
    e.target?.classList.add("hover:bg-secend400");
  };
  const clickHandle = (e) => {
    e.target?.classList.add("btn");
    e.target?.classList.remove("hover:bg-secend400");
    setTimeout(() => {
      e.target?.classList.remove("btn");
      e.target?.classList.add("hover:bg-secend400");
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
          className={`w-full h-full flex items-center 
              ${
                sidebarMode
                  ? "px-4 text-left  justify-start flex-row gap-3"
                  : "px-2 text-center justify-center flex-col gap-1"
              } 
              py-3   hover:bg-secend400`}
        >
          <span className=" text-lg ">{icon}</span>
          {title}
        </button>
      </NavLink>
    </>
  );
}

export default Sidebar;
