import React, { useEffect, useState, useCallback } from "react";
import { PiSortDescendingLight } from "react-icons/pi";
import { SlArrowUp } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylistAll, getSongAll, getUserAll } from "../config/API";
import Card from "../components/playlist/Card";
import MusicRow from "../components/MusicRow";

function Search() {
  const [playlist, setPlaylist] = useState([]);
  const [song, setSong] = useState([]);
  const [user, setUsers] = useState([]);

  const dispatch = useDispatch();
  const { searchMenu } = useSelector((state) => ({
    searchMenu: state.menuReducer.searchMenu,
  }));

  const getPlaylist = useCallback(async () => {
    const playlistData = await getPlaylistAll();
    setPlaylist(playlistData.data);
    const songData = await getSongAll();
    setSong(songData.data);
    const userData = await getUserAll();
    setUsers(userData.data);
  }, []);

  useEffect(() => {
    getPlaylist();
  }, [getPlaylist]);
  return (
    <div
      className={`fixed overflow-scroll notscroll search border-l transition-all delay-75 
    flex flex-col  left-0 ${
      searchMenu ? "top-0" : "top-[-100vh]"
    } w-[100vw] h-full z-[999999999999] blur-none  
    border-l-1 border-color_border_600 p-7`}
    >
      <div className="grid grid-cols-3 items-center">
        <div className=" flex justify-start pl-4 items-center">
          <img
            src="/img/Web-Logo.png"
            className=" w-24 h-16"
            alt=""
            style={{
              opacity: 1,
              transition: "opacity 1s, background 1s",
              background: "transparent",
            }}
          />
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
      <div className="mt-20">
        <p className=" text-textSecond_50">Result Post...</p>
      </div>
      <div className="grid grid-cols-10  mt-3">
        <div className=" col-span-6 grid grid-cols-2 gap-5 py-4">
          {playlist.map((item, index) => (
            <Card playlist={item} key={index} />
          ))}
        </div>
        <div className="col-span-4 flex flex-col gap-1 p-4 ">
          {song.map((item, index) => (
            <MusicRow music={item} key={index} />
          ))}
        </div>
        <div className=" col-span-6 grid grid-cols-2 gap-5 py-4"></div>
      </div>
    </div>
  );
}

export default Search;
