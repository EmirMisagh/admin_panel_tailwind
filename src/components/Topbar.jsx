import { CiSearch } from "react-icons/ci";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { MdNotifications, MdQrCode2 } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'

export default function Topbar() {
  const dispatch = useDispatch();
  const avatar = window.localStorage.getItem("avatar");
  return (
    <div className="w-full sticky top-0 left-0 text-textSecond_200 transt z-[99999]  ">
      <div className="relative items-center">
        <nav className="px-12 py-5 flex justify-between items-center">
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
          <ul className="flex gap-1 items-center">
            <li>
              <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                  Options
                  <ChevronDownIcon className="size-4 fill-white/60" />
                </MenuButton>

                <MenuItems
                  transition
                  anchor="bottom end"
                  className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                      <PencilIcon className="size-4 fill-white/30" />
                      Edit
                      <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                        ⌘E
                      </kbd>
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                      <Square2StackIcon className="size-4 fill-white/30" />
                      Duplicate
                      <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                        ⌘D
                      </kbd>
                    </button>
                  </MenuItem>
                  <div className="my-1 h-px bg-white/5" />
                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                      <ArchiveBoxXMarkIcon className="size-4 fill-white/30" />
                      Archive
                      <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                        ⌘A
                      </kbd>
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                      <TrashIcon className="size-4 fill-white/30" />
                      Delete
                      <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                        ⌘D
                      </kbd>
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
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
    </div>
  );
}
