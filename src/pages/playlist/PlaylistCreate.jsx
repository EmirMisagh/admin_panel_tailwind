import React from "react";
import Header from "../../components/Header";
import { Formik, Form } from "formik";
import * as Yup from "yup";



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

function PlaylistCreate() {

  const form = {
    name: "",
    image: "",
    show: "",
    author: "",
    tags: "",
  };

  const submitHandle = async (values) => {}



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
          }) => <Form></Form>}
        </Formik>
      </div>
    </div>
  );
}

export default PlaylistCreate;
