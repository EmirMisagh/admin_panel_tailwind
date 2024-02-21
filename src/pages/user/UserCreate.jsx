import React, { useState } from "react";
import Header from "../../components/Header";
import { Formik, Form } from "formik";
import ProfileShow from "../../components/user/ProfileShow";
import InputComponent from "../../components/element/InputComponent";
import * as Yup from "yup";
import MyCombobox from "../../components/element/Combobox";
import ButtonSubmit from "../../components/element/ButtonSubmit";
import axios from "axios";

const adminCombobox = [
  { id: 1, name: "User" },
  { id: 2, name: "Manager" },
  { id: 3, name: "Amin" },
];

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

function UserCreate() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [avatarSrc, setAvatarSrc] = useState("");
  const [admin, setAdmin] = useState("User");
  const [emailVerified, setEmailVerified] = useState(false);

  const form = {
    name: "",
    family: "",
    username: "",
    email: "",
    emailVerified: false,
    password: "",
    avatar,
    country: "",
    city: "",
    phone: "",
    admin,
  };

  const submitHandle = async (values) => {
    console.log(avatar);
    const formData = new FormData();
    formData.append("file", avatar);
    console.log(formData);

    await axios
      .post("https://serverkurdsong.liara.run/upload/user/avatar", formData)
      .then((responce) => {
        setAvatar(responce.data.data);
      })
      .catch((error) => {
        setSubmitting(false);
        console.log(error);
      });

    values.avatar = form.avatar;
    values.admin = form.admin;
    setSubmitting(true);
    console.log("hi");
    console.log(values);
    setSubmitting(false);
  };

  const uploadImage = (e) => {
    setAvatar(e.target.files[0]);
    const element = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      setAvatarSrc(e.target.result);
    };
    reader.readAsDataURL(element);
  };

  return (
    <div>
      <div>
        <Header
          title={"Create a new user"}
          address1={"Dashbourd"}
          address2={"User"}
          address3={"New User"}
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
              <div className="flex gap-7 mt-7 items-start">
                <div>
                  <ProfileShow
                    handleUpload={uploadImage}
                    imageSrc={avatarSrc}
                    error={avatar}
                    onChange={handleChange}
                    value={values.avatar}
                    emailVerified={emailVerified}
                    handleToggle={() => setEmailVerified(!emailVerified)}
                    onBlur={handleBlur}
                    touche={touched.avatar}
                  />
                </div>
                <div className="box p-5 grid grid-cols-2 gap-3 flex-1 rounded-2xl">
                  <div>
                    <InputComponent
                      title={"First Name"}
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
                      title={"Family Name"}
                      typeInput={"text"}
                      name="family"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.family}
                      errors={errors.family}
                      touche={touched.family}
                    />
                  </div>
                  <div>
                    <InputComponent
                      title={"Email"}
                      typeInput={"text"}
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      errors={errors.email}
                      touche={touched.email}
                    />
                  </div>
                  <div>
                    <InputComponent
                      title={"Username"}
                      typeInput={"text"}
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      errors={errors.username}
                      touche={touched.username}
                    />
                  </div>
                  <div>
                    <InputComponent
                      title={"Phone Number"}
                      typeInput={"text"}
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      errors={errors.phone}
                      touche={touched.phone}
                    />
                  </div>
                  <div>
                    <MyCombobox
                      handle={setAdmin}
                      arr={adminCombobox}
                      label={"Country"}
                    />
                  </div>
                  <div>
                    <MyCombobox
                      handle={setAdmin}
                      arr={adminCombobox}
                      label={"Admin"}
                    />
                  </div>
                  <div>
                    <InputComponent
                      title={"City"}
                      typeInput={"text"}
                      name="city"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                      errors={errors.city}
                      touche={touched.city}
                    />
                  </div>
                  <div>
                    <InputComponent
                      title={"Password"}
                      typeInput={"password"}
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      errors={errors.password}
                      touche={touched.password}
                    />
                  </div>
                  <div>
                    <InputComponent
                      title={"Password"}
                      typeInput={"password"}
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      errors={errors.password}
                      touche={touched.password}
                    />
                  </div>
                  <div></div>
                  <div className="flex justify-end items-end">
                    <ButtonSubmit
                      title={"Create"}
                      submit={() => submitHandle(values)}
                    />
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        {form.name}
        {form.family}
      </div>
    </div>
  );
}

export default UserCreate;
