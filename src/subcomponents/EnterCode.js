import React from "react";
import "../subcomponentcss/EnterCode.css";

const EnterCode = ({ formData, setFormData }) => {
  return (
    <div className="EnterCode-Container">
      <h1>Enter the code</h1>
      <div className="code-input">
        <input
          type="text"
          maxLength={1}
          onChange={(e) =>
            setFormData({ ...formData, inputOne: e.target.value })
          }
        />
        <input
          type="text"
          maxLength={1}
          onChange={(e) =>
            setFormData({ ...formData, inputTwo: e.target.value })
          }
        />
        <input
          type="text"
          maxLength={1}
          onChange={(e) =>
            setFormData({ ...formData, inputThree: e.target.value })
          }
        />
        <input
          type="text"
          maxLength={1}
          onChange={(e) =>
            setFormData({ ...formData, inputFour: e.target.value })
          }
        />
      </div>
      <a href="/" className="resendCode">
        Resend Code
      </a>
    </div>
  );
};

export default EnterCode;
