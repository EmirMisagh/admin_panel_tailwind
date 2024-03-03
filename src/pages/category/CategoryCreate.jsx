import React, { useState } from "react";
import Header from "../../components/Header";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputComponent from "../../components/element/InputComponent";
import Tags from "../../components/element/Tags";
import UploadFile from "../../components/element/UploadFile";
import MusicPlayer from "../../components/MusicPlayer";
import Toggle from "../../components/element/Toggle";
import ButtonSubmit from "../../components/element/ButtonSubmit";
import { createCategory, uploadImageApi } from "../../config/API";
import MyModal from "../../components/element/Modal";

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

function CategoryCreate() {
    const [tags, setTags] = useState([]);
    const [image, setImage] = useState("");
    const [imageSrc, setImageSrc] = useState("");
    const [show, setShow] = useState(true);
    const [isSubmitting, setSubmitting] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalMessageTitle, setModalMessageTitle] = useState("");
  
    const form = {
      name: "",
      image,
      show,
      author: "",
      tags,
    };
  
    const submitHandle = async (values) => {
      setSubmitting(true);
      // ERROR CHEKING -----------------
      if ((!values.name, !image)) {
        console.log("error");
        setSubmitting(false);
        return;
      }
  
      // UPLOAD IMAGE -----------------
      const formData = new FormData();
      formData.append("file", image);
  
      const imageUpload = await uploadImageApi("categoryimage", formData);
      if (!imageUpload.data.data) {
        setSubmitting(false);
        setModalMessage("Image not uploaded");
        setModalMessageTitle("");
        return;
      }
      setImage(imageUpload.data.data);
      values.image = imageUpload.data.data;
      values.show = show;
      values.tags = tags;
  
      const create = await createCategory(values);
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
  return (
    <div>
    <div>
      <Header
        title={"Create a new playlist"}
        address1={"Dashbourd"}
        address2={"Playlist"}
        address3={"New Playlist"}
      />
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
                    title={"Name"}
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
                {!image && (
                  <div>
                    <small className="text-textSecond_50">Image</small>
                    <div className="mt-3">
                      <UploadFile handleUpload={uploadImage} />
                    </div>
                  </div>
                )}
                {image && (
                  <div>
                    <MusicPlayer image={imageSrc} music={""} audioRef={""} />
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-3  mt-6">
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
    </div>
    <MyModal
      isModal={isModal}
      ModalMessage={modalMessage}
      title={modalMessageTitle}
      closeModal={() => setIsModal(false)}
    />
  </div>
  )
}

export default CategoryCreate