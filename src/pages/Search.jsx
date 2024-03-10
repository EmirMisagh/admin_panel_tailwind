import React from "react";
import { PiSortDescendingLight } from "react-icons/pi";
import { SlArrowUp } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";

function Search() {
  const dispatch = useDispatch();
  const { searchMenu } = useSelector((state) => ({
    searchMenu: state.menuReducer.searchMenu,
  }));
  return (
    <div
      className={`fixed overflow-hidden search border-l transition-all delay-75 
    flex flex-col  left-0 ${
      searchMenu ? "top-0" : "top-[-100vh]"
    } w-[100vw] h-full z-[999999999999] blur-none  
    border-l-1 border-color_border_600 p-7`}
    >
      <div className="grid grid-cols-3 items-center">
        <div className=" flex justify-start pl-4 items-center">
          <img src="/img/Web-Logo.png" className=" w-24 h-16" alt="" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Find Complate Components "
            className=" bg-transparent border border-color_border_300 playfair rounded-full py-[0.4rem] px-4 text-textSecond_50 w-[30rem] outline-none"
          />
        </div>
        <div className="flex gap-10 text-textSecond_50 items-center pr-10 text-2xl justify-end">
          <i className=" cursor-pointer">
            <PiSortDescendingLight />
          </i>
          <i
            className=" cursor-pointer"
            onClick={() => {
              dispatch({
                type: "searchmenu",
              });
            }}
          >
            <SlArrowUp />
          </i>
        </div>
      </div>
    </div>
  );
}

export default Search;
