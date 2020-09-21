import React from "react";
import "./section.scss";

function Section({ message, image, centerSection }) {
  return (
    <div className="section">
      <div className="section__wrapper">
        <div className="section__text">
          <h2 className="section__title">{message[0]}</h2>
          <p className="section__para">{message[1]}</p>
        </div>

        <img
          src={image}
          alt="movie banner"
          className={`section__img ${centerSection ? "first" : ""}`}
        />
      </div>
    </div>
  );
}

export default Section;
