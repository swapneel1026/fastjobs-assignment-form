import React from "react";
import "../subcomponentcss/YourMobileContents.css";

const YourMobileContents = ({ formData, setFormData }) => {
  return (
    <>
      <h1 className="mobileHeading">Your mobile number?</h1>

      <div className="mobileInput">
        <select
          className="mobileInput-select"
          onChange={(e) =>
            setFormData({ ...formData, countryCode: e.target.value })
          }
        >
          <option value="select">Select</option>
          <option value="+91">(+91)</option>
          <option value="+92">(+92)</option>
        </select>
        <input
          className="mobileInputNumber"
          type="tel"
          required
          pattern="[1-9]{1}[0-9]{9}"
          onChange={(e) => setFormData({ ...formData, number: e.target.value })}
          value={formData.number}
        />
      </div>
      <div className="checkboxAndPara">
        <input
          type={"checkbox"}
          value={formData.checked}
          onClick={(e) =>
            setFormData({ ...formData, checked: e.target.checked })
          }
        />
        <p>
          By checking you confirm that you accept our Terms and conditions and
          have read our Privacy Policy.
        </p>
      </div>
    </>
  );
};

export default YourMobileContents;
