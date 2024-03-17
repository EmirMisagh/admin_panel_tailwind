import React from "react";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";
export default function SongMusic({ item }) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <img className="w-full h-24 object-cover " src={item.image} alt="" />
      <div className="w-full h-full top-0 left-0 absolute bg-bg_coverblack_500 flex flex-col justify-center items-center">
        <p className="text-textSecond_900">Change Music</p>
        <p className="text-textSecond_900 flex gap-4 mt-3">
          <i>
            <FaCirclePlay />
          </i>
          <i>
            <FaCirclePlay />
          </i>
          <i>
            <FaCirclePlay />
          </i>
        </p>
      </div>
    </div>
  );
}
