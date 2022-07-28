import React, { useRef } from "react";
import "../subcomponentcss/WhatshouldCall.css";
import male from "../assets/male.svg";
import female from "../assets/female.svg";

const WhatshouldCall = ({ formData, setFormData }) => {
  const genderButtonRefM = useRef();
  const genderButtonRefF = useRef();

  return (
    <div className="whatshouldcall-container">
      <p>Help us know you better!</p>
      <div className="WSonetwoThree">
        <div className="WSone">1</div>
        <span>--------</span>
        <div className="WStwo">2</div>
        <span>--------</span>
        <div className="WSthree">3</div>
      </div>
      <h1 className="heading-title">What should we call you?</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <h1 className="heading-title">Gender</h1>
      <div className="gender">
        <div
          className="male"
          ref={genderButtonRefM}
          onClick={() => {
            setFormData({ ...formData, gender: "male" });
            if (formData.gender === "male") {
              genderButtonRefM.current.style.backgroundColor = "#7280FD";

              genderButtonRefF.current.style.backgroundColor = "#fff";
            }
          }}
        >
          <img src={male} alt="alt" />
        </div>
        <div
          className="female"
          ref={genderButtonRefF}
          onClick={() => {
            setFormData({ ...formData, gender: "female" });
            if (formData.gender === "female") {
              genderButtonRefF.current.style.backgroundColor = "#7280FD";
              genderButtonRefM.current.style.backgroundColor = "#fff";
            }
          }}
        >
          <img src={female} alt="alt" />
        </div>
      </div>
    </div>
  );
};

export default WhatshouldCall;
