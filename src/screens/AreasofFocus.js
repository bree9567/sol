import "../styles/Areaoffocus.css";
import React from "react";
import constructioninjury from "../public/constructioninjury.jpg";
import autoaccident from "../public/autoaccident.jpg";
import wrongfuldeath from "../public/wrongfuldeath.jpg";
import { Link } from "react-router-dom";

function AreasofFocus() {
  return (
    <div>
      <div className="image-container">
        <div>
          <h2>Construction Injury Law</h2>
          <Link to="/Form">
            <img
              className="construction-image"
              src={constructioninjury}
              alt="construction"
            />
          </Link>
          <p>
            "Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do
          </p>
        </div>

        <div>
          <h2>Auto Accident Law</h2>
          <Link to="/Form">
            <img
              className="autoaccident-image"
              src={autoaccident}
              alt="autoaccident"
            />
          </Link>
          <p>
            "Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do
          </p>
        </div>

        <div>
          <h2>Wrongful Death</h2>
          <Link to="/Form">
            <img
              className="wrongfuldeath-image"
              src={wrongfuldeath}
              alt="wrongfuldeath"
            />
          </Link>
          <p>
            "Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do
          </p>
        </div>
      </div>
    </div>
  );
}

export default AreasofFocus;
