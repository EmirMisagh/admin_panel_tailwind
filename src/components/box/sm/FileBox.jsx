import React from "react";


function FileBox({icon , title, color}) {
  return (
    <div className="w-full h-full box rounded-lg p-5 gap-7 flex flex-col">
      <div className={` text-5xl ${color}`}>
        {icon}
      </div>
      <div className="flex flex-col w-full gap-3 ">
        <h2>{title}</h2>
        <div className="w-full relative h-[0.35rem] overflow-hidden rounded-3xl bg-bg_secend_200">
          <div className=" absolute h-full left-0 top-0 bg-black w-[25%]"></div>
        </div>
        <div className="flex justify-end text-sm">
          <small>
            4.47 Gb /<b>22.35 Gb</b>
          </small>
        </div>
      </div>
    </div>
  );
}

export default FileBox;
