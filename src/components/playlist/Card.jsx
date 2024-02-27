import React from "react";

function Card() {
  return (
    <div className="flex box bg-background_box rounded-lg p-2 hover:scale-105 cursor-pointer transition-all delay-75">
      <div className="flex flex-col justify-around px-4">
        <div className="flex justify-between items-center">
          <div className="flex bg-pink-300 rounded-xl text-xs p-2 px-3">
            Published
          </div>
          <small className="text-xs text-textSecond_400">25 Feb 2024</small>
        </div>
        <div>
          <h2 className="text-textSecond_50">90s</h2>
          <p className="text-xs text-textSecond_300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
          </p>
        </div>
        <div className="flex justify-around text-sm text-textSecond_400">
          <small>35k share</small>
          <small>35k view</small>
          <small>35k share</small>
        </div>
      </div>
      <div>
        <img
          className="w-full h-full rounded-md object-cover"
          src="/img/colorful-wallpaper.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
