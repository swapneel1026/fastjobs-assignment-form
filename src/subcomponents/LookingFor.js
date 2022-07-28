import React, { useRef } from "react";
import "../subcomponentcss/LookingFor.css";
import { jobs } from "./jobList";

const LookingFor = ({ formData, setFormData }) => {
  //ref for role section.
  const webdevRef = useRef();
  const uidevRef = useRef();
  const frontdevRef = useRef();
  const webdevRefP = useRef();
  const uidevRefP = useRef();
  const frontdevRefP = useRef();

  //ref for experience section.
  const fresherRef = useRef();
  const cat1Ref = useRef();
  const cat2Ref = useRef();
  const cat3Ref = useRef();
  const fresherRefP = useRef();
  const cat1RefP = useRef();
  const cat2RefP = useRef();
  const cat3RefP = useRef();
  return (
    <div className="LookingFor-container">
      <p>Help us know you better!</p>
      <div className="LFonetwoThree">
        <div className="LFone">1</div>
        <span>--------</span>
        <div className="LFtwo">2</div>
        <span>--------</span>
        <div className="LFthree">3</div>
      </div>
      <h1 className="heading-title">Role you are looking for?</h1>

      <div className="jobOptions">
        <select
          name="job"
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value={formData.role}>Eg. Web Developer</option>
          {jobs.map((job, ele) => {
            return (
              <option key={ele} value={job}>
                {job}
              </option>
            );
          })}
        </select>
      </div>
      <h2>Trending Role:</h2>
      <div className="TrendingRoles">
        <div
          ref={webdevRef}
          className="TrendingRole"
          onClick={() => {
            setFormData({ ...formData, role: "web developer" });
            if (formData.role === "web developer") {
              webdevRef.current.style.backgroundColor = "#7280FD";
              webdevRefP.current.style.color = "#fff";
              uidevRef.current.style.backgroundColor = "#fff";
              uidevRefP.current.style.color = "#7280FD";
              frontdevRef.current.style.backgroundColor = "#fff";
              frontdevRefP.current.style.color = "#7280FD";
            }
          }}
        >
          <p ref={webdevRefP}>Web Developer</p>
        </div>
        <div
          ref={uidevRef}
          className="TrendingRole"
          onClick={() => {
            setFormData({ ...formData, role: "ui developer" });
            if (formData.role === "ui developer") {
              webdevRef.current.style.backgroundColor = "#fff";
              webdevRefP.current.style.color = "#7280FD";
              uidevRef.current.style.backgroundColor = "#7280FD";
              uidevRefP.current.style.color = "#fff";
              frontdevRef.current.style.backgroundColor = "#fff";
              frontdevRefP.current.style.color = "#7280FD";
            }
          }}
        >
          <p ref={uidevRefP}>UI Developer</p>
        </div>
        <div
          ref={frontdevRef}
          className="TrendingRole"
          onClick={() => {
            setFormData({ ...formData, role: "frontend developer" });
            if (formData.role === "frontend developer") {
              webdevRef.current.style.backgroundColor = "#fff";
              webdevRefP.current.style.color = "#7280FD";
              uidevRef.current.style.backgroundColor = "#fff";
              uidevRefP.current.style.color = "#7280FD";
              frontdevRef.current.style.backgroundColor = "#7280FD";
              frontdevRefP.current.style.color = "#fff";
            }
          }}
        >
          <p ref={frontdevRefP}>Frontend Developer</p>
        </div>
      </div>

      <h1 className="heading-title">How many years of work experience</h1>

      <div className="Experiences">
        <div
          ref={fresherRef}
          className="Experience"
          onClick={() => {
            setFormData({ ...formData, experience: "fresher" });
            if (formData.experience === "fresher") {
              fresherRef.current.style.backgroundColor = "#7280FD";
              fresherRefP.current.style.color = "#fff";
              cat1Ref.current.style.backgroundColor = "#fff";
              cat1RefP.current.style.color = "#7280FD";
              cat2Ref.current.style.backgroundColor = "#fff";
              cat2RefP.current.style.color = "#7280FD";
              cat3Ref.current.style.backgroundColor = "#fff";
              cat3RefP.current.style.color = "#7280FD";
            }
          }}
        >
          <p ref={fresherRefP}>Fresher</p>
        </div>
        <div
          ref={cat1Ref}
          className="Experience"
          onClick={() => {
            setFormData({ ...formData, experience: "1-3 years" });
            if (formData.experience === "1-3 years") {
              fresherRef.current.style.backgroundColor = "#fff";
              fresherRefP.current.style.color = "#7280FD";
              cat1Ref.current.style.backgroundColor = "#7280FD";
              cat1RefP.current.style.color = "#fff";
              cat2Ref.current.style.backgroundColor = "#fff";
              cat2RefP.current.style.color = "#7280FD";
              cat3Ref.current.style.backgroundColor = "#fff";
              cat3RefP.current.style.color = "#7280FD";
            }
          }}
        >
          <p ref={cat1RefP}>1-3 years</p>
        </div>
        <div
          ref={cat2Ref}
          className="Experience"
          onClick={() => {
            setFormData({ ...formData, experience: "3-6 years" });
            if (formData.experience === "3-6 years") {
              fresherRef.current.style.backgroundColor = "#fff";
              fresherRefP.current.style.color = "#7280FD";
              cat1Ref.current.style.backgroundColor = "#fff";
              cat1RefP.current.style.color = "#7280FD";
              cat2Ref.current.style.backgroundColor = "#7280FD";
              cat2RefP.current.style.color = "#fff";
              cat3Ref.current.style.backgroundColor = "#fff";
              cat3RefP.current.style.color = "#7280FD";
            }
          }}
        >
          <p ref={cat2RefP}>3-6 years</p>
        </div>
        <div
          ref={cat3Ref}
          className="Experience"
          onClick={() => {
            setFormData({ ...formData, experience: "6+ years" });
            if (formData.experience === "6+ years") {
              fresherRef.current.style.backgroundColor = "#fff";
              fresherRefP.current.style.color = "#7280FD";
              cat1Ref.current.style.backgroundColor = "#fff";
              cat1RefP.current.style.color = "#7280FD";
              cat2Ref.current.style.backgroundColor = "#fff";
              cat2RefP.current.style.color = "#7280FD";
              cat3Ref.current.style.backgroundColor = "#7280FD";
              cat3RefP.current.style.color = "#fff";
            }
          }}
        >
          <p ref={cat3RefP}>6+ years</p>
        </div>
      </div>
    </div>
  );
};

export default LookingFor;
