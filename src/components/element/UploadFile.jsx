import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageUpload from "./ImageUpload";

function UploadFile({ handleUpload, acceptFile }) {
  const [image, setImage] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "audio/*": [],
    },
    onDrop: (acceptedFiles) => {
      setImage(acceptedFiles);
      handleUpload(acceptedFiles);
    },
  });

  return (
    <div
      className="w-full 
    p-0 px-12 pb-12 gap-0 flex flex-col overflow-hidden 
    items-center relative rounded-lg  bg-bg_secend_400"
    >
      <div className="flex justify-start items-center ">
        <ImageUpload />
      </div>
      <div className="flex justify-start items-center flex-col">
        <b className=" text-textSecond_200 text-sm">Drop or Select file</b>
        <p className=" text-textSecond_500 text-sm mt-3">
          Drop files here or click <b className=" text-theme200">browse</b>{" "}
          thorough your machine
        </p>
        <ul>
          {image.map((file) => (
            <li className="truncate w-72" key={file.name}>
              {file.name}
            </li>
          ))}
        </ul>
      </div>
      <div
        {...getRootProps()}
        className=" absolute cursor-pointer hover:bg-bg_cover_100 w-full h-full top-0 left-0"
      ></div>
      <input
        type="file"
        accept="image/png, image/gif, image/jpeg"
        {...getInputProps()}
        className=""
        style={{ display: "none" }}
        name="image"
        id="image"
      />
    </div>
  );
}

export default UploadFile;
