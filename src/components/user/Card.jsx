import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Card({ singer }) {
  return (
    <div className="w-full rounded-2xl flex flex-col overflow-hidden box cursor-pointer">
      <div className="flex-1 relative">
        <img
          className="h-36 w-full imageCover object-cover "
          src="/img/abstract-multi.jpg"
          alt=""
        />
        <div className="w-ful h-full absolute inset-0 imageCover"></div>
      </div>
      <div className="flex-1 flex flex-col gap-3 items-center justify-end">
        <div className=" relative flex justify-center h-12">
          <div className="imgProfile absolute top-[-45px] bg-background_box z-0 p-1 w-[5.4rem] h-[5.4rem] rounded-full imageCard">
            <img
              src={singer.avatar}
              alt=""
              className="z-40 w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-center font-bold">
          <b className="text-textgray100">{singer.name}</b>
          <p className="mt-1 text-textgray300 text-sm">{singer.family}</p>
          <span className="flex gap-5 py-8 text-lg">
            <i className=" text-blue-600">
              <FaFacebookF />
            </i>
            <i className=" text-red-600">
              <RiInstagramFill />
            </i>
            <i className=" text-blue-600">
              <FaLinkedinIn />
            </i>
            <i className=" text-blue-600">
              <FaTwitter />
            </i>
          </span>
        </div>
      </div>
      <div className="flex-1 flex justify-around border-t border-gray600">
        <div className="flex flex-col justify-center items-center py-4">
          <p className="text-xs text-textgray200">Follower</p>
          <b className="mt-1 text-md text-textgray100">9.91k</b>
        </div>
        <div className="flex flex-col justify-center items-center py-4">
          <p className="text-xs text-textgray200">Follower</p>
          <b className="mt-1 text-md text-textgray100">9.91k</b>
        </div>
        <div className="flex flex-col justify-center items-center py-4">
          <p className="text-xs text-textgray200">View</p>
          <b className="mt-1 text-md text-textgray100">{singer.viewsongs}k</b>
        </div>
      </div>
    </div>
  );
}

export default Card;
