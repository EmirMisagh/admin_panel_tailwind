import React, { useEffect, useState, useCallback } from "react";
import Lyrics from "../element/Lyrics";
import ButtonSubmit from "../element/ButtonSubmit";
import { getSongOne, updateSong } from "../../config/API";
import MyModal from "../element/Modal";
import { useParams } from "react-router-dom";

function LyricsEdit() {
  const [song, setSong] = useState({});
  const [lyricsState, setLyrics] = useState([]);
  const [isSubmitting, setSubmitting] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalMessageTitle, setModalMessageTitle] = useState("");

  const { id } = useParams();

  const getSong = useCallback(async () => {
    const songData = await getSongOne(id);
    setSong(songData.data);
    setLyrics(songData.data.lyric);
  }, [id]);

  useEffect(() => {
    getSong();
  }, [getSong]);

  const submitHandle = async () => {
    const body = song;
    body.lyric = lyricsState;
    const update = await updateSong(song._id, body);
    if (update.data) {
      setModalMessage(update.data.message);
      setIsModal(true);
      setSubmitting(false);
      setModalMessageTitle("Payment successful");
    } else {
      setModalMessage(update.error.message);
      setIsModal(true);
      setSubmitting(false);
      setModalMessageTitle("");
    }

    setSubmitting(false);
  };

  return (
    <div>
      <Lyrics
        title={"Lyrics"}
        name="lyric"
        onChange={setLyrics}
        onBlur={() => {}}
        value={lyricsState}
        errors={false}
        touche={false}
      />
      <div className="flex mt-10 justify-end items-end">
        <ButtonSubmit
          title={"Save Changes"}
          submit={() => submitHandle("values")}
          submiting={isSubmitting}
          styl="bg-bg_0 text-textSecond_900"
        />
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

export default LyricsEdit;
