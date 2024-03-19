import React, { useState,useCallback,useEffect, useMemo } from "react";
import Header from "../../components/Header";
import { Formik, Form } from "formik";
import ProfileShow from "../../components/user/ProfileShow";
import InputComponent from "../../components/element/InputComponent";
import * as Yup from "yup";
import MyCombobox from "../../components/element/Combobox";
import ButtonSubmit from "../../components/element/ButtonSubmit";
import { createSinger, getUserOne, uploadImageApi } from "../../config/API";
import MyModal from "../../components/element/Modal";
import { Country } from "../../config/Country";
import { useParams } from "react-router-dom";


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  family: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  avatar: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});


function SingerEdit() {
    const [user,setUser] = useState({})
    const [isSubmitting, setSubmitting] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalMessageTitle, setModalMessageTitle] = useState("");
    const [avatar, setAvatar] = useState("");
    const [country, setCountry] = useState("");
    const [avatarSrc, setAvatarSrc] = useState("");
  
    const form = {
      name: "",
      family: "",
      email: "",
      avatar,
      country,
      city: "",
      twitter: "",
      instgram: "",
      facebook: "",
    };

    const { id } = useParams();
    
    const getUser = useCallback(async () => {
        const userData = await getUserOne(id);
        setUser(userData.data);
        // setAvatarSrc(userData.data.avatar);
        console.log(userData.data);
      }, [id]);
    
      useMemo(() => {
        getUser();
      }, [getUser]);
  
    const submitHandle = async (values) => {
      // ERROR CHEKING -----------------
      setSubmitting(true);
      if ((!values.name, !values.family, !avatar)) {
        console.log("error");
        console.log(values);
        setSubmitting(false);
        return;
      }
  
      // UPLOAD IMAGE -----------------
      const formData = new FormData();
      formData.append("file", avatar);
  
      const imageUpload = await uploadImageApi("singeravatar", formData);
      if (!imageUpload.data.data) {
        setSubmitting(false);
        setModalMessage("Image not uploaded");
        setModalMessageTitle("");
        return;
      }
      setAvatar(imageUpload.data.data);
      values.avatar = imageUpload.data.data;
  
      const create = await createSinger(values);
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
          title={"Create a new singer"}
          address1={"Dashbourd"}
          address2={"Singer"}
          address3={"New Singer"}
        />
      </div>
      <div>
        <Formik
          onSubmit={submitHandle}
          initialValues={user}
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
                    emailVerified={false}
                    handleToggle={() => {}}
                    onBlur={handleBlur}
                    touche={touched.avatar}
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
                    <MyCombobox
                      handle={setCountry}
                      arr={Country}
                      label={"Country"}
                    />
                  </div>
                  <div>
                    <InputComponent
                      title={"Twitter"}
                      typeInput={"text"}
                      name="twitter"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.twitter}
                      errors={errors.twitter}
                      touche={touched.twitter}
                    />
                  </div>
                  <div>
                    <InputComponent
                      title={"Facebook"}
                      typeInput={"text"}
                      name="facebook"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.facebook}
                      errors={errors.facebook}
                      touche={touched.facebook}
                    />
                  </div>
                  <div>
                    <InputComponent
                      title={"Instgram"}
                      typeInput={"text"}
                      name="instgram"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.instgram}
                      errors={errors.instgram}
                      touche={touched.instgram}
                    />
                  </div>
                  <div></div>
                  <div></div>
                  <div className="flex justify-end items-end">
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

export default SingerEdit