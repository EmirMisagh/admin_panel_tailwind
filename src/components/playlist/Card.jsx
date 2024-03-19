import React from "react";

function Card({ playlist }) {
  return (
    <div className="flex box bg-background_box rounded-lg p-2 hover:scale-105 cursor-pointer transition-all delay-75">
      <div className="flex flex-col justify-around px-4 w-[28rem]">
        <div className="flex justify-between items-center">
          <div
            className={`flex ${
              playlist.show ? "bg-theme600" : "bg-yellow-300"
            } rounded-xl text-xs p-2 px-3`}
          >
            {playlist.show ? "Published" : "Private"}
          </div>
          <small className="text-xs text-textSecond_400">25 Feb 2024</small>
        </div>
        <div>
          <h2 className="text-textSecond_50">{playlist.name}</h2>
          <p className="text-xs text-textSecond_300">
            {playlist.singer ? "Album" : "Playlist"} by{" "}
            {playlist.singer ? playlist.singer : "KordSong"} - {playlist.songs}{" "}
            songs 6 min 50 sec
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
          className="w-64 h-40 rounded-md object-cover"
          src={playlist.image}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
