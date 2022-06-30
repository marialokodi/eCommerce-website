import React from "react";
import { Button } from "react-bootstrap";
import "./newsletter.css";

const Newsletter = () => {
  const SubmitNewsletter = async () => {
    let email = document.querySelector("[name='newsletter']").value;
    const url =
      "https://e-commerce-5e3a0-default-rtdb.europe-west1.firebasedatabase.app/newsletter/";
    let response = await fetch(url + ".json", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
    });
    document.querySelector("[name='newsletter']").value = "";
  };
  return (
    <div className="m-3 p-auto bg-light text-dark ">
      <div className="newsBox p-4 d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-uppercase ">Newsletter</h2>
        <p className="lead ">Get updates from your favorite products.</p>
        <div className="d-flex justify-content-between w-50">
          <input
            className="newsInput w-100 m-3"
            type="text"
            placeholder="E-mail..."
            name="newsletter"
          ></input>
          <Button
            onClick={(event) => SubmitNewsletter()}
            variant="outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
