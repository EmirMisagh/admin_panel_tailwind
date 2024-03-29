import React, { useState } from "react";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";
import Loading from "./Loading";

function MusicPlayer({ image, music, audioRef, onLoadedMetadata }) {
  const [PlayerFill, setPlayerFill] = useState(0);
  const [Play, setPlay] = useState(<FaCirclePlay />);
  const [musicTime, setMusicTime] = useState("0:00");

  const audio = document.getElementById("audio");
  const playPause = () => {
    if (audio.paused) {
      audio.play();
      setPlay(<FaCirclePause />);
    } else {
      audio.pause();
      setPlay(<FaCirclePlay />);
    }
  };

  const updateTime = (e) => {
    const Audio = e.target;
    if (Audio.currentTime) {
      let f = (Audio.currentTime * 100) / Audio.duration;
      let Time = change_time(Audio.currentTime);
      setPlayerFill(f);
      setMusicTime(Time);
    }
  };

  const change_time = (time) => {
    var min = parseInt(time / 60);
    var second = parseInt(time - min * 60);

    if (second > 9) return min.toString() + ":" + second.toString();
    else return min.toString() + ":0" + second.toString();
  };

  return (
    <div className="w-full box p-10 gap-10 flex flex-col overflow-hidden items-center relative rounded-lg aspect-[4/4] bg-bg_secend_400">
      <div className="w-full h-full absolute top-0 left-0">
        {image ? (
          <img className="w-full h-full object-cover" src={image} alt="" />
        ) : (
          <Loading />
        )}
      </div>
      {music && (
        <div className="w-full h-full flex flex-col justify-end absolute text-white top-0 left-0 bg-bg_coverblack_200">
          <div className="flex items-center w-full gap-3 p-8">
            <i className="text-3xl cursor-pointer" onClick={playPause}>
              {Play}
            </i>
            <input
              className="w-full"
              value={isNaN(PlayerFill) ? 0 : PlayerFill}
              readOnly
              step={0.5}
              type="range"
              name=""
              id=""
            />
            <p>{musicTime}</p>
          </div>
          <audio
            ref={audioRef}
            onTimeUpdate={(e) => updateTime(e)}
            onLoadedMetadata={onLoadedMetadata}
            src={music}
            id="audio"
          ></audio>
        </div>
      )}
    </div>
  );
}

export default MusicPlayer;
