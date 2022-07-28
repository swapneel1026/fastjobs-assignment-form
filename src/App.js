import "./App.css";
import MainContainer from "./components/MainContainer";
import YourMobileContents from "./subcomponents/YourMobileContents";
import businessman from "./assets/businessman.svg";
import profgirl from "./assets/profgirl.svg";
import businessmanBlue from "./assets/businessmanBlue.svg";
import blacktag from "./assets/blacktag.svg";
import businesswomanLaptop from "./assets/businesswomanLaptop.svg";
import EnterCode from "./subcomponents/EnterCode";
import WhatshouldCall from "./subcomponents/WhatshouldCall";
import ReachYou from "./subcomponents/ReachYou";
import LookingFor from "./subcomponents/LookingFor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { sortedCity } from "./subcomponents/CityData";
import SuccessfullySignedUp from "./components/SuccessfullySignedUp";

function App() {
  // States of components

  const [formData, setFormData] = useState({
    number: "",
    checked: false,
    countryCode: "",
    inputOne: "",
    inputTwo: "",
    inputThree: "",
    inputFour: "",
    name: "",
    gender: "",
    email: "",
    cityToWork: "",
    role: "",
    experience: "",
  });

  const otpCode = `${formData.inputOne}${formData.inputTwo}${formData.inputThree}${formData.inputFour}`;
  const genderValue = ["male", "female"];

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            index
            // path="/mobile"
            element={
              <MainContainer
                midComponent={
                  <YourMobileContents
                    formData={formData}
                    setFormData={setFormData}
                  />
                }
                downimg={businessman}
                setCountryCode={setFormData.countryCode}
                condition={
                  formData.checked === false ||
                  formData.number.length !== 10 ||
                  formData.countryCode !== "+91"
                }
                location={"/otp"}
                message={"Please enter Valid Mobile Number/Country Code(+91)"}
              />
            }
          />
          {/* ========================================================= */}
          <Route
            path="/otp"
            element={
              <MainContainer
                midComponent={
                  <EnterCode formData={formData} setFormData={setFormData} />
                }
                downimg={profgirl}
                formData={formData}
                setFormData={setFormData}
                otpCode={otpCode}
                condition={otpCode !== "9999"}
                location={"/whatshouldwecall"}
                message={"Invalid OTP , Please enter your 9999"}
              />
            }
          />
          {/* ========================================================= */}

          <Route
            path="/whatshouldwecall"
            element={
              <MainContainer
                midComponent={
                  <WhatshouldCall
                    formData={formData}
                    setFormData={setFormData}
                  />
                }
                downimg={businessmanBlue}
                formData={formData}
                setFormData={setFormData}
                condition={
                  formData.name === "" || !genderValue.includes(formData.gender)
                }
                location={"/reachyou"}
                message={"Enter your Name and Select your gender"}
              />
            }
          />
          {/* ========================================================= */}

          <Route
            path="/reachyou"
            element={
              <MainContainer
                midComponent={
                  <ReachYou formData={formData} setFormData={setFormData} />
                }
                downimg={blacktag}
                formData={formData}
                condition={
                  formData.email === "" ||
                  !sortedCity.includes(formData.cityToWork)
                }
                location={"/lookingfor"}
                message={
                  "Enter your email address and Select your City to Work"
                }
              />
            }
          />
          {/* ========================================================= */}

          <Route
            path="/lookingfor"
            element={
              <MainContainer
                midComponent={
                  <LookingFor formData={formData} setFormData={setFormData} />
                }
                downimg={businesswomanLaptop}
                condition={formData.role === "" || formData.experience === ""}
                location={"/signupsucceeded"}
                message={"Select all the feilds."}
              />
            }
          />
          <Route
            path="/signupsucceeded"
            element={
              <SuccessfullySignedUp
                formData={formData}
                setFormData={setFormData}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
