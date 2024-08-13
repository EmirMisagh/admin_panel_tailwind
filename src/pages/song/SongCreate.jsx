import React, { useState, useRef, useCallback, useEffect } from "react";
import Header from "../../components/Header";
import InputComponent from "../../components/element/InputComponent";
import MyCombobox from "../../components/element/Combobox";
import ButtonSubmit from "../../components/element/ButtonSubmit";
import UploadFile from "../../components/element/UploadFile";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  createSong,
  uploadImageApi,
  getSingerAll,
  getAlbumAll,
} from "../../config/API";
import MyModal from "../../components/element/Modal";
import Toggle from "../../components/element/Toggle";
import Tags from "../../components/element/Tags";
import Lyrics from "../../components/element/Lyrics";
import useMode from "../../config/Language";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
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

function SongCreate() {
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
  const [album, setAlbum] = useState("");
  const [lyrics, setLyrics] = useState([]);
  const [singerIndex, setSingerIndex] = useState([1]);
  const [singers, setSingers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [tags, setTags] = useState([]);
  const audioRef = useRef();

  const Language = useMode();

  const getSingers = useCallback(async () => {
    const singersData = await getSingerAll();
    const albumsData = await getAlbumAll();
    setSingers(singersData.data);
    setAlbums(albumsData.data);
  }, []);

  useEffect(() => {
    getSingers();
  }, [getSingers]);

  const form = {
    name: "",
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
    // ERROR CHEKING -----------------
    setSubmitting(true);
    if ((!values.name, !values.singer, !values.image, !values.music)) {
      console.log("error");
      // setSubmitting(false);
      // return;
    }

    // UPLOAD IMAGE -----------------
    const formData = new FormData();
    formData.append("file", image);

    const imageUpload = await uploadImageApi("songimage", formData);
    if (!imageUpload.data.data) {
      setSubmitting(false);
      setModalMessage("Image not uploaded");
      setModalMessageTitle("");
      return;
    }
    setImage(imageUpload.data.data);
    values.image = imageUpload.data.data;

    // UPLOAD MUSIC -----------------
    const formDataMusic = new FormData();
    formDataMusic.append("file", music);

    const musicUpload = await uploadImageApi("songmusic", formDataMusic);
    if (!musicUpload.data.data) {
      setSubmitting(false);
      setModalMessage("Image not uploaded");
      setModalMessageTitle("");
      return;
    }
    setMusic(musicUpload.data.data);
    values.music = musicUpload.data.data;

    // SET VARIBLE -----------------

    values.duration = duration;
    values.show = show;
    values.singer = singer;
    values.tags = tags;
    values.lyric = lyrics;
    values.album = album;

    console.log(lyrics);
    console.log(values);

    const create = await createSong(values);
    if (create.data) {
      setModalMessage(create.data.message);
      setIsModal(true);
      setSubmitting(false);
      setModalMessageTitle("Payment successful");
    } else {
      setModalMessage(create.error.message);
      setIsModal(true);
      setSubmitting(false);
      setModalMessageTitle("");
    }

    setSubmitting(false);
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

  const SingerHandle = (value, index) => {
    const array = singer;
    array[index] = value;
    console.log(array);
    console.log(value);
    console.log(index);
    setSinger(array);
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setduration(audioRef.current.duration);
    }
  };

  return (
    <div>
      <div>
        <Header
          title={"Create a new song"}
          address1={"Dashbourd"}
          address2={Language.song.song}
          address3={"New Song"}
        />
      </div>
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
            <div className="grid grid-cols-3  mt-16">
              <div className=" col-span-1">
                <b className="text-lg text-textSecond_100">Details</b>
                <p className="text-sm text-textSecond_500">
                  Title, short description, image...
                </p>
              </div>

              <div className="col-span-2  box rounded-2xl p-5 grid gap-6">
                <div>
                  <InputComponent
                    title={Language.song.name}
                    typeInput={"text"}
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    errors={errors.name}
                    touche={touched.name}
                  />
                </div>
                {singerIndex.map((item, index) => (
                  <div key={index}>
                    <MyCombobox
                      key={index}
                      arr={singers}
                      label={Language.song.singer}
                      handle={setSinger}
                    />
                  </div>
                ))}
                <div className="flex justify-end pt-0 px-3">
                  <small
                    onClick={() => setSingerIndex([...singerIndex, 1])}
                    className=" text-xs text-blue-600 font-bold cursor-pointer"
                  >
                    + Add a singer
                  </small>
                </div>
                <div>
                  <small className="text-textSecond_50">{Language.song.lyrics}</small>
                  <div className="mt-3">
                    <Lyrics
                      title={Language.song.lyrics}
                      name="lyric"
                      onChange={setLyrics}
                      onBlur={() => {}}
                      value={lyrics}
                      errors={false}
                      touche={false}
                    />
                  </div>
                </div>
                <div>
                  <small className="text-textSecond_50">{Language.song.image}</small>
                  <div className="mt-3">
                    <UploadFile handleUpload={uploadImage} />
                  </div>
                  {imageSrc && (
                    <div className="flex justify-end">
                      <img
                        className="w-24 mt-2 h-24 rounded-lg"
                        src={imageSrc}
                        alt=""
                      />
                    </div>
                  )}
                </div>
                <div>
                  <small className="text-textSecond_50">{Language.song.song}</small>
                  <div className="mt-3">
                    <UploadFile handleUpload={uploadMusic} />
                  </div>
                  {musicSrc && (
                    <div className="w-full">
                      <audio
                        className="w-full mt-2"
                        src={musicSrc}
                        ref={audioRef}
                        onLoadedMetadata={onLoadedMetadata}
                        controls
                      ></audio>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3  mt-6">
              <div className=" col-span-1">
                <b className="text-lg text-textSecond_100">Properties</b>
                <p className="text-sm text-textSecond_500">
                  Title, short description, image...
                </p>
              </div>
              <div className=" col-span-2 box rounded-2xl p-5 grid gap-7">
                <div>
                  <MyCombobox
                    arr={singers}
                    label={Language.song.category}
                    handle={() => {}}
                  />
                </div>
                <div className="flex justify-around items-center">
                  <div className="flex justify-start items-center gap-2 text-textSecond_50">
                    <Toggle
                      handle={() => setRemember(!remember)}
                      value={remember}
                    />
                    <small>{remember ? <>Remember</> : <>Normal</>}</small>
                  </div>
                  <div className="flex justify-start items-center gap-2 text-textSecond_50">
                    <Toggle
                      handle={() => setPeoplework(!peoplework)}
                      value={peoplework}
                    />
                    <small>
                      {peoplework ? <>People Work</> : <>Your Work</>}
                    </small>
                  </div>
                  <div className="flex justify-start items-center gap-2 text-textSecond_50">
                    <Toggle handle={() => {}} value={true} />
                    <small>{show ? <>Remember</> : <>Normal</>}</small>
                  </div>
                </div>
                <div>
                  <MyCombobox arr={albums} label={"Album"} handle={setAlbum} />
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
              </div>
              <div className=" col-span-1"></div>
              <div className=" col-span-2 flex justify-between p-8 items-center">
                <div>
                  <div className="flex items-center gap-2 text-textSecond_50">
                    <Toggle handle={() => setShow(!show)} value={show} />
                    <small>{show ? <>Published</> : <>Private</>}</small>
                  </div>
                </div>
                <div>
                  <ButtonSubmit
                    title={"Create"}
                    submit={() => submitHandle(values)}
                    submiting={isSubmitting}
                    styl="bg-bg_0 text-textSecond_900"
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <MyModal
        isModal={isModal}
        ModalMessage={modalMessage}
        title={modalMessageTitle}
        closeModal={() => setIsModal(false)}
      />
      {tags.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default SongCreate;
