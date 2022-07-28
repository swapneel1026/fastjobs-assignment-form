import React, { useRef } from "react";
import "../subcomponentcss/ReachYou.css";
import { sortedCity } from "./CityData";

const ReachYou = ({ formData, setFormData }) => {
  const city1 = useRef();
  const city2 = useRef();
  const city3 = useRef();
  const city1P = useRef();
  const city2P = useRef();
  const city3P = useRef();
  return (
    <div className="ReachYou-container">
      <p>Help us know you better!</p>
      <div className="RYonetwoThree">
        <div className="RYone">1</div>
        <span>--------</span>
        <div className="RYtwo">2</div>
        <span>--------</span>
        <div className="RYthree">3</div>
      </div>
      <h1 className="heading-title">Where can we reach you?</h1>
      <input
        type="email"
        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
        required=""
        placeholder="Enter your email id"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <h1 className="heading-title">Preferred city to work</h1>
      <div className="cityOptions">
        <select
          name="city"
          value={formData.cityToWork}
          onChange={(e) =>
            setFormData({ ...formData, cityToWork: e.target.value })
          }
        >
          <option>Eg. Bengaluru, Mumbai</option>
          {sortedCity.map((city, ele) => {
            return <option key={ele}>{city}</option>;
          })}
        </select>
      </div>
      <h2 className="topcities-heading">Top cities you may prefer:</h2>
      <div className="topcities">
        <div
          ref={city1}
          className="topcity"
          onClick={() => {
            setFormData({ ...formData, cityToWork: "mumbai" });
            if (formData.cityToWork === "mumbai") {
              city1.current.style.backgroundColor = "#7280FD";
              city1P.current.style.color = "#fff";
              city2.current.style.backgroundColor = "#fff";
              city2P.current.style.color = "#7280fd";
              city3.current.style.backgroundColor = "#fff";
              city3P.current.style.color = "#7280fd";
            }
          }}
        >
          <p ref={city1P}>Mumbai</p>
        </div>
        <div
          ref={city2}
          className="topcity"
          onClick={() => {
            setFormData({ ...formData, cityToWork: "bengaluru" });
            if (formData.cityToWork === "bengaluru") {
              city1.current.style.backgroundColor = "#fff";
              city1P.current.style.color = "#7280fd";
              city2.current.style.backgroundColor = "#7280fd";
              city2P.current.style.color = "#fff";
              city3.current.style.backgroundColor = "#fff";
              city3P.current.style.color = "#7280fd";
            }
          }}
        >
          <p ref={city2P}>Bengaluru</p>
        </div>
        <div
          ref={city3}
          className="topcity"
          onClick={() => {
            setFormData({ ...formData, cityToWork: "delhi" });
            if (formData.cityToWork === "delhi") {
              city1.current.style.backgroundColor = "#fff";
              city1P.current.style.color = "#7280fd";
              city2.current.style.backgroundColor = "#fff";
              city2P.current.style.color = "#7280fd";
              city3.current.style.backgroundColor = "#7280fd";
              city3P.current.style.color = "#fff";
            }
          }}
        >
          <p ref={city3P}>Delhi</p>
        </div>
      </div>
    </div>
  );
};

export default ReachYou;
