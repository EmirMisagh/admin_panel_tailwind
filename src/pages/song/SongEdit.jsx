import React, { useEffect, useCallback, useState, useRef } from "react";
import Navbar from "../../components/song/Navbar";
import Header from "../../components/Header";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { getAlbumAll, getSingerAll, getSongOne } from "../../config/API";
import { Route, Routes, useParams } from "react-router-dom";
import MusicPlayer from "../../components/MusicPlayer";
import InputComponent from "../../components/element/InputComponent";
import SongImage from "../../components/song/SongImage";
import SongMusic from "../../components/song/SongMusic";
import Toggle from "../../components/element/Toggle";
import { FaClock, FaCircleInfo, FaCircleCheck } from "react-icons/fa6";
import ButtonSubmit from "../../components/element/ButtonSubmit";
import MyCombobox from "../../components/element/Combobox";
import Tags from "../../components/element/Tags";
import PlaylistMenu from "../../components/PlaylistMenu";
import Topbar from "../../components/song/Topbar";
import Lyrics from "../../components/element/Lyrics";
import LyricsEdit from "../../components/song/LyricsEdit";
import Comment from "../../components/song/Comment";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  singer: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  image: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  music: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function SongEdit() {
  const [song, setSong] = useState({});
  const [name, setName] = useState("");
  const [show, setShow] = useState(true);
  const [lyrics, setLyrics] = useState([]);
  const [isSubmitting, setSubmitting] = useState(false);
  const [peoplework, setPeoplework] = useState(false);
  const [remember, setRemember] = useState(false);
  const [image, setImage] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [music, setMusic] = useState("");
  const [musicSrc, setMusicSrc] = useState("");
  const [duration, setduration] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalMessageTitle, setModalMessageTitle] = useState("");
  const [singer, setSinger] = useState([]);
  const [singers, setSingers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [tags, setTags] = useState([]);
  const [select, setSelect] = useState(null);
  const audioRef = useRef();

  const { id } = useParams();

  const form = {
    name: name,
    singer,
    category: "",
    image,
    music,
    lyric: "",
    duration,
    album: "",
    show,
    author: "",
    tags: [],
  };

  const submitHandle = async (values) => {
    console.log(singer);
    console.log(form);
  };

  const uploadImage = (file) => {
    setImage(file[0]);
    const element = file[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      setImageSrc(e.target.result);
    };
    reader.readAsDataURL(element);
  };

  const uploadMusic = (file) => {
    setMusic(file[0]);
    const element = file[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      setMusicSrc(e.target.result);
    };
    reader.readAsDataURL(element);
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setduration(audioRef.current.duration);
      console.log(audioRef.current.duration);
    }
  };

  const SingerHandle = (value, index) => {
    const array = singer;
    array[index] = value;
    console.log(array);
    console.log(value);
    console.log(index);
    setSinger(array);
  };

  const getSong = useCallback(async () => {
    const songData = await getSongOne(id);
    setSong(songData.data);
    setName(songData.data.name);
    setSinger(songData.data.singer);
    setImageSrc(songData.data.image);
    setMusicSrc(songData.data.music);
    setTags(songData.data.tags);
    setLyrics(songData.data.lyric);
    const singersData = await getSingerAll();
    const albumsData = await getAlbumAll();
    setSingers(singersData.data);
    setAlbums(albumsData.data);
    console.log(songData.data);
  }, [id]);

  useEffect(() => {
    getSong();
  }, [getSong]);

  return (
    <div>
      <div>
        <Header
          title={"Details the song"}
          address1={"Dashbourd"}
          address2={"Song"}
          address3={"Edit"}
        />
      </div>
      <div>
        <Navbar back={"song"} live={`music/${id}`} />
      </div>
      <div>
        <Formik
          onSubmit={submitHandle}
          initialValues={song}
          validationSchema={SignupSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            /* and other goodies */
          }) => (
            <Form>
              <div className="grid grid-cols-7  mt-8">
                <div className=" col-span-4">
                  <div className="relative">
                    <MusicPlayer
                      image={imageSrc}
                      music={musicSrc}
                      audioRef={audioRef}
                      onLoadedMetadata={onLoadedMetadata}
                    />
                    <div
                      className="w-full rounded-lg 
                    h-[85%] top-0 left-0 
                    absolute  text-white transition-all delay-100 flex justify-center items-center"
                    >
                      <label
                        htmlFor="image"
                        className=" bg-bg_coverblack_500 hover:bg-bg_coverblack_700 hover:scale-105 transition-all delay-75 cursor-pointer p-5 m-4 rounded-xl"
                      >
                        Change Image
                      </label>
                      <input
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                        className=""
                        onChange={(e) => uploadImage(e.target.files)}
                        style={{ display: "none" }}
                        name="image"
                        id="image"
                      />
                      <label
                        htmlFor="music"
                        className=" bg-bg_coverblack_500 hover:bg-bg_coverblack_700 hover:scale-105 transition-all delay-75 cursor-pointer p-5 m-4 rounded-xl"
                      >
                        Change Music
                      </label>
                      <input
                        type="file"
                        accept="audio/mp3, audio/mp3, audio/mp3"
                        className=""
                        onChange={(e) => uploadMusic(e.target.files)}
                        style={{ display: "none" }}
                        name="music"
                        id="music"
                      />
                    </div>
                  </div>
                </div>
                <div className=" col-span-3 pl-10 pt-5">
                  <small className=" bg-blue-200 font-bold p-2 rounded-lg text-xs text-blue-600">
                    NEW
                  </small>
                  <br />
                  <p className="  text-green-500 font-bold text-sm mt-5">
                    IN MARCH
                  </p>
                  <p className="  text-textSecond_50 font-bold text-lg mt-4">
                    {song.name}
                  </p>
                  <p className="  text-textSecond_500 text-xs font-bold  mt-4">
                    (9.12k reviews)
                  </p>
                  <p className="  text-textSecond_500 text-sm font-bold  my-6">
                    Featuring the original ripple design inspired by Japanese
                    bullet trains, the Nike Air Max 97 lets you push your style
                    full-speed ahead.
                  </p>
                  <hr />
                  <div className=" rounded-2xl p-5 grid gap-8 mt-5">
                    <div>
                      <InputComponent
                        title={"Name"}
                        typeInput={"text"}
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        onBlur={handleBlur}
                        value={name}
                        errors={""}
                        touche={""}
                      />
                    </div>
                    {singer.map((item, index) => (
                      <div key={index}>
                        <MyCombobox
                          arr={[{ name: item }, ...singers]}
                          label={"Singer"}
                          handle={(e) => SingerHandle(e, index)}
                        />
                      </div>
                    ))}
                    <div className="flex justify-end pt-0 px-3">
                      <small
                        onClick={() => setSinger([...singer, singers[0].name])}
                        className=" text-xs text-blue-600 font-bold cursor-pointer"
                      >
                        + Add a singer
                      </small>
                    </div>
                    <div className="flex justify-between text-textSecond_100">
                      <small>{show ? <>Published</> : <>Private</>}</small>
                      <Toggle handle={() => setShow(!show)} value={show} />
                    </div>
                    <div className="flex justify-between text-textSecond_100">
                      <small>{remember ? <>Remember</> : <>Normal</>}</small>
                      <Toggle
                        handle={() => setRemember(!remember)}
                        value={remember}
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-center items-center ">
                    <button
                      className="p-4 rounded-lg bg-theme600 my-5 mx-2  text-theme200 font-bold"
                      onClick={() => setSelect(song)}
                    >
                      + Add to Playlist
                    </button>
                    <button className="p-4 rounded-lg bg-green-200  my-5 mx-2 font-bold text-green-700">
                      Add to Playlist
                    </button>
                  </div>
                  <div className="flex justify-around text-sm px-5 text-textSecond_100">
                    <p>+ Compare</p>
                    <p>Favorite</p>
                    <p>Share</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-7  mt-8">
                <div className=" col-span-4">
                  <b className="text-lg text-textSecond_100">Properties</b>
                  <p className="text-sm text-textSecond_500">
                    Title, short description, image...
                  </p>
                </div>
                <div className=" col-span-3">
                  <div className=" rounded-2xl p-5 grid gap-8">
                    <div>
                      <MyCombobox
                        arr={[]}
                        label={"Category"}
                        handle={() => {}}
                      />
                    </div>
                    <div>
                      <MyCombobox
                        arr={[{ name: song.album }, ...albums]}
                        label={"Album"}
                        handle={() => {}}
                      />
                    </div>
                    <div>
                      <Tags
                        title={"Tags"}
                        name="tags"
                        onChange={setTags}
                        onBlur={() => {}}
                        value={tags}
                        errors={false}
                        touche={false}
                      />
                    </div>
                    <div className="flex justify-end mt-8 px-4">
                      <ButtonSubmit
                        title={"Save Changes"}
                        submit={() => submitHandle(values)}
                        submiting={isSubmitting}
                        styl="bg-bg_0 text-textSecond_900"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-around mt-20">
                <div className="flex flex-col items-center gap-1 px-8">
                  <i className=" text-3xl text-orange-500">
                    <FaCircleInfo />
                  </i>
                  <b className="mt-8 text-textSecond_100">10 Day Replacement</b>
                  <p className=" text-center text-textSecond_500">
                    Marshmallow biscuit donut dragée fruitcake wafer.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 px-8">
                  <i className=" text-3xl text-orange-500">
                    <FaClock />
                  </i>
                  <b className="mt-8 text-textSecond_100">10 Day Replacement</b>
                  <p className=" text-center text-textSecond_500">
                    Marshmallow biscuit donut dragée fruitcake wafer.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 px-8">
                  <i className=" text-3xl text-orange-500">
                    <FaCircleCheck />
                  </i>
                  <b className="mt-8 text-textSecond_100">10 Day Replacement</b>
                  <p className=" text-center text-textSecond_500">
                    Marshmallow biscuit donut dragée fruitcake wafer.
                  </p>
                </div>
              </div>
              <div className="box "></div>
            </Form>
          )}
        </Formik>
        <div className="box px-5 pb-4 rounded-2xl">
          <div>
            <Topbar />
          </div>
          <div className="py-2">
            <Routes>
              <Route
                path="/"
                element={<LyricsEdit song={song} lyric={lyrics} />}
              />
              <Route path="/comment" element={<Comment />} />
            </Routes>
          </div>
        </div>
      </div>
      <PlaylistMenu select={select} close={() => setSelect(null)} />
    </div>
  );
}

export default SongEdit;
