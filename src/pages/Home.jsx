import React, { useState, useEffect, useCallback } from "react";
import Playlist from "../components/box/md/Playlist";
import { getPlaylistAll, getSongAll, getUserAll } from "../config/API";
import UserList from "../components/box/sm/UserList";

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
    <div className="">
      <div className="grid grid-cols-3  gap-5">
        <div className=" col-span-2  h-64">
          <Playlist playlist={playlist} />
        </div>
        <div className=" col-span-1  h-64">
          <Playlist playlist={song} />
        </div>
        <div className=" col-span-1  h-64">
          <UserList users={user} />
        </div>
      </div>
    </div>
  );
}

export default Home;
