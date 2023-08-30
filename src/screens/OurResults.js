

import "../styles/OurResults.css";
import React from "react";
import constructioninjury from "../public/constructioninjury.jpg";
import autoaccident from "../public/autoaccident.jpg";
import wrongfuldeath from "../public/wrongfuldeath.jpg";

import { Link } from "react-router-dom";

function OurResults() {

 

  const handleClick = () => {
    // Show the popup when the image is clicked
    alert("item touched")
  };






  return (
    <div>
      <div className="image-container">
        <div onClick={handleClick}>
          <h2>Case Study 1</h2>
          <img
            className="construction-image"
            src={constructioninjury}
            alt="construction"
          />
          <p>
            "Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do
          </p>
        </div>

        <div onClick={handleClick}>
          <h2>Case Study 2</h2>
          <img
            className="autoaccident-image"
            src={autoaccident}
            alt="construction"
          />
          <p>
            "Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do
          </p>
        </div>

        <div >
          <h2>Case Study 3</h2>

          <li>
          <Link to="/Form">
          <img
            className="wrongfuldeath-image"
            src={wrongfuldeath}
            alt="wrongfuldeath"
           />
          <p>
            "Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do
          </p></Link>
          </li>
        
        </div>
      </div>
    </div>
  );
}

export default OurResults;
