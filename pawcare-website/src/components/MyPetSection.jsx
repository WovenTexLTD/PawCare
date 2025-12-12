import React from "react";
import "./MyPetSection.css";

// Put hand.svg in: src/assets/hand.svg (or update the path below)
import handSvg from "../assets/hand.svg";

export default function MyPetSection() {
  return (
    <section className="myPetSection">
      {/* orange corner shapes */}
      <div className="myPetBlob myPetBlob--topRight" aria-hidden="true" />
      <div className="myPetBlob myPetBlob--bottomLeft" aria-hidden="true" />

      <div className="myPetContainer">
        <div className="myPetLeft">
          <div className="myPetKicker">USER &amp; ACCOUNT</div>
          <h2 className="myPetTitle">My Pet</h2>

          <p className="myPetBody">
            The My Pets section gives owners a personalized hub for each pet,
            organizing essential information, health history, appointments, and
            care actions in one place. This creates daily utility, increases
            retention, and positions PawCare as the long-term home for every
            pet’s wellbeing.
          </p>
        </div>

        <div className="myPetRight">
          <img className="myPetImage" src={handSvg} alt="My Pet screen preview" />
        </div>
      </div>
    </section>
  );
}
