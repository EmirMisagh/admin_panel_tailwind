import React, { useCallback, useState, useEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/song/Navbar";
import InputComponent from "../../components/element/InputComponent";
import MusicPlayer from "../../components/MusicPlayer";
import Toggle from "../../components/element/Toggle";
import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { getPlaylistOne, getSongAll } from "../../config/API";
import * as Yup from "yup";
import Tags from "../../components/element/Tags";
import {
  DataGridSong,
  DataGridSongPlaylist,
} from "../../components/element/DataGrid";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  image: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function PlaylistEdit() {
  const [playlist, setPlaylist] = useState({});
  const [songs, setSongs] = useState([]);
  const [name, setName] = useState("");
  const [show, setShow] = useState(true);
  const [image, setImage] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [tags, setTags] = useState([]);

  const { id } = useParams();

  const getSong = useCallback(async () => {
    const playlistData = await getPlaylistOne(id);
    const songsData = await getSongAll();
    console.log(playlistData.data);
    setPlaylist(playlistData.data);
    setName(playlistData.data.name);
    setImageSrc(playlistData.data.image);
    setTags(playlistData.data.tags);
    setSongs(songsData.data);
  }, [id]);

  useEffect(() => {
    getSong();
  }, [getSong]);

  const uploadImage = (file) => {
    setImage(file[0]);
    const element = file[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      setImageSrc(e.target.result);
    };
    reader.readAsDataURL(element);
  };

  const submitHandle = async (values) => {
    console.log(values);
  };

  return (
    <div>
      <div>
        <Header
          title={"Details the playlist"}
          address1={"Dashbourd"}
          address2={"Playlist"}
          address3={"Edit"}
        />
      </div>
      <div>
        <Navbar back={"playlist"} live={`playlist/${id}`} />
      </div>
      <div>
        <Formik
          onSubmit={submitHandle}
          initialValues={playlist}
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
                    <div className="aspect-[4/4] w-full rounded-lg ">
                      <img
                        className="w-full h-full object-cover rounded-lg "
                        src={imageSrc}
                        alt=""
                      />
                    </div>
                    <div
                      className="w-full rounded-lg 
                    h-[100%] top-0 left-0 
                    absolute bg-bg_cover_100 text-white transition-all delay-100 flex justify-center items-center"
                    >
                      <label
                        htmlFor="image"
                        className=" bg-bg_coverblack_800 hover:bg-bg_coverblack_700 hover:scale-105 transition-all delay-75 cursor-pointer p-5 m-4 rounded-xl"
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
                    {playlist.name}
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
                  <div className=" rounded-2xl p-5 grid gap-8">
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
                    <div className="flex justify-between">
                      <small>{show ? <>Published</> : <>Private</>}</small>
                      <Toggle handle={() => setShow(!show)} value={show} />
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-center items-center">
                    <button className="p-4 rounded-lg bg-theme600 my-5 mx-2  text-theme200 font-bold">
                      + Add to Fovarite
                    </button>
                    <button className="p-4 rounded-lg bg-bg_800 my-5 mx-2 font-bold text-textSecond_500">
                      Add to Playlist
                    </button>
                  </div>
                  <div className="flex justify-around text-sm px-5">
                    <p>+ Compare</p>
                    <p>Favorite</p>
                    <p>Share</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-8  mt-8">
                <div className=" col-span-4">
                  <b className="text-lg text-textSecond_100">
                    Properties Songs
                  </b>
                  <p className="text-sm text-textSecond_500">
                    Add and remove song...
                  </p>
                </div>
                <div className=" col-span-4"></div>
                <div className=" col-span-8">
                  <DataGridSongPlaylist songs={playlist.songsarray} action={"add"} />
                </div>
                <div className=" col-span-8"> <DataGridSongPlaylist songs={songs} action={"min"} /></div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default PlaylistEdit;
