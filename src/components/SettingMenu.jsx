import React from "react";
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

function SettingMenu() {
  const { menu, darkmode, sidebar, color, boxtheme } = useSelector((state) => ({
    menu: state.menuReducer.settingMenu,
    darkmode: state.themeReducer.darkmode,
    sidebar: state.menuReducer.sidebar,
    color: state.themeReducer.color,
    boxtheme: state.themeReducer.boxtheme,
  }));
  const dispatch = useDispatch();
  return (
    <div
      className={`fixed overflow-hidden transt border-l flex flex-col top-0 w-[17.0rem] z-50 blur-none  border-l-1 border-color_border_600  ${
        menu === true ? "right-0" : "right-[-17rem]"
      } h-full`}
    >
      <div className=" flex items-center justify-between px-6 py-5 pr-4 border-b border-color_border_600">
        <h6 className=" text-textSecond_100 font-bold text-xl">Settings</h6>
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
          <small className="text-textSecond_400 font-bold">Mode</small>
          <div className="flex justify-between">
            <div
              onClick={() => {
                dispatch({
                  type: "light",
                });
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
          <small className="text-textSecond_400 font-bold">Contrast</small>
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
          <small className="text-textSecond_400 font-bold">Direction</small>
          <div className="flex justify-between">
            <ItemBg active={true} icon={<PiAlignLeftFill />} />
            <ItemBg icon={<PiAlignRightFill />} />
          </div>
        </div>
        <div className="h-auto grid gap-4">
          <small className="text-textSecond_400 font-bold">Layout</small>
          <div className="flex gap-3">
            <div
              className="p-1 bg-box cursor-pointer rounded-lg border border-color_border_600"
              onClick={() => {
                dispatch({
                  type: "sidebarbig",
                });
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
          <small className="text-textSecond_400 font-bold">Stretch</small>
          <div></div>
        </div>
        <div className="h-auto grid gap-4">
          <small className="text-textSecond_400 font-bold">Layout</small>
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
      </div>
    </div>
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
