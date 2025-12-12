// src/app/components/MyPetSection.jsx  (or wherever you keep components)
"use client";

import Image from "next/image";
import "./MyPetSection.css";

export default function MyPetSection() {
  return (
    <section className="my-pet-section" id="my-pet">
      {/* LEFT – Copy */}
      <div className="my-pet-copy">
        <p className="my-pet-eyebrow">USER &amp; ACCOUNT</p>
        <h2 className="my-pet-title">My Pet</h2>
        <p className="my-pet-body">
          The My Pets section gives owners a personalized hub for each pet,
          organizing essential information, health history, appointments, and
          care actions in one place. This creates daily utility, increases
          retention, and positions PawCare as the long-term home for every
          pet’s wellbeing.
        </p>
      </div>

      {/* RIGHT – Hand + phone illustration */}
      <div className="my-pet-visual">
        <div className="my-pet-visual-inner">
          <Image
            src="/hand.svg"
            alt="PawCare My Pet screen in hand"
            width={520}
            height={680}
            className="my-pet-hand-image"
            priority
          />
        </div>
      </div>
    </section>
  );
}
