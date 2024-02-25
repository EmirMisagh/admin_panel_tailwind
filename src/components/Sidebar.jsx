import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BsSpeedometer,
  BsBarChartLineFill,
  BsFillFileMusicFill,
} from "react-icons/bs";
import { MdKeyboardArrowRight, MdPlaylistAddCircle } from "react-icons/md";
import { BiSolidUserRectangle, BiSolidMicrophoneAlt } from "react-icons/bi";
import { GoFileDirectoryFill } from "react-icons/go";
import { RiAlbumFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

function Sidebar() {
  const { sidebar } = useSelector((state) => ({
    sidebar: state.menuReducer.sidebar,
  }));
  const dispatch = useDispatch();
  return (
    <div
      className={`transition-all delay-700 w-full h-[100vh]  sticky top-0 left-0 m-0 py-5 font-Libre`}
    >
      <div className="w-full h-full relative">
        <div className="flex justify-center font-Libre text-textSecond_400 py-6">
          Admin
        </div>
        <div
          className={`relative w-full overflow-y-scroll overflow-x-hidden h-[80vh] notscroll ${
            sidebar ? "px-3" : "px-3"
          }`}
        >
          <div className="mt-10">
            <span
              className={`uppercase text-textSecond_700 text-xs flex  ${
                sidebar
                  ? "text-left  justify-between  "
                  : " text-center justify-center"
              }`}
            >
              OVERVIEW
            </span>
            <div className="mt-3">
              <ItemOverview
                title={"App"}
                address={"/"}
                icon={<BsSpeedometer />}
              />
              <ItemOverview
                title={"Commerce"}
                address={"/"}
                icon={<BsBarChartLineFill />}
              />
              <ItemOverview
                title={"Analytics"}
                address={"/"}
                icon={<GoFileDirectoryFill />}
              />
            </div>
          </div>
          <div className="mt-4">
            <span
              className={`uppercase text-textSecond_700 text-xs flex  ${
                sidebar
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
            </div>
          </div>
        </div>
          <span
            onClick={() => {
              dispatch({
                type: "sidebarboth",
              });
            }}
            className="border border-gray400  z-[99999999999] text-textSecond_300 hover:border-gray100 absolute top-24 transform translate-x-3 rounded-full right-0 cursor-pointer"
          >
            <MdKeyboardArrowRight
              className={` ${
                sidebar ? "rotate-[180deg]" : "rotate-[0deg]"
              } transform font-light
                             h-5 w-5`}
            />
          </span>
      </div>
    </div>
  );
}

function ItemOverview({ title, address, icon }) {
  const { sidebar } = useSelector((state) => ({
    sidebar: state.menuReducer.sidebar,
  }));
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
          className={`w-full h-full flex items-center text-sm 
              ${
                sidebar
                  ? "px-4 text-left  justify-start flex-row gap-3"
                  : "px-2 text-center justify-center flex-col gap-1"
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
  const { sidebar } = useSelector((state) => ({
    sidebar: state.menuReducer.sidebar,
  }));
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
              ${
                sidebar
                  ? "px-4 text-left  justify-between flex-row gap-3"
                  : "px-2 text-center justify-center  "
              } 
              py-3   hover:bg-bg_secend_400 relative`}
      >
        <span
          className={`flex items-center gap-3 w-full h-full pointer-events-none ${
            sidebar ? " flex-row " : "text-[0.79rem] flex-col gap-[7px]"
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
        <i className=" pointer-events-none">
          <MdKeyboardArrowRight />
        </i>
      </button>
      <div
        className={`pt-1 pb-2 text-sm text-gray-500 ${
          openDiv ? "" : "opendiv"
        }`}
      >
        <Item
          title={"List"}
          address={`${title.toLowerCase()}/List`}
          icon={""}
        />
        <Item
          title={"Create"}
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
    </NavLink>
  );
}

function Item({ title, address, icon }) {
  const { sidebar } = useSelector((state) => ({
    sidebar: state.menuReducer.sidebar,
  }));

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
