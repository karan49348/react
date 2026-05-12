import React from "react";
import "./Contact.css";

const Contact = ({ contactData = {} }) => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1 className="title">Contact Me</h1>
        <p>Email: {contactData.email }</p>
        <p>Phone: {contactData.phone}</p>
        <p>Address: {contactData.address }</p>
      </div>
    </div>
  );
};

export default Contact;