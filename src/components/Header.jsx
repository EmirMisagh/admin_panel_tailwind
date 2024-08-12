import React from "react";
import { LuDot } from "react-icons/lu";
import { NavLink } from "react-router-dom";


function Header({ title, address1, address2, address3, button }) {
  return (
    <div className="flex justify-between items-center playfair">
      <div>
        <h2 className="text-textSecond_100 text-2xl font-bold">{title}</h2>
        <p className="flex gap-5 p-2 text-sm items-center pl-0 text-textSecond_100">
          <span>
            <NavLink to={`/`}>{address1}</NavLink>
          </span>
          <LuDot />
          <span>
            <NavLink to={`/${address2}/list`}>{address2}</NavLink>
          </span>
          {!!address3 && (
            <>
              <LuDot />
              <span className="text-textSecond_400">{address3}</span>
            </>
          )}
        </p>
      </div>
      <div>
        {!!button && (
          <NavLink to={`/${address2.toLowerCase()}/create`}>
            <button
              className="bg-bg_0 text-textSecond_900 transition-all delay-100 
         px-4 py-2 rounded-lg hover:bg-bg_100
        font-bold text-sm "
            >
              {button}
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
