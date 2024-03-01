import React from "react";

function Loading() {
  const darkMode = window.localStorage.getItem("darkmode");
  return (
    <div
      className="w-[100%] h-[100vh] flex justify-center items-center absolute left-0 top-0"
      style={{ background: darkMode === "light" ? "rgb(253, 253, 253)": "rgb(18, 22, 29)" }}
    >
      <div className="loader"></div>
    </div>
  );
}

export default Loading;
