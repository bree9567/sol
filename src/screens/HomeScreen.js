
import Modal from "../components/Modal"; 

import "../styles/HomeScreen.css";

import courthouse from "../public/courthouse.jpg";
import award from "../public/automobileaccidentaward.png";
import Modal2 from "../components/Modal2"

const HomeScreen = () => {

  return (
    <div className="container">
      <img className="courthouseimage" src={courthouse} alt="ihg" />
      <div>
        <p className="header-text">
          Personal Injury Attorneys focused on Construction and Workplace
          injuries, as well as auto accidents.
        </p>
        <p className="subheadertext">
          Free Consultation to discuss your case, with no obligation
        </p>
        
        <div className="buttons">
          <Modal/>
          
          <Modal2/>
          <button className="WhatsApp-buttons">
            <text className="texts-WhatsApp">WhatsApp CTA</text>
          </button>
        </div>
      </div>

      <div className="imagecontainer">
        <div className="imgoneborder">
          <img src={award} alt="Dion the ge" className="imgone" />
        </div>

        <div className="imgtwoborder">
          <img className="imgtwo" src={award} alt="Desc" />
        </div>

        <div className="imgthreeborder">
          <img className="imgthree" src={award} alt="Desc" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
