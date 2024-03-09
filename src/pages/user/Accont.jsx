import React, { useState } from "react";
import { Formik, Form } from "formik";
import ProfileShow from "../../components/user/ProfileShow";
import InputComponent from "../../components/element/InputComponent";
import * as Yup from "yup";
import MyCombobox from "../../components/element/Combobox";
import ButtonSubmit from "../../components/element/ButtonSubmit";
import { getUserEmail, updateUser, uploadImageApi } from "../../config/API";
import MyModal from "../../components/element/Modal";
import { Country } from "../../config/Country";

const adminCombobox = [
  { id: 1, name: "User" },
  { id: 2, name: "Manager" },
  { id: 3, name: "Admin" },
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
});

function Accont({ user }) {
  const [isSubmitting, setSubmitting] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalMessageTitle, setModalMessageTitle] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarSrc, setAvatarSrc] = useState(user.avatar);
  const [country, setCountry] = useState(user.country);
  const [admin, setAdmin] = useState(user.admin);
  const [emailVerified, setEmailVerified] = useState(user.emailVerified);

  const form = {
    name: user.name,
    family: user.family,
    username: user.username,
    email: user.email,
    emailVerified: user.emailVerified,
    avatar: user.avatar,
    country: user.country,
    city: user.city,
    phone: user.phone,
    admin,
  };

  const submitHandle = async (values) => {
    setSubmitting(true);
    values.admin = form.admin;
    values.country = country;
    values.emailVerified = emailVerified;

    const formData = new FormData();
    formData.append("file", avatar);
    if (user.email !== values.email) {
      const email = await getUserEmail(values.email);

      if (email.data.found) {
        setModalMessage(email.data.message);
        setIsModal(true);
        setSubmitting(false);
        setModalMessageTitle("Payment successful");
        return;
      }
    }

    if (avatar) {
      const imageUpload = await uploadImageApi("useravatar", formData);
      if (!imageUpload.data.data) {
        setSubmitting(false);
        setModalMessage("Image not uploaded");
        setModalMessageTitle("");
        return;
      }
      setAvatar(imageUpload.data.data);
      values.avatar = imageUpload.data.data;
    }

    values.admin = form.admin;

    const create = await updateUser(user._id, values);
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

  const uploadImage = (e) => {
    console.log(e.target.files[0]);
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
                    error={false}
                    onChange={handleChange}
                    value={values.avatar}
                    emailVerified={emailVerified}
                    handleToggle={() => setEmailVerified(!emailVerified)}
                    onBlur={handleBlur}
                    touche={false}
                  />
                </div>
                <div className="box p-5 grid grid-cols-2 gap-4 flex-1 rounded-2xl">
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
                      handle={setCountry}
                      arr={[
                        {
                          id: 0,
                          name: values.country ? values.country : "Not mach",
                        },
                        ...Country,
                      ]}
                      label={"Country"}
                    />
                  </div>
                  <div>
                    <MyCombobox
                      handle={setAdmin}
                      arr={[{ id: 0, name: values.admin }, ...adminCombobox]}
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
                    {values.admin}
                    {values.emailVerified ? "Ok" : "Not"}
                  </div>
                  <div className="flex justify-end items-end">
                    <ButtonSubmit
                      title={"Update"}
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
  );
}

export default Accont;
