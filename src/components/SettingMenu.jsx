import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PiAlignRightFill, PiAlignLeftFill } from "react-icons/pi";
import {
  BsCircleHalf,
  BsCircleFill,
  BsFillCloudMoonFill,
  BsFillBrightnessHighFill,
  BsArrowClockwise,
} from "react-icons/bs";
import { VscClose } from "react-icons/vsc";
import useMode from "../config/Language";

function SettingMenu({ tableRef }) {
  const darkmode = useSelector((state) => state.themeReducer.darkmode);
  const sidebar = useSelector((state) => state.menuReducer.sidebar);
  const sidebarLocation = useSelector((state) => state.menuReducer.sidebarLocation);
  const color = useSelector((state) => state.themeReducer.color);
  const settingMenu = useSelector((state) => state.menuReducer.settingMenu);
  const boxtheme = useSelector((state) => state.themeReducer.boxtheme);
  const Language = useMode();

  const dispatch = useDispatch();
  const [handleClick, sethandleClick] = useState(false);
  const [fullScreen, setFullScreen] = useState(1);
  const Click = () => {
    sethandleClick(true);
    setTimeout(() => {
      sethandleClick(false);
    }, 350);
  };

  return (
    <>
      <div
        className={`fixed overflow-hidden transt ${sidebarLocation === "left" ? 'border-l' : 'border-r'} flex flex-col top-0 w-[17.0rem] z-[99999999] blur-none  border-l-1 border-color_border_600  ${
          sidebarLocation === 'left' ? settingMenu ? "right-0" : "right-[-17rem]" : settingMenu ? "left-0" : "left-[-17rem]"
        } h-full`}
      >
        <div className=" flex items-center justify-between px-6 py-5 pr-4 border-b border-color_border_600">
          <h6 className=" text-textSecond_100 font-bold text-xl">
            {Language.setting.setting}
          </h6>
          <div className="flex justify-between items-center text-xl text-textSecond_100 gap-3">
            <span>
              <BsArrowClockwise />
            </span>
            <span
              className=" cursor-pointer"
              onClick={() => {
                dispatch({
                  type: "menu",
                });
              }}
            >
              <VscClose />
            </span>
          </div>
        </div>
        <div className="h-full  overflow-auto notscroll px-6 py-5 flex flex-col gap-5">
          <div className="h-32 grid gap-4">
            <small className="text-textSecond_400 font-bold">
              {Language.setting.mode}
            </small>
            <div className="flex justify-between">
              <div
                onClick={() => {
                  dispatch({
                    type: "light",
                  });
                  window.localStorage.setItem("darkmode", "light");
                }}
              >
                <ItemBg
                  active={darkmode ? false : true}
                  icon={<BsFillBrightnessHighFill />}
                />
              </div>
              <div
                onClick={() => {
                  dispatch({
                    type: "dark",
                  });
                  window.localStorage.setItem("darkmode", "dark");
                }}
              >
                <ItemBg
                  active={darkmode ? true : false}
                  icon={<BsFillCloudMoonFill />}
                />
              </div>
            </div>
          </div>
          <div className="h-32 grid gap-4">
            <small className="text-textSecond_400 font-bold">
              {Language.setting.contrast}
            </small>
            <div className="flex justify-between">
              <div
                onClick={() => {
                  dispatch({
                    type: "boxthemeon",
                  });
                }}
              >
                <ItemBg
                  active={boxtheme ? true : false}
                  icon={<BsCircleFill />}
                  onClick={() => {
                    dispatch({
                      type: "boxthemeon",
                    });
                  }}
                />
              </div>
              <div
                onClick={() => {
                  dispatch({
                    type: "boxthemeoff",
                  });
                }}
              >
                <ItemBg
                  active={boxtheme ? false : true}
                  icon={<BsCircleHalf />}
                />
              </div>
            </div>
          </div>
          <div className="h-32 grid gap-4">
            <small className="text-textSecond_400 font-bold">
              {Language.setting.direction}
            </small>
            <div className="flex justify-between">
              <div
                onClick={() => {
                  dispatch({
                    type: "leftSidebar",
                  });
                  window.localStorage.setItem("sidebarDirection", "leftSidebar");
                }}
              >
                <ItemBg active={sidebarLocation === 'left' && true} icon={<PiAlignLeftFill />} />
              </div>
              <div
                onClick={() => {
                  dispatch({
                    type: "rightSidebar",
                  });
                  window.localStorage.setItem("sidebarDirection", "rightSidebar");
                }}
              >
                <ItemBg active={sidebarLocation === 'right' && true} icon={<PiAlignRightFill />} />
              </div>
            </div>
          </div>
          <div className="h-auto grid gap-4">
            <small className="text-textSecond_400 font-bold">
              {Language.setting.layout}
            </small>
            <div className="flex gap-3">
              <div
                className="p-1 bg-box cursor-pointer rounded-lg border border-color_border_600"
                onClick={() => {
                  dispatch({
                    type: "sidebarbig",
                  });
                  window.localStorage.setItem("sidebar", "true");
                }}
              >
                <div className="grid grid-cols-7 gap-1 w-14">
                  <div className=" h-12 col-span-4 rounded-md flex flex-col gap-1 justify-start">
                    <div
                      className={` w-3 h-3 rounded-full ${
                        sidebar ? "bg-theme200" : "bg-bg_secend_100"
                      }`}
                    ></div>
                    <div
                      className={`w-3/4 ${
                        sidebar ? "bg-theme300" : "bg-bg_secend_300"
                      } h-[3px] rounded-lg`}
                    ></div>
                    <div
                      className={`w-2/3 ${
                        sidebar ? "bg-theme500" : "bg-bg_secend_300"
                      } h-[3px] rounded-lg`}
                    ></div>
                  </div>
                  <div
                    className={`h-full col-span-3 ${
                      sidebar ? "bg-theme700" : "bg-bg_secend_300"
                    } rounded-md `}
                  ></div>
                </div>
              </div>
              <div className="p-1 cursor-pointer py-1 rounded-lg border border-color_border_600">
                <div className="grid grid-cols-2 gap-1 w-14">
                  <div className="w-6 h-12 col-span-1 rounded-md flex flex-col gap-1 justify-start">
                    <div className=" w-3 h-3 rounded-full bg-secend100"></div>
                    <div className="w-full bg-secend300 h-1 rounded-lg"></div>
                    <div className="w-2/3 bg-secend300 h-1 rounded-lg"></div>
                  </div>
                  <div className="w-full h-full col-span-1 bg-secend300 rounded-md "></div>
                </div>
              </div>
              <div
                className="p-1 cursor-pointer py-1 rounded-lg border border-color_border_600"
                onClick={() => {
                  dispatch({
                    type: "sidebarsmall",
                  });
                  window.localStorage.setItem("sidebar", "false");
                }}
              >
                <div className="grid grid-cols-7 gap-1 w-14">
                  <div className="w-6 h-12 col-span-2 rounded-md flex flex-col gap-1 justify-start">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        sidebar === false ? "bg-theme200" : "bg-bg_secend_100"
                      }`}
                    ></div>
                    <div
                      className={`w-1/2  ${
                        sidebar === false ? "bg-theme300" : "bg-bg_secend_300"
                      } h-1 rounded-lg`}
                    ></div>
                    <div
                      className={`w-1/2 ${
                        sidebar === false ? "bg-theme700" : "bg-bg_secend_300"
                      } h-1 rounded-lg`}
                    ></div>
                  </div>
                  <div
                    className={`w-full h-full col-span-5 ${
                      sidebar === false ? "bg-theme700" : "bg-bg_secend_300"
                    } rounded-md `}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto grid gap-4">
            <small className="text-textSecond_400 font-bold">
              {Language.setting.stretch}
            </small>
            <div></div>
          </div>
          <div className="h-auto grid gap-4">
            <small className="text-textSecond_400 font-bold">
              {Language.setting.presets}
            </small>
            <div className="grid grid-cols-3 gap-3">
              <div
                className={`p-1 w-16 h-14 ${
                  color === "red" && "bg-themered200 "
                } flex justify-center items-center cursor-pointer rounded-lg border border-color_border_600`}
                onClick={() => {
                  dispatch({
                    type: "red",
                  });
                }}
              >
                <span
                  className={`grid grid-cols-7 ${
                    color === "red" && " scale-150"
                  } gap-1 w-3 h-3 bg-themered100 rounded-full`}
                ></span>
              </div>
              <div
                className={`p-1 w-16 h-14 ${
                  color === "blue" && "bg-themeblue200"
                } flex justify-center items-center cursor-pointer rounded-lg border border-color_border_600`}
                onClick={() => {
                  dispatch({
                    type: "blue",
                  });
                }}
              >
                <span
                  className={`grid grid-cols-7 ${
                    color === "blue" && " scale-150"
                  } gap-1 w-3 h-3 bg-themeblue100 rounded-full`}
                ></span>
              </div>
              <div
                className={`p-1 w-16 h-14 ${
                  color === "purple" && "bg-themepurple200"
                } flex justify-center items-center cursor-pointer rounded-lg border border-color_border_600`}
                onClick={() => {
                  dispatch({
                    type: "purple",
                  });
                }}
              >
                <span className="grid grid-cols-7 gap-1 w-3 h-3 bg-themepurple100 rounded-full"></span>
              </div>
              <div
                className={`p-1 w-16 h-14 ${
                  color === "yellow" && "bg-themeyellow200"
                } flex justify-center items-center cursor-pointer rounded-lg border border-color_border_600`}
                onClick={() => {
                  dispatch({
                    type: "yellow",
                  });
                }}
              >
                <span
                  className={`grid grid-cols-7 ${
                    color === "yellow" && " scale-150"
                  } gap-1 w-3 h-3 bg-themeyellow100 rounded-full`}
                ></span>
              </div>
              <div
                className={`p-1 w-16 h-14 ${
                  color === "bluesky" && "bg-themebluesky200"
                } flex justify-center items-center cursor-pointer rounded-lg border border-color_border_600`}
                onClick={() => {
                  dispatch({
                    type: "bluesky",
                  });
                }}
              >
                <span className="grid grid-cols-7 gap-1 w-3 h-3 bg-themebluesky100 rounded-full"></span>
              </div>
              <div
                className={`p-1 w-16 h-14 ${
                  color === "green" && "bg-themegreen200"
                } flex justify-center items-center cursor-pointer rounded-lg border border-color_border_600`}
                onClick={() => {
                  dispatch({
                    type: "green",
                  });
                }}
              >
                <span className="grid grid-cols-7 gap-1 w-3 h-3 bg-themegreen100 rounded-full"></span>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <small className="text-textSecond_400 font-bold">
              {Language.setting.api}
            </small>
            <div className="flex mt-2 gap-1">
              <button
                className={`${handleClick && "btn"}   transition-all delay-150 
                border border-color_border_600 rounded-lg text-textSecond_400 font-bold w-full py-4
                  text-sm ${
                    darkmode ? "hover:bg-slate-800" : "hover:bg-stone-200"
                  } `}
                onClick={() => {
                  dispatch({
                    type: "setAPI",
                    value: "http://localhost:8080",
                  });
                }}
              >
                {Language.setting.local}
              </button>
              <button
                className={`${handleClick && "btn"}   transition-all delay-150 
                border border-color_border_600 rounded-lg text-textSecond_400 font-bold w-full py-4
                  text-sm ${
                    darkmode ? "hover:bg-slate-800" : "hover:bg-stone-200"
                  } `}
                onClick={() => {
                  dispatch({
                    type: "setAPI",
                    value: "https://serverkurdsong.liara.run",
                  });
                }}
              >
                {Language.setting.global}
              </button>
            </div>
          </div>
          <div className="pb-2">
            <button
              onClick={() => {
                Click();
                const elem = tableRef.current;
                if (fullScreen) {
                  elem.requestFullscreen();
                  setFullScreen(0);
                } else {
                  document.exitFullscreen();
                  setFullScreen(1);
                }
              }}
              onMouseDown={() => sethandleClick(true)}
              className={`${handleClick && "btn"}   transition-all delay-150 
              border border-color_border_600 rounded-lg text-textSecond_400 font-bold w-full py-4
                text-sm ${
                  darkmode ? "hover:bg-slate-800" : "hover:bg-stone-200"
                } `}
            >
              {Language.setting.fullscreen}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${settingMenu ? "w-[80vw] " : "w-0"}
    h-[100vh] transition-all  fixed justify-between left-0 top-0 z-[999999] flex flex-col`}
        onClick={() => {
          dispatch({
            type: "menu",
          });
        }}
      ></div>
    </>
  );
}

function ItemBg({ active, icon }) {
  return (
    <div
      className={`p-[2.5rem] ${
        active ? "box text-textSecond_50 " : "text-textSecond_500"
      } cursor-pointer py-[2.2rem] rounded-lg border border-color_border_600`}
    >
      <span className={`text-[22px]  `}>{icon}</span>
    </div>
  );
}

export default SettingMenu;
