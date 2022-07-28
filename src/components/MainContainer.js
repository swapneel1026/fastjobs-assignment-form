import React from "react";
import "../css/MainContainer.css";
import rectangle from "../assets/Rectangle 41.svg";
// import businessman from "../assets/businessman.svg";
import nextIconArrow from "../assets/nextIconArrow.svg";
import "react-phone-number-input/style.css";
import "react-phone-number-input/style.css";

import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import YourMobileContents from "./YourMobileContents";

const MainContainer = ({
  midComponent,
  downimg,
  condition,
  location,
  message,
  name,
  gender,
  email,
  cityToWork,
  number,
  formData,
  setFormData,
  // postState,
}) => {
  //axios post method
  // const postState = () => {
  //   const userData = {
  //     name: formData.number,
  //     gender: formData.gender,
  //     email: formData.email,
  //     preferred_city: formData.cityToWork,
  //     roles: formData.roles,
  //     experience: "Fresher",
  //   };
  //   axios.post("https://api.fastjobs.io/frontendtask  ", userData);
  //   console.log([userData]);
  // };

  const navigate = useNavigate();

  const nextHandler = () => {
    // console.log(name);
    // console.log(gender);
    if (condition) {
      alert(message);
    } else {
      navigate(location);
    }
  };
  return (
    <div className="MainContainer">
      <div className="MainContainer-part1">
        <div className="MainContainer-part1-NextButton" onClick={nextHandler}>
          <div className="nextIcon">
            <img className="nextIconArrow" alt="alt" src={nextIconArrow} />
          </div>
        </div>
      </div>
      {/* ================================================================= */}

      <div className="MainContainer-part2">{midComponent}</div>

      {/* ================================================================= */}
      <div className="MainContainer-part3">
        <img className="businessman" alt="alt" src={downimg} />
        <img className="rectangle" alt="alt" src={rectangle} />
      </div>
    </div>
  );
};

export default MainContainer;
