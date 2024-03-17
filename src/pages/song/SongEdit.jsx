import React, { useEffect, useCallback, useState, useRef } from "react";
import Navbar from "../../components/song/Navbar";
import Header from "../../components/Header";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { getSongOne } from "../../config/API";
import { useParams } from "react-router-dom";
import MusicPlayer from "../../components/MusicPlayer";
import InputComponent from "../../components/element/InputComponent";
import SongImage from "../../components/song/SongImage";
import SongMusic from "../../components/song/SongMusic";
import Toggle from "../../components/element/Toggle";
import { FaClock } from "react-icons/fa6";

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
  const [show, setShow] = useState(true);
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
  const [singer, setSinger] = useState("");
  const [singerIndex, setSingerIndex] = useState([1]);
  const [singers, setSingers] = useState([]);
  const [tags, setTags] = useState([]);
  const audioRef = useRef();

  const { id } = useParams();

  const form = {
    name: song.name,
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

  const submitHandle = async (values) => {};

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setduration(audioRef.current.duration);
    }
  };

  const getSong = useCallback(async () => {
    const songData = await getSongOne(id);
    setSong(songData.data);
    console.log(songData.data);
  }, [id]);

  useEffect(() => {
    getSong();
  }, [getSong]);

  return (
    <div>
      <div>
        <Header
          title={"Details the user"}
          address1={"Dashbourd"}
          address2={"User"}
          address3={"New Edit"}
        />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <Formik
          onSubmit={submitHandle}
          initialValues={form}
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
                      image={song.image}
                      music={song.music}
                      audioRef={audioRef}
                      onLoadedMetadata={onLoadedMetadata}
                    />
                    <div
                      className="w-full rounded-lg 
                    h-full top-0 left-0 
                    absolute hover:bg-bg_cover_200 text-white transition-all delay-100 flex justify-center items-center"
                    >
                      <p className=" bg-bg_coverblack_500 hover:bg-bg_coverblack_700 hover:scale-105 transition-all delay-75 cursor-pointer p-5 m-4 rounded-xl">
                        Change Image
                      </p>
                      <p className=" bg-bg_coverblack_500 hover:bg-bg_coverblack_700 hover:scale-105 transition-all delay-75 cursor-pointer p-5 m-4 rounded-xl">
                        Change Music
                      </p>
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
                  <div className=" rounded-2xl p-5 grid gap-8">
                    <div>
                      <InputComponent
                        title={song.name}
                        typeInput={"text"}
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        errors={errors.name}
                        touche={touched.name}
                      />
                    </div>
                    <div>
                      <InputComponent
                        title={"Singer"}
                        typeInput={"text"}
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        errors={errors.name}
                        touche={touched.name}
                      />
                    </div>
                    <div className="flex justify-between">
                      <small>{show ? <>Published</> : <>Private</>}</small>
                      <Toggle handle={() => setShow(!show)} value={show} />
                    </div>
                    <div className="flex justify-between">
                      <small>{remember ? <>Remember</> : <>Normal</>}</small>
                      <Toggle
                        handle={() => setRemember(!remember)}
                        value={remember}
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-center items-center">
                    <button className="p-4 rounded-lg bg-bg_800 my-5 mx-2 font-bold text-textSecond_500">
                      Add to Playlist
                    </button>
                    <button className="p-4 rounded-lg bg-bg_800 my-5 mx-2 font-bold text-textSecond_500">
                      Add to Playlist
                    </button>
                  </div>
                  <div className="flex justify-around text-sm px-5">
                    <p>Compare</p>
                    <p>Favorite</p>
                    <p>Share</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-around mt-20">
                <div className="flex flex-col items-center gap-1 px-8">
                  <i className=" text-3xl text-orange-500">
                    <FaClock />
                  </i>
                  <b className="mt-8">10 Day Replacement</b>
                  <p className=" text-center text-textSecond_500">
                    Marshmallow biscuit donut dragée fruitcake wafer.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 px-8">
                  <i className=" text-3xl text-orange-500">
                    <FaClock />
                  </i>
                  <b className="mt-8">10 Day Replacement</b>
                  <p className=" text-center text-textSecond_500">
                    Marshmallow biscuit donut dragée fruitcake wafer.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 px-8">
                  <i className=" text-3xl text-orange-500">
                    <FaClock />
                  </i>
                  <b className="mt-8">10 Day Replacement</b>
                  <p className=" text-center text-textSecond_500">
                    Marshmallow biscuit donut dragée fruitcake wafer.
                  </p>
                </div>
              </div>
              <div className="box"></div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SongEdit;
