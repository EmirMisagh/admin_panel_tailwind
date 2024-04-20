import React, { useEffect, useState, useCallback } from "react";
import Card from "./playlist/Card";
import { VscClose } from "react-icons/vsc";
import { updatePlaylist, getPlaylistAll } from "../config/API";
import MyModal from "./element/Modal";

function PlaylistMenu({ select, close }) {
  const [playlist, setPlaylist] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalMessageTitle, setModalMessageTitle] = useState("");

  const getPlaylist = useCallback(async () => {
    const playlistData = await getPlaylistAll();
    setPlaylist(playlistData.data);
  }, []);

  useEffect(() => {
    getPlaylist();
  }, [getPlaylist]);

  const addToPlaylist = async (playlist) => {
    try {
      const body = playlist;
      body.songs = playlist.songs + 1;
      const song = playlist.songsarray.find((i) => i._id === select._id);
      console.log(song);
      if (song) return;
      if (!song) {
        body.songsarray.push(select);
      }
      const singer = playlist.singersarray.find(
        (i) => i.name === select.singer
      );
      console.log(singer);
      if (!singer) {
        body.singersarray.push({ name: select.singer[0], number: 1 });
      }
      body.duration = playlist.duration + select.duration;
      console.log(body);
      console.log(select);

      const create = await updatePlaylist(playlist._id, body);
      if (create.data) {
        setModalMessage(create.data.message);
        setIsModal(true);
        setModalMessageTitle("Payment successful");
      } else {
        setModalMessage(create.error.message);
        setIsModal(true);
        setModalMessageTitle("");
      }
      close();
    } catch (error) {
      setModalMessage(error);
      setIsModal(true);
      setModalMessageTitle("");
      close();
    }
    close();
    // const add = await addSongToPlaylist(id, select);
  };

  return (
    <div
      className={`fixed overflow-hidden transt border-l flex flex-col top-0 w-[30.0rem] z-[99999999] blur-none  border-l-1 border-color_border_600  ${
        select ? "right-0" : "right-[-30rem]"
      } h-full`}
    >
      <div className="px-5 py-5 flex items-center">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Find Your focus playlist  "
            className=" bg-transparent border border-color_border_300 playfair rounded-full py-[0.4rem] px-4 text-textSecond_50 w-full outline-none"
          />
        </div>
        <div className="px-2 cursor-pointer" onClick={close}>
          <VscClose />
        </div>
      </div>
      <div className="px-5 py-5 flex flex-col gap-5">
        {playlist.map((item, index) => (
          <div onClick={() => addToPlaylist(item)} key={index}>
            <Card playlist={item}  />
          </div>
        ))}
      </div>
      <MyModal
        isModal={isModal}
        ModalMessage={modalMessage}
        title={modalMessageTitle}
        closeModal={() => setIsModal(false)}
      />
    </div>
  );
}

export default PlaylistMenu;
