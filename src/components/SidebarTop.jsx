import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BsSpeedometer,
  BsBarChartLineFill,
  BsFillFileMusicFill,
  BsCalendar2DayFill,
} from "react-icons/bs";
import { MdKeyboardArrowRight, MdPlaylistAddCircle } from "react-icons/md";
import {
  BiSolidUserRectangle,
  BiSolidMicrophoneAlt,
  BiSolidCategoryAlt,
} from "react-icons/bi";
import { GoFileDirectoryFill } from "react-icons/go";
import { RiAlbumFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import useMode from "../config/Language";

function SidebarTop() {
  const sidebarLocation = useSelector(
    (state) => state.menuReducer.sidebarLocation
  );
  const Language = useMode();

  const name = window.localStorage.getItem("name");
  const admin = window.localStorage.getItem("admin");
  const family = window.localStorage.getItem("family");
  const email = window.localStorage.getItem("email");
  const dispatch = useDispatch();
  return (
    <div
      className={`transition-all delay-700 sticky top-0 left-0 m-0  font-Libre flex`}
    >
      <div
        className={`relative flex overflow-x-auto sidebarTop pb-2 px-8 gap-10 ${
          sidebarLocation === "right" && "flex-row-reverse"
        }`}
      >
        <div className="flex flex-col items-center  justify-center font-Libre text-textSecond_400 ">
          <p className="flex text-textSecond_50 font-bold w-28">
            {name} {family}
          </p>
        </div>
        <div
          className={`relative flex ${
            sidebarLocation === "right" && "flex-row-reverse"
          } gap-2 `}
        >
          <div className={` items-center overflow-y-auto`}>
            <div
              className={`flex gap-2 items-center overflow-auto ${
                sidebarLocation === "right" && "flex-row-reverse"
              }`}
            >
              <ItemOverview
                title={Language.sidebar.app}
                address={"/"}
                icon={<BsSpeedometer />}
              />
              <ItemOverview
                title={Language.sidebar.commerce}
                address={"/commerce"}
                icon={<BsBarChartLineFill />}
              />
              <ItemOverview
                title={Language.sidebar.files}
                address={"/files"}
                icon={<GoFileDirectoryFill />}
              />
              <ItemOverview
                title={Language.sidebar.calendar}
                address={"/calendar"}
                icon={<BsCalendar2DayFill />}
              />
            </div>
          </div>
          <div className=" gap-10 flex ">
            <div
              className={`flex items-center relative overflow-hidden gap-2  ${
                sidebarLocation === "right" && "flex-row-reverse"
              }`}
            >
              <ItemSide
                title={Language.user.user}
                address={"user"}
                icon={<BiSolidUserRectangle />}
              />
              <ItemSide
                title={Language.song.song}
                address={"song"}
                icon={<BsFillFileMusicFill />}
              />
              <ItemSide
                title={Language.song.playlist}
                address={"playlist"}
                icon={<MdPlaylistAddCircle />}
              />
              <ItemSide
                title={Language.song.album}
                address={"/"}
                icon={<RiAlbumFill />}
              />
              <ItemSide
                title={Language.song.singer}
                address={"singer"}
                icon={<BiSolidMicrophoneAlt />}
              />
              <ItemSide
                title={Language.song.category}
                address={"category"}
                icon={<BiSolidCategoryAlt />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemOverview({ title, address, icon }) {
  const sidebar = useSelector((state) => state.menuReducer.sidebar);
  const sidebarLocation = useSelector(
    (state) => state.menuReducer.sidebarLocation
  );
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
        className={`flex mt-1
                    w-full 
                    rounded-lg 
                    ${
                      sidebar
                        ? "text-left  justify-between  "
                        : " text-center justify-center"
                    } 
                    text-textSecond_300
                    focus:outline-none 
                    font-Libre
                    bg-none  
                    overflow-hidden
                    transition ease-in-out duration-300
                    sidebarLink
                  `}
      >
        <button
          onMouseDown={(e) => downHandle(e)}
          onMouseUp={(e) => upHandle(e)}
          onClick={(e) => clickHandle(e)}
          className={`w-full h-full flex items-center 
            ${sidebarLocation === "right" && "flex-row-reverse"}
                  px-4 w-36 text-left  justify-start flex-row gap-3 text-sm
              py-3   hover:bg-bg_secend_400 hover:text-textSecond_300`}
        >
          <span className=" text-lg pointer-events-none">{icon}</span>
          {title}
        </button>
      </NavLink>
    </>
  );
}

function ItemSide({ title, address, icon }) {
  const sidebarLocation = useSelector(
    (state) => state.menuReducer.sidebarLocation
  );
  const [openDiv, setOpenDiv] = useState(false);

  const Language = useMode();

  return (
    <div
      className={`flex flex-col mt-1 
                  w-full 
                  rounded-lg 
                      text-left  justify-between   relative
                  text-textSecond_300
                  focus:outline-none 
                  font-Libre
                  bg-none  
                  transition ease-in-out duration-300
                `}
    >
      <button
        className={`w-full btnSidebarTop h-full flex items-center text-sm rounded-lg
        ${sidebarLocation === "right" && "flex-row-reverse"}
           
                px-4 text-left  justify-between flex-row gap-3 text-sm
               
            py-3 hover:bg-bg_secend_400 relative`}
      >
        <span
          className={`flex items-center gap-3 w-full h-full pointer-events-none ${
            sidebarLocation === "left" ? " flex-row " : "flex-row-reverse"
          } `}
        >
          <i
            className={`
              text-lg text-[0.9rem] scale-150  
            pointer-events-none`}
          >
            {icon}
          </i>
          {title}
        </span>
        <i
          className={`rotate-90 pointer-events-none`}
        >
          <MdKeyboardArrowRight />
        </i>
      </button>
      <div
        tabIndex={1}
        className={`divSidebarTop flex-col pt-1 pb-2 text-sm text-gray-500 absolute bg-red-100 left-0 top-0 ${
          openDiv ? "divSidebarTop " : "divSidebarTop"
        }`}
      >
        <Item
          title={Language.sidebar.list}
          address={`${address.toLowerCase()}/List`}
          icon={""}
        />
        <Item
          title={Language.sidebar.create}
          address={`${address.toLowerCase()}/create`}
          icon={""}
        />
        <Item
          title={"Accont"}
          address={`${address.toLowerCase()}/accont`}
          icon={""}
        />
        <Item
          title={"Card"}
          address={`${address.toLowerCase()}/card`}
          icon={""}
        />
      </div>
    </div>
  );
}

function Item({ title, address, icon }) {
  const sidebar = useSelector((state) => state.menuReducer.sidebar);
  const sidebarLocation = useSelector(
    (state) => state.menuReducer.sidebarLocation
  );

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
      to={`/${address}`}
      className={`flex 
      w-full 
      rounded-lg 
      ${
        sidebar ? "text-left  justify-between  " : " text-center justify-center"
      } 
      text-textSecond_400 
      focus:outline-none 
      font-Libre
      bg-none 
      transition ease-in-out duration-300 mt-1
      sidebarLink
    `}
    >
      <button
        onMouseDown={(e) => downHandle(e)}
        onMouseUp={(e) => upHandle(e)}
        onClick={(e) => clickHandle(e)}
        className={`w-full h-full flex justify-start items-center gap-3 
          ${sidebarLocation === "right" && "flex-row-reverse"}
              ${
                sidebar
                  ? "px-4 text-left  justify-start text-sm "
                  : "px-2 text-center justify-center text-[0.7rem]"
              } 
              py-3   hover:bg-bg_secend_400 hover:text-textSecond_400`}
      >
        <span className="w-1 icon h-1 rounded-full bg-bg_secend_100"></span>
        {title}
      </button>
    </NavLink>
  );
}

export default SidebarTop;
