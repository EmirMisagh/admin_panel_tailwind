import { CiSearch } from "react-icons/ci";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { MdNotifications, MdQrCode2 } from "react-icons/md";
import { useDispatch } from "react-redux";

export default function Topbar() {
  const dispatch = useDispatch();
  const avatar = window.localStorage.getItem("avatar");
  return (
    <div className="w-full sticky top-0 left-0 text-textSecond_200 transt z-[99999]  ">
      <div className="relative items-center">
        <nav className="px-12 py-5 flex justify-between items-center">
          <ul className="flex items-center">
            <span className=" text-2xl text-textSecond_200">
              <CiSearch />
            </span>
            <span className=" bg-bg_secend_300 ml-2 flex p-[4px] px-[6px] cursor-pointer text-sm rounded-lg text-textgray50 items-center">
              <MdQrCode2 />
              <small className=" text-xs text-textgray50 font-bold cursor-pointer">
                K
              </small>
            </span>
          </ul>
          <ul className="flex gap-1 items-center">
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
    </div>
  );
}
