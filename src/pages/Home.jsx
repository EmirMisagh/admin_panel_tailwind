import React, { useState, useEffect, useCallback } from "react";
import Playlist from "../components/box/md/Playlist";
import { getPlaylistAll, getSongAll, getUserAll } from "../config/API";
import UserList from "../components/box/sm/UserList";
import View from "../components/charts/View";
import BoxCol from "../components/box/sm/BoxCol";
import PieChartCom from "../components/charts/PieChart";

function Home() {
  const [playlist, setPlaylist] = useState([]);
  const [song, setSong] = useState([]);
  const [user, setUsers] = useState([]);

  const getPlaylist = useCallback(async () => {
    const playlistData = await getPlaylistAll();
    setPlaylist(playlistData.data);
    const songData = await getSongAll();
    setSong(songData.data);
    const userData = await getUserAll();
    setUsers(userData.data);
  }, []);

  useEffect(() => {
    getPlaylist();
  }, [getPlaylist]);
  return (
    <div className="mt-7">
      <div className="grid grid-cols-12 gap-5">
        <div className=" col-span-4">
          <BoxCol
            title={"Total Download App"}
            body={"+2.6"}
            number={18254}
            color={"var(--theme-bg-100)"}
          />
        </div>
        <div className=" col-span-4">
          <BoxCol
            title={"Total Website View"}
            body={"+0.2"}
            number={4876}
            color={"#FF5630"}
          />
        </div>
        <div className=" col-span-4">
          <BoxCol
            title={"Total Active Users"}
            body={"-0.1"}
            number={678}
            color={"#1BC8E0"}
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className=" col-span-12 h-96">
          <View />
        </div>
      
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className=" col-span-12 box">
          Pie
          <PieChartCom />
        </div>
      </div>
    </div>
  );
}

export default Home;
