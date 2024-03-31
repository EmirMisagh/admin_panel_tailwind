import React, { useState } from "react";
import InputComponent from "../element/InputComponent";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import MyModal from "../element/Modal";
import ButtonSubmit from "../element/ButtonSubmit";
import { updateUser } from "../../config/API";

function Social({user}) {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalMessageTitle, setModalMessageTitle] = useState("");

  const submitHandle = async() => {
    setIsSubmitting(true);
    const body = user
    body.socialAccont.push({type: "facebook", url: facebook})
    body.socialAccont.push({type: "instagram", url: instagram})
    body.socialAccont.push({type: "twitter", url: twitter})
    console.log(body)

    const update = await updateUser(user._id,body);
    if (update.data) {
      setModalMessage(update.data.message);
      setIsModal(true);
      setIsSubmitting(false);
      setModalMessageTitle("Payment successful");
    } else {
      setModalMessage(update.error.message);
      setIsModal(true);
      setIsSubmitting(false);
      setModalMessageTitle("");
    }
    setIsSubmitting(false);
  };

  return (
    <div>
      <div>
        <div className="flex gap-7 mt-7 items-start">
          <div className="box p-5 grid gap-4 flex-1 rounded-2xl">
            <div>
              <InputComponent
                title={`Facebook`}
                typeInput={"teaxt"}
                name="facebook"
                onChange={(e) => setFacebook(e.target.value)}
                onBlur={() =>{}}
                value={facebook}
                errors={""}
                touche={""}
                icon={<FaFacebookF />}
              />
            </div>

            <div>
              <InputComponent
                title={"Instagram"}
                typeInput={"teaxt"}
                name="instagram"
                onChange={(e) => setInstagram(e.target.value)}
                onBlur={() =>{}}
                value={instagram}
                errors={""}
                touche={""}
                icon={<RiInstagramFill />}
              />
            </div>
            <div>
              <InputComponent
                title={"Twitter"}
                typeInput={"teaxt"}
                name="twitter"
                onChange={(e) => setTwitter(e.target.value)}
                onBlur={() =>{}}
                value={twitter}
                errors={""}
                touche={""}
                icon={<FaTwitter />}
              />
            </div>
            <div className="flex justify-end items-end">
              <ButtonSubmit
                title={"Update"}
                submit={() => submitHandle()}
                submiting={isSubmitting}
                styl="bg-bg_0 text-textSecond_900"
              />
            </div>
          </div>
        </div>
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

export default Social;
