import React from "react";

function FileBox({ icon, title, color }) {
  return (
    <div className="w-full h-full box rounded-lg p-5 gap-7 flex flex-col text-textSecond_50">
      <div className={` text-5xl ${color}`}>{icon}</div>
      <div className="flex flex-col w-full gap-3 ">
        <h2 className="font-bold">{title}</h2>
        <div className="w-full relative h-[0.35rem] overflow-hidden rounded-3xl bg-bg_700">
          <div className=" absolute h-full left-0 top-0 bg-bg_0 w-[25%]"></div>
        </div>
        <div className="flex justify-end text-sm">
          <small className="text-textSecond_200">
            4.47 Gb /<b>22.35 Gb</b>
          </small>
        </div>
      </div>
    </div>
  );
}

export default FileBox;
