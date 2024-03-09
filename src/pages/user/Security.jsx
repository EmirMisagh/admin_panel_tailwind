import React, { useState } from "react";
import { Formik, Form } from "formik";
import InputComponent from "../../components/element/InputComponent";
import * as Yup from "yup";
import ButtonSubmit from "../../components/element/ButtonSubmit";
import axios from "axios";
import { ApiUrl, createUser, getUserEmail } from "../../config/API";
import MyModal from "../../components/element/Modal";

const SignupSchema = Yup.object().shape({
  oldpassword: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confrimpassword: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

function Security() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalMessageTitle, setModalMessageTitle] = useState("");
  const [avatar, setAvatar] = useState("");

  const form = {
    oldpassword: "",
    confrimpassword: "",
    password: "",
  };

  const submitHandle = async (values) => {
    setSubmitting(true);
    const formData = new FormData();
    formData.append("file", avatar);

    const email = await getUserEmail(values.email);
    console.log(email);

    if (email.data.found) {
      setModalMessage(email.data.message);
      setIsModal(true);
      setSubmitting(false);
      setModalMessageTitle("Payment successful");
      return;
    }
    await axios
      .post(`${ApiUrl}/upload/user/avatar`, formData)
      .then((responce) => {
        setAvatar(responce.data.data);
        values.avatar = responce.data.data;
      })
      .catch(() => {
        setSubmitting(false);
        setModalMessage("Image not uploaded");
        setModalMessageTitle("");
        return;
      });

    values.admin = form.admin;

    const create = await createUser(values);
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
                <div className="box p-5 grid grid-cols-2 gap-4 flex-1 rounded-2xl">
                  <div>
                    <InputComponent
                      title={"Old Password"}
                      typeInput={"password"}
                      name="oldpassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.oldpassword}
                      errors={errors.oldpassword}
                      touche={touched.oldpassword}
                    />
                  </div>
                  <div></div>

                  <div>
                    <InputComponent
                      title={"New Password"}
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
                      title={"Confrim Password"}
                      typeInput={"password"}
                      name="confrimpassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confrimpassword}
                      errors={errors.confrimpassword}
                      touche={touched.confrimpassword}
                    />
                  </div>
                  <div></div>
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

export default Security;
