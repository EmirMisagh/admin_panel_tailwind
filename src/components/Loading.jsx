import React from "react";

function Loading() {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center absolute left-0 top-0">
      <div className="loader"></div>
    </div>
  );
}

export default Loading;
