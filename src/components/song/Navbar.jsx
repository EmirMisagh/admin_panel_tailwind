import React from "react";
import { IoIosArrowBack, IoIosLaptop } from "react-icons/io";
import { NavLink, useParams } from "react-router-dom";

function Navbar({back,live}) {

  return (
    <div className="flex justify-between items-center my-7">
      <NavLink to={`/${back}/list`}>
        <div className="flex gap-2 items-center">
          <i className="text-xl">
            <IoIosArrowBack />
          </i>
          <small>Back</small>
        </div>
      </NavLink>
      <div className="flex ">
        <a
          href={`https://agitated-poincare-pc6wqbb9u.iran.liara.run/${live}`}
          target="_blank"
        >
          <abbr className="text-2xl cursor-pointer" title="Go Live">
            <IoIosLaptop />
          </abbr>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
