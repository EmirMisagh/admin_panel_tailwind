import React from "react";

function SongImage({ item }) {
  return (
    <div className="relative overflow-hidden rounded-lg">
        
      <img className="w-full h-24 object-cover " src={item.image} alt="" />
      <div className="w-full h-full top-0 left-0 absolute bg-bg_coverblack_500 flex justify-center items-center">
        <p className="text-textSecond_900">Change Image</p>
      </div>
    </div>
  );
}

export default SongImage;
