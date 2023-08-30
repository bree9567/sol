// src/components/About.js
import React from "react";
import "../styles/OurLawyers.css";
import lawyer from "../public/lawyer.jpg"
import { Link } from "react-router-dom";

function Lawyers() {
  return (
    <div>
      <div className="center-images-container">
        <img className="lawyer_images" src={lawyer} alt="pictureoflawyers" />
        <img className="lawyer_images" src={lawyer} alt="pictureoflawyers" />
        <img className="lawyer_images" src={lawyer} alt="pictureoflawyers" />
        <Link to="/Contactus">
          <button className="image-button">Contact Us</button>
        </Link>
      </div>

      <div className="bio">
        <p className="p">
          <text className="writing">
              Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          </text>
        
        </p>
      </div>
    </div>
  );
}

export default Lawyers;
