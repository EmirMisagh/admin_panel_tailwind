import React from "react";
import Toggle from "../element/Toggle";
import { BiSolidCameraPlus } from "react-icons/bi";

function ProfileShow({
  handleUpload,
  imageSrc,
  error,
  emailVerified,
  handleToggle,
  onChange,
  onBlur,
  touche
}) {
  return (
    <div className="box rounded-2xl pt-0 pb-3">
      <div className="p-12">
        <div className="p-8 pb-4">
          <div
            className={`p-2 rounded-full border ${
              !error && touche
                ? "border-red-600 border-dashed"
                : "border-color_border_500 border-solid"
            } `}
          >
            {imageSrc ? (
              <div className=" relative">
                <img
                  src={`${imageSrc}`}
                  alt=""
                  className="rounded-full object-cover w-28 h-28 bg-bg_800 flex justify-center items-center hover:bg-bg_600 transition delay-75 cursor-pointer"
                />
                <label
                  htmlFor="avatar"
                  className="rounded-full absolute top-0 w-28 h-28 flex justify-center items-center opacity-0 hover:bg-gray-700 hover:opacity-80  transition delay-100 cursor-pointer"
                >
                  <span
                    className={`flex flex-col items-center text-[1.9rem] gap-1 ${
                      !error && touche ? "text-red-600" : "text-white"
                    }`}
                  >
                    <BiSolidCameraPlus />
                    <small className="text-[0.7rem] ">Upload photo</small>
                  </span>
                  <input
                    type="file"
                    id="avatar"
                    style={{ display: "none" }}
                    onChange={handleUpload}
                  />
                </label>
              </div>
            ) : (
              <label
                htmlFor="avatar"
                className="rounded-full w-28 h-28 bg-bg_900 flex justify-center items-center hover:bg-bg_800 transition delay-75 cursor-pointer"
              >
                <span
                  className={`flex flex-col items-center text-[1.9rem] gap-1 ${
                    !error && touche ? "text-red-600" : "text-textSecond_300"
                  }`}
                >
                  <BiSolidCameraPlus />
                  <small className="text-[0.7rem] ">Upload photo</small>
                </span>
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  style={{ display: "none" }}
                  onChange={handleUpload}
                  onBlur={onBlur}
                />
              </label>
            )}
          </div>
        </div>
        <div className=" text-center w-44 flex flex-col items-center justify-center">
          <small className="text-xs text-textSecond_300 text-center flex justify-center">
            Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3 Mb
          </small>
          {!error && touche && (
            <small className="text-xs text-red-600 text-center">
              Image is invalid
            </small>
          )}
        </div>
      </div>
      <div className="p-6 pt-2 flex items-center justify-between">
        <div className=" overflow-hidden w-48">
          <b className=" text-textSecond_50">Email Verified</b>
          <p className="text-sm text-textSecond_200">
            Disabling this will automatically send the user a verification email
          </p>
        </div>
        <div>
          <Toggle handle={handleToggle} value={emailVerified} />
        </div>
      </div>
    </div>
  );
}

export default ProfileShow;
