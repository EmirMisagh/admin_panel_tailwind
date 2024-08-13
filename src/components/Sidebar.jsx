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

function Sidebar() {
  const sidebar = useSelector((state) => state.menuReducer.sidebar);
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
      className={`transition-all delay-700 w-full h-[100vh]  sticky top-0 left-0 m-0 py-5 font-Libre`}
    >
      <div className="w-full h-full relative">
        <div className="flex flex-col items-center justify-center font-Libre text-textSecond_400 py-6">
          <p className=" text-textSecond_50 font-bold">
            {name} {sidebar && family}
          </p>
          <div className="mt-3 flex flex-col gap-1 text-sm justify-between items-center">
            <small>{sidebar && email}</small>
            <span className="flex text-xs py-1 px-3 text-theme200 justify-center items-center rounded-lg bg-theme600">
              {admin === "Admin"
                ? Language.user.admin
                : admin === "Manager"
                ? Language.user.manager
                : Language.user.user}
            </span>
          </div>
        </div>
        <div
          className={`relative w-full overflow-y-scroll overflow-x-hidden h-[80vh] notscroll ${
            sidebar ? "px-3" : "px-2"
          }`}
        >
          <div className={`${sidebar ? "mt-10" : "mt-4"}`}>
            <span
              className={`uppercase text-textSecond_700 text-xs mb-3 flex  ${
                sidebarLocation === 'left' ? sidebar
                  ? "text-left  justify-between  "
                  : " text-center justify-center"
                  : sidebar
                  ? "text-right float-end justify-between  "
                  : " text-center justify-center"
              }`}
            >
              {Language.sidebar.overview}
            </span>
            <div className="mt-3">
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
          <div className="mt-4">
            <span
              className={`uppercase text-textSecond_700 mb-3 text-xs flex  ${
                sidebarLocation === 'left' ? sidebar
                ? "text-left  justify-between  "
                : " text-center justify-center"
                : sidebar
                ? "text-right float-end justify-between  "
                : " text-center justify-center"
              }`}
            >
              {Language.sidebar.managment}
            </span>
            <div className="mt-3">
              <ItemSide
                title={Language.user.user}
                address={"/"}
                icon={<BiSolidUserRectangle />}
              />
              <ItemSide
                title={"Song"}
                address={"/"}
                icon={<BsFillFileMusicFill />}
              />
              <ItemSide
                title={"Playlist"}
                address={"/"}
                icon={<MdPlaylistAddCircle />}
              />
              <ItemSide title={"Album"} address={"/"} icon={<RiAlbumFill />} />
              <ItemSide
                title={"Singer"}
                address={"/"}
                icon={<BiSolidMicrophoneAlt />}
              />
              <ItemSide
                title={"Category"}
                address={"/"}
                icon={<BiSolidCategoryAlt />}
              />
            </div>
          </div>
        </div>
        <span
          onClick={() => {
            dispatch({
              type: "sidebarboth",
            });
          }}
          className={`border border-gray400  z-[99999999999] text-textSecond_300 hover:border-gray100 absolute top-24 transform translate-x-3 rounded-full ${sidebarLocation === 'left' ? 'right-0' : 'left-[-1.4rem]'} cursor-pointer`}
        >
          <MdKeyboardArrowRight
            className={` ${
              sidebarLocation === 'left' ? sidebar ? "rotate-[180deg]" : "rotate-[0deg]" : sidebar ? "rotate-[0deg]" : "rotate-[180deg]"
            } transform font-light h-5 w-5`}
          />
        </span>
      </div>
    </div>
  );
}

function ItemOverview({ title, address, icon }) {
  const sidebar = useSelector((state) => state.menuReducer.sidebar);
  const sidebarLocation = useSelector((state) => state.menuReducer.sidebarLocation);
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
            ${sidebarLocation === 'right' && 'flex-row-reverse'}
              ${
                sidebar
                  ? "px-4 text-left  justify-start flex-row gap-3 text-sm"
                  : "px-2 text-center justify-center flex-col gap-1 text-xs "
              } 
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
  const sidebar = useSelector((state) => state.menuReducer.sidebar);
  const sidebarLocation = useSelector((state) => state.menuReducer.sidebarLocation);
  const [openDiv, setOpenDiv] = useState(false);

  const Language = useMode();

  useMemo(() => {
    let Url = window.location.href;
    Url = Url.split("//");
    Url = Url[1];
    Url = Url.split("/");
    Url = Url[1];
    if (Url === title.toLowerCase()) setOpenDiv(true);
  }, [title]);

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
    <div
      className={`flex flex-col mt-1 
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
                  `}
    >
      <button
        onMouseDown={(e) => downHandle(e)}
        onMouseUp={(e) => upHandle(e)}
        onClick={(e) => clickHandle(e)}
        className={`w-full h-full flex items-center text-sm rounded-lg
          ${sidebarLocation === 'right' && 'flex-row-reverse'}
              ${
                sidebar
                  ? "px-4 text-left  justify-between flex-row gap-3 text-sm"
                  : "px-2 text-center justify-center text-xs "
              } 
              py-3 hover:bg-bg_secend_400 relative`}
      >
        <span
          className={`flex items-center gap-3 w-full h-full pointer-events-none ${
            sidebarLocation === 'left' ? sidebar ? " flex-row " : "text-[0.79rem] flex-col gap-[7px]" : sidebar ? "flex-row-reverse" : "text-[0.79rem] flex-col gap-[7px]"
          } `}
        >
          <i
            className={` ${
              sidebar ? " text-lg " : "text-[0.9rem] scale-150  "
            } pointer-events-none`}
          >
            {icon}
          </i>
          {title}
        </span>
        <i className={`${sidebarLocation === 'right' ? openDiv ? "rotate-90" : 'rotate-180' : openDiv ? "rotate-90" : 'rotate-0'} pointer-events-none`}>
          <MdKeyboardArrowRight />
        </i>
      </button>
      <div
        className={`pt-1 pb-2 text-sm text-gray-500 ${
          openDiv ? "" : "opendiv"
        }`}
      >
        <Item
          title={Language.sidebar.list}
          address={`${title.toLowerCase()}/List`}
          icon={""}
        />
        <Item
          title={Language.sidebar.create}
          address={`${title.toLowerCase()}/create`}
          icon={""}
        />
        <Item
          title={"Accont"}
          address={`${title.toLowerCase()}/accont`}
          icon={""}
        />
        <Item
          title={"Card"}
          address={`${title.toLowerCase()}/card`}
          icon={""}
        />
      </div>
    </div>
  );
}

function Item({ title, address, icon }) {
  const sidebar = useSelector((state) => state.menuReducer.sidebar);
  const sidebarLocation = useSelector((state) => state.menuReducer.sidebarLocation);

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
      overflow-hidden
      transition ease-in-out duration-300 mt-1
      sidebarLink
    `}
    >
      <button
        onMouseDown={(e) => downHandle(e)}
        onMouseUp={(e) => upHandle(e)}
        onClick={(e) => clickHandle(e)}
        className={`w-full h-full flex justify-start items-center gap-3 
          ${sidebarLocation === 'right' && 'flex-row-reverse'}
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

export default Sidebar;
