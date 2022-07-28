import React, { useRef } from "react";
import "../css/SuccessfullySignedUp.css";
import { MdVerified } from "react-icons/md";
import axios from "axios";

const SuccessfullySignedUp = ({ formData }) => {
  const modalRef = useRef();

  const postState = () => {
    const userData = {
      name: formData.name,
      gender: formData.gender,
      email: formData.email,
      preferred_city: formData.cityToWork,
      roles: formData.roles,
      experience: formData.experience,
    };
    axios.post("https://api.fastjobs.io/frontendtask  ", userData);
    console.log(userData);
  };

  return (
    <div className="modal" ref={modalRef}>
      <h1 className="modal-title">Successfully Signed-Up</h1>
      <div>
        <MdVerified size={"9rem"} color="#fff" className="icon" />
      </div>
      <h2 className="modal-subtitle">(Login with your credentials)</h2>
      <div className="modal-buttons">
        <button
          className="btn-ok"
          onClick={() => {
            modalRef.current.style.transition = "all 0.5s ease-out";
            modalRef.current.style.opacity = "0";
            // console.log(formData);
            postState();
          }}
        >
          Ok
        </button>
        <button
          className="btn-cancel"
          onClick={() => {
            modalRef.current.style.transition = "all 0.5s ease-out";
            modalRef.current.style.opacity = "0";
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SuccessfullySignedUp;
