import React, { useCallback, useState, useEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/song/Navbar";
import InputComponent from "../../components/element/InputComponent";
import Toggle from "../../components/element/Toggle";
import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { getPlaylistOne, getSongAll, updatePlaylist, uploadImageApi } from "../../config/API";
import * as Yup from "yup";
import Tags from "../../components/element/Tags";
import { DataGridSongPlaylist } from "../../components/element/DataGrid";
import ButtonSubmit from "../../components/element/ButtonSubmit";
import MyModal from "../../components/element/Modal";

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
  const [isSubmitting, setSubmitting] = useState(false);
  const [songsPlaylist, setSongsPlaylist] = useState([]);
  const [name, setName] = useState("");
  const [show, setShow] = useState(true);
  const [image, setImage] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [tags, setTags] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalMessageTitle, setModalMessageTitle] = useState("");

  const { id } = useParams();

  const getSong = useCallback(async () => {
    const playlistData = await getPlaylistOne(id);
    const songsData = await getSongAll();
    console.log(playlistData.data);
    setPlaylist(playlistData.data);
    setName(playlistData.data.name);
    setImageSrc(playlistData.data.image);
    setTags(playlistData.data.tags);
    setSongsPlaylist(playlistData.data.songsarray);
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

  const removeSong = (item) => {
    console.log(item);
    const body = playlist;
    const singer = playlist.singersarray.find((i) => i.name === item.singer[0]);
    body.songsarray = songsPlaylist.filter((i) => {
      return i._id !== item._id;
    });
    setSongsPlaylist(
      songsPlaylist.filter((i) => {
        return i._id !== item._id;
      })
    );
    console.log(singer);
    body.songs = playlist.songs - 1;

    // Singer Handle ---------------
    if (singer.number === 1)
      body.singersarray = playlist.singersarray.filter((i) => {
        return i.name !== singer.name;
      });
    console.log(body);
    setPlaylist(body);
  };

  const submitHandle = async (values) => {
    setSubmitting(true);
    const body = playlist;

    // UPLOAD IMAGE ---------------
    const formData = new FormData();
    formData.append("file", image);
    if (image) {
      const imageUpload = await uploadImageApi("playlistimage", formData);
      if (!imageUpload.data.data) {
        setSubmitting(false);
        setModalMessage("Image not uploaded");
        setModalMessageTitle("");
        return;
      }
      setImage(imageUpload.data.data);
      body.image = imageUpload.data.data;
    }
    // ---------------------------

    body.name = name;
    body.tags = tags;
    console.log(body);
    console.log(image);
    setSubmitting(false);
    // return;
    try {
      const update = await updatePlaylist(playlist._id, body);
      if (update.data) {
        setModalMessage(update.data.message);
        setIsModal(true);
        setModalMessageTitle("Payment successful");
        setSubmitting(false);
      } else {
        setModalMessage(update.error.message);
        setIsModal(true);
        setModalMessageTitle("");
        setSubmitting(false);
      }
    } catch (error) {
      setModalMessage(error);
      setIsModal(true);
      setModalMessageTitle("");
      setSubmitting(false);
    }
    setSubmitting(false);
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
                    <button
                      type="button"
                      className="p-4 rounded-lg bg-theme600 my-5 mx-2  text-theme200 font-bold"
                    >
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
                <div className=" col-span-8 box mt-8 py-3 rounded-2xl">
                  <DataGridSongPlaylist
                    songs={songsPlaylist}
                    action={"add"}
                    removeSong={removeSong}
                  />
                </div>
                <div className=" col-span-8 flex justify-end mt-8 px-4">
                  <ButtonSubmit
                    title={"Save Changes"}
                    submit={() => submitHandle(values)}
                    submiting={isSubmitting}
                    styl="bg-bg_0 text-textSecond_900"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
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

export default PlaylistEdit;
