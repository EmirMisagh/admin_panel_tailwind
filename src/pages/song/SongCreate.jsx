import React, { useState } from "react";
import Header from "../../components/Header";
import InputComponent from "../../components/element/InputComponent";
import MyCombobox from "../../components/element/Combobox";
import ButtonSubmit from "../../components/element/ButtonSubmit";
import UploadFile from "../../components/element/UploadFile";
import TextEditor from "../../components/element/TextEditor";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const form = {
  name: "",
  family: "",
  username: "",
  email: "",
  emailVerified: false,
  password: "",
  country: "",
  city: "",
  phone: "",
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  family: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  avatar: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

function SongCreate() {
  const [image, setImage] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const submitHandle = () => {};

  const uploadImage = (file) => {
    console.log(file[0]);
    setImage(file[0]);
    const element = file[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      console.log(e);
      setImageSrc(e.target.result);
    };
    reader.readAsDataURL(element);
  };

  return (
    <div>
      <div>
        <Header
          title={"Create a new song"}
          address1={"Dashbourd"}
          address2={"Song"}
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
                  <MyCombobox
                    arr={[
                      { id: 2, name: "Admin" },
                      { id: 3, name: "Manager" },
                      { id: 4, name: "User" },
                    ]}
                    label={"Singer"}
                  />
                </div>
                <div>
                  <small>Lyric</small>
                  <div className="mt-3">
                    <TextEditor />
                  </div>
                </div>
                {!image && (
                  <div>
                    <small>Image</small>
                    <div className="mt-3">
                      <UploadFile handleUpload={uploadImage} />
                    </div>
                  </div>
                )}
                <div>
                  <small>Song</small>
                  <div className="mt-3">
                    <UploadFile />
                  </div>
                </div>
                <div>
                  <img src={imageSrc} alt="" />
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
                  <InputComponent title={"Name"} typeInput={"text"} />
                </div>
                <div>
                  <MyCombobox
                    arr={[
                      { id: 1, name: "Not filter" },
                      { id: 2, name: "Admin" },
                      { id: 3, name: "Manager" },
                      { id: 4, name: "User" },
                    ]}
                    label={"Admin"}
                  />
                </div>
              </div>
              <div className=" col-span-1">vbc</div>
              <div className=" col-span-2 flex justify-end items-end">
                {" "}
                <ButtonSubmit title={"Create"} />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SongCreate;
