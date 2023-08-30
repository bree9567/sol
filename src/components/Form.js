import "../styles/Form.css";
import long from "../public/long-image.webp";

function Form() {
  return (
    <div className="container">
      <div className="hero">
        <img className="images" src={long} alt="pictureoflawyers" />
      </div>
      <h1>Contact Us</h1>
      <form
        className="form"
        target="_blank"
        action="https://formsubmit.co/3d9a585efb74bb37f2b00636fc6ee5d7"
        method="POST"
      >
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="first_name"
              className="form-control"
              placeholder="First Name"
              required
              style={{
                borderColor: "black",
                borderStyle: "solid",
                borderWidth: 2,
              }}
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="last_name"
              className="form-control"
              placeholder="Last Name"
              required
              style={{
                borderColor: "black",
                borderStyle: "solid",
                borderWidth: 2,
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <input
              type="text"
              name="Phone"
              className="form-control"
              placeholder="Phone"
              required
              style={{
                borderColor: "black",
                borderStyle: "solid",
                borderWidth: 2,
              }}
            />
          </div>
          <div className="col">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              required
              style={{
                borderColor: "black",
                borderStyle: "solid",
                borderWidth: 2,
              }}
            />
          </div>
        </div>

        <div className="form-group">
          <textarea
            placeholder="Your Message"
            className="form-control"
            name="message"
            rows="10"
            cols="50"
            required
            style={{
              borderColor: "black",
              borderStyle: "solid",
              borderWidth: 2,
            }}
          ></textarea>
        </div>

        <button type="submit" className="btn ">
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default Form;
