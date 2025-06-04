import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import msg_icon from "../../assets/msg-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c6932e03-b663-44c8-942a-6e4c6e6e9dc8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h2>
          Send us a Message <img src={msg_icon} alt="" />
        </h2>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            Contact@gmail.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            +91 1234567890
          </li>

          <li>
            {" "}
            <img src={location_icon} alt="" />
            77, England
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label> Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label> Your Phone number</label>
          <input
            type="tel"
            name="phonenumber"
            placeholder="Enter your mobile number"
            required
          />
          <label> Your Email</label>
          <input
            type="email"
            name="email"
            placeholder=" Enter your email address"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="messages"
            rows="6"
            placeholder=" enter your message"
            required
          />
          <button type="submit" className="btn dark-btn">
            {" "}
            Submit Now
            <img src={white_arrow} alt=""/>
          </button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
