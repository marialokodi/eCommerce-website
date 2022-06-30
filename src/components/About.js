import React from "react";
import ContactForm from "./ContactForm";

const About = () => {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Contact Us</h1>
          <hr />
        </div>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default About;
