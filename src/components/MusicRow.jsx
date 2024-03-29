import React from "react";
import { CiMenuKebab } from "react-icons/ci";

function MusicRow({ music }) {
  return (
    <div className="flex hover:bg-background_box pr-4 hover:shadow-xl transition-all delay-100 justify-between items-center cursor-pointer border border-color_border_500 p-1 rounded-xl">
      <div className="flex items-center">
        <img
          className="w-16 h-16 object-cover rounded-lg"
          src={music.image}
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col items-start p-2 px-3">
        <b className=" text-textSecond_200">{music.name}</b>
        <div className="flex text-textSecond_300 items-center">
          {!music.lyric && (
            <div className=" rounded-lg flex justify-center items-center p-1 text-[0.6rem] mr-1 text-white bg-gray-500">
              LYRICE
            </div>
          )}
          {music.singer}
        </div>
      </div>
      <div className=" text-textSecond_50">
        <CiMenuKebab />
      </div>
    </div>
  );
}

export default MusicRow;
