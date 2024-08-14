import { CiSearch } from "react-icons/ci";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { MdNotifications, MdQrCode2 } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import SidebarTop from "./SidebarTop";

export default function Topbar() {
  const dispatch = useDispatch();
  const avatar = window.localStorage.getItem("avatar");
  const language = useSelector((state) => state.languageReducer.language);
  const sidebarLocation = useSelector(
    (state) => state.menuReducer.sidebarLocation
  );
  const sidebarTop = useSelector((state) => state.menuReducer.sidebarTop);
  return (
    <div className="w-full sticky top-0 left-0 text-textSecond_200 transt z-[99999]  ">
      <div className="relative items-center">
        <nav
          className={`px-12 py-5 ${
            sidebarTop && "pb-0"
          } flex justify-between items-center ${
            sidebarLocation === "right" && "flex-row-reverse"
          }`}
        >
          <ul
            className="flex items-center cursor-pointer"
            onClick={() => {
              dispatch({
                type: "searchmenu",
              });
            }}
          >
            <span className=" text-2xl text-textSecond_200">
              <CiSearch />
            </span>
            <span className="  bg-bg_secend_300 ml-2 flex p-[4px] px-[6px] cursor-pointer text-sm rounded-lg text-textgray50 items-center">
              <MdQrCode2 />
              <small className=" text-xs text-textgray50 font-bold cursor-pointer">
                K
              </small>
            </span>
          </ul>
          <ul
            className={`flex gap-1 items-center ${
              sidebarLocation === "right" && "flex-row-reverse"
            }`}
          >
            <li className="p-2 py-3 rounded-full hover:bg-bg_secend_300 transt cursor-pointer">
              <Popover>
                <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:bg-bg_secend_300">
                  <img
                    src={`./img/${language}.webp`}
                    className="w-6 h-[1.19rem] "
                    alt=""
                  />
                </PopoverButton>
                <PopoverPanel
                  transition
                  anchor="bottom end"
                  className=" rounded-xl mt-4 z-[99999] bg-blue-300 text-sm/6 transition duration-200 ease-in-out opacity-100 data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                >
                  <div className="p-1 py-2 bg-bg_secend_100">
                    <div
                      className=" cursor-pointer bg-bg_secend_100 flex items-center gap-5 rounded-lg py-2 px-3 pr-20 transition hover:bg-white/5"
                      onClick={() => {
                        dispatch({
                          type: "English",
                        });
                        localStorage.setItem("language", "English");
                      }}
                    >
                      <i>
                        <img
                          src="./img/English.webp"
                          className="w-7 h-5"
                          alt=""
                        />
                      </i>
                      <p className="font-semibold text-white">English</p>
                    </div>
                    <div
                      className=" cursor-pointer flex items-center gap-5 rounded-lg py-2 px-3 transition hover:bg-white/5"
                      onClick={() => {
                        dispatch({
                          type: "French",
                        });
                        localStorage.setItem("language", "French");
                      }}
                    >
                      <i>
                        <img
                          src="./img/French.webp"
                          className="w-7 h-5"
                          alt=""
                        />
                      </i>
                      <p className="font-semibold text-white">French</p>
                    </div>
                    <div
                      className=" cursor-pointer flex items-center gap-5 rounded-lg py-2 px-3 transition hover:bg-white/5"
                      onClick={() => {
                        dispatch({
                          type: "Persian",
                        });
                        localStorage.setItem("language", "Persian");
                      }}
                    >
                      <i>
                        <img
                          src="./img/Persian.webp"
                          className="w-7 h-5"
                          alt=""
                        />
                      </i>
                      <p className="font-semibold text-white">Persian</p>
                    </div>
                    <div
                      className="cursor-pointer flex items-center gap-5 rounded-lg py-2 px-3 transition hover:bg-white/5"
                      onClick={() => {
                        dispatch({
                          type: "Turkish",
                        });
                        localStorage.setItem("language", "Turkish");
                      }}
                    >
                      <i>
                        <img
                          src="./img/Turkish.webp"
                          className="w-7 h-5"
                          alt=""
                        />
                      </i>
                      <p className="font-semibold text-white">Turkish</p>
                    </div>
                  </div>
                </PopoverPanel>
              </Popover>
            </li>
            <li className="p-2 rounded-full hover:bg-bg_secend_300 transt cursor-pointer">
              <span className="text-2xl">
                <MdNotifications />
              </span>
            </li>
            <li className="p-2 rounded-full hover:bg-bg_secend_300 transt cursor-pointer">
              <span className="text-2xl">
                <BsPersonLinesFill />
              </span>
            </li>
            <li
              className="p-2 rounded-full hover:bg-bg_secend_300 transt cursor-pointer"
              onClick={() => {
                dispatch({
                  type: "menu",
                });
              }}
            >
              <span className="text-2xl  ">
                <AiFillSetting />
              </span>
            </li>
            <li className="p-2 rounded-full hover:bg-bg_secend_300 transt cursor-pointer">
              <span className="  ">
                <img
                  className=" rounded-full w-9 h-9 object-cover"
                  src={avatar}
                  alt=""
                />
              </span>
            </li>
          </ul>
        </nav>
      </div>
      {sidebarTop && <SidebarTop />}
    </div>
  );
}
