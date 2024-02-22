import React, { useMemo, useState } from "react";
import MyCombobox from "./Combobox";
import InputComponent from "./InputComponent";
import { CiMenuKebab } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import {
  MdEdit,
  MdMoreVert,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdDeleteForever,
} from "react-icons/md";
import { BiSolidCheckboxMinus, BiSolidCheckboxChecked } from "react-icons/bi";
import Toggle from "./Toggle";

export function DataGridUser({ users }) {
  const [list, setList] = useState(users);
  const [padding, setPadding] = useState(true);
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState([]);
  const [index, setIndex] = useState(7);
  const [indexOne, setIndexOne] = useState(0);

  useMemo(() => {
    setList(users);
  }, [users]);

  const paddingHandle = () => {
    setPadding(!padding);
  };

  const filterHandle = (event) => {
    setInput(event.target.value);
  };

  const selectHandle = (id) => {
    if (selected.find((i) => i === id)) {
      setSelected(selected.filter((i) => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  };
  const selectAllHandle = () => {
    if (selected.length < list.length) {
      setSelected([...list]);
    } else {
      setSelected([]);
    }
  };

  const filterAdminHandle = (event) => {
    if (event === "Not filter") {
      setList(users);
      return;
    }

    setList(users.filter((item) => item.admin === event));
  };
  return (
    <div className="w-full py-3 pb-0">
      <div className="flex gap-4 py-3 mb-3 px-4 pb-0">
        <div className="">
          {" "}
          <MyCombobox
            handle={filterAdminHandle}
            arr={[
              { id: 1, name: "Not filter" },
              { id: 2, name: "Admin" },
              { id: 3, name: "Manager" },
              { id: 4, name: "User" },
            ]}
            label={"Admin"}
          />
        </div>
        <div className="flex-1">
          <InputComponent
            title={"Search"}
            typeInput={"text"}
            name="password"
            onChange={filterHandle}
            onBlur={() => {}}
            value={input}
            errors={false}
            touche={false}
          />
        </div>
        <div className="flex items-center p-5 px-3 text-textSecond_200">
          <CiMenuKebab />
        </div>
      </div>
      <div className="grid text-[0.8rem]">
        {selected.length > 0 ? (
          <div className="w-full h-full flex py-4 px-5 bg-theme600 text-theme100 justify-between">
            <div className="flex items-center gap-3">
              <div>
                {selected.length < users.length ? (
                  <p className=" text-2xl cursor-pointer">
                    <BiSolidCheckboxMinus onClick={selectAllHandle} />
                  </p>
                ) : (
                  <p className=" text-2xl cursor-pointer">
                    <BiSolidCheckboxChecked onClick={selectAllHandle} />
                  </p>
                )}
              </div>
              <div>
                <p>{selected.length} selected</p>
              </div>
            </div>
            <div className=" text-2xl pr-6 cursor-pointer">
              <MdDeleteForever />
            </div>
          </div>
        ) : (
          <div className="flex justify-between gap-5 py-4 text-[1rem] px-6 font-bold text-textSecond_500">
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                onClick={selectAllHandle}
                checked={selected.length === users.length ? true : false}
              />
            </div>
            <div className="flex-1">Name</div>
            <div className="w-44">Phone number</div>
            <div className=" text-left w-20">Country</div>
            <div className="w-24 text-center">Admin</div>
            <div className="w-24 text-center">Action</div>
          </div>
        )}
        <div className="px-2">
          {list.map(
            (item, i) =>
              i >= indexOne &&
              i < index && (
                <div
                  key={i}
                  className={`flex justify-between gap-5 items-center px-4 border-b text-textSecond_400 border-color_border_700 font-body transition-all delay-100 ${
                    padding ? "py-2" : "py-5"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      onClick={() => selectHandle(item)}
                      checked={
                        selected.find((i) => i._id === item._id) === undefined
                          ? false
                          : true
                      }
                    />
                  </div>
                  <div className="flex-1 flex items-center gap-3">
                    <div>
                      <img
                        className=" w-12 h-12 rounded-full"
                        src={item.avatar}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <b className=" text-textSecond_200">
                        {item.name + " " + item.family}
                      </b>
                      <p className=" text-textgray400">{item.email}</p>
                    </div>
                  </div>
                  <div className="w-44  ">{item.phone}</div>
                  <div className="text-left w-20">Iran</div>
                  <div className="w-24 flex justify-center items-center">
                    <div
                      className={` rounded-xl text-white font-bold ${
                        item.admin === "Admin"
                          ? "bg-green-600"
                          : item.admin === "User"
                          ? "bg-blue-600"
                          : "bg-yellow-600"
                      } w-20  justify-center py-2 flex items-center`}
                    >
                      <i></i>
                      <small>{item.admin}</small>
                    </div>
                  </div>
                  <div className="flex w-24 text-lg gap-3 items-center justify-end pr-4">
                    <NavLink to={`/user/accont`}>
                      <i>
                        <MdEdit />
                      </i>
                    </NavLink>
                    <i>
                      <MdDeleteForever />
                    </i>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="flex items-center py-6 px-8 justify-between">
        <div className="flex gap-3 justify-center items-center">
          <Toggle handle={paddingHandle} value={padding} />
          <p className="text-sm">Dense</p>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <div>
            <b className="text-textgray200">Rows per page:</b>
          </div>
          <div>
            <p>
              {indexOne + 1}–{index >= list.length ? list.length : index} of{" "}
              {list.length}
            </p>
          </div>
          <div className="flex gap-3 text-xl">
            <i
              className={`${
                indexOne === 0
                  ? "text-textSecond_700"
                  : "text-textSecond_100 cursor-pointer"
              }`}
            >
              <MdKeyboardArrowLeft
                onClick={() => {
                  if (indexOne > 0) {
                    setIndex(index - 7);
                    setIndexOne(indexOne - 7);
                  }
                }}
              />
            </i>
            <i
              className={`${
                index >= list.length
                  ? "text-textSecond_700"
                  : "text-textSecond_100 cursor-pointer"
              }`}
            >
              <MdKeyboardArrowRight
                onClick={() => {
                  if (index < list.length) {
                    setIndex(index + 7);

                    setIndexOne(indexOne + 7);
                  }
                }}
              />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DataGridSong() {
  return <div>DataGridUser</div>;
}

export function DataNavbar() {
  const clickHandle = (submit) => {
    switch (submit) {
      case "0":
        console.log("click");
        gsap.to(".square", 0.4, { x: 0, width: 54 });
        break;
      case "1":
        console.log("click");
        gsap.to(".square", 0.4, { x: 85, width: 75 });
        break;
      case "2":
        console.log("click");
        gsap.to(".square", 0.4, { x: 192, width: 88 });
        break;
      case "3":
        console.log("click");
        gsap.to(".square", 0.4, { x: 312, width: 85 });
        break;
      case "4":
        console.log("click");
        gsap.to(".square", 0.4, { x: 428, width: 92 });
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex navbarUser gap-9  px-4 text-textSecond_300 font-bold relative bg-box ">
      <p className="flex" onClick={() => clickHandle("0")}>
        <NavLink
          to="./"
          className="flex items-center focus:text-textgray50 text-sm gap-2 navbarUser"
        >
          All
          <span className=" bg-black text-xs rounded-md p-1 text-white">
            10
          </span>
        </NavLink>
      </p>
      <p className="flex" onClick={() => clickHandle("1")}>
        <NavLink
          to="./"
          className="flex items-center focus:text-textgray50 text-sm gap-2 navbarUser"
        >
          Active
          <span className=" bg-green-200 text-xs rounded-md p-1 text-black">
            10
          </span>
        </NavLink>
      </p>
      <p className="flex" onClick={() => clickHandle("2")}>
        <NavLink
          to="./"
          className="flex items-center focus:text-textgray50 text-sm gap-2 navbarUser"
        >
          Pending
          <span className=" bg-yellow-200 text-xs rounded-md p-1 text-black">
            10
          </span>
        </NavLink>
      </p>
      <p className="flex" onClick={() => clickHandle("3")}>
        <NavLink
          to="./"
          className="flex items-center focus:text-textgray50 text-sm gap-2 navbarUser"
        >
          Banned
          <span className=" bg-red-200 text-xs rounded-md p-1 text-black">
            10
          </span>
        </NavLink>
      </p>
      <p className="flex" onClick={() => clickHandle("4")}>
        <NavLink
          to="./"
          className="flex items-center focus:text-textgray50 text-sm gap-2 navbarUser"
        >
          Rejected
          <span className=" bg-gray-300 text-xs rounded-md p-1 text-black">
            10
          </span>
        </NavLink>
      </p>
      <div className="square absolute left-[16px] bottom-[-10px] w-[3.2rem] h-[0.15rem] bg-bg_50"></div>
    </div>
  );
}
