import React from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  const SubmitForm = async () => {
    let name = document.querySelector("[name='name']").value;
    let email = document.querySelector("[name='email']").value;
    let message = document.querySelector("[name='message']").value;
    const url =
      "https://e-commerce-5e3a0-default-rtdb.europe-west1.firebasedatabase.app/contacts/";
    let response = await fetch(url + ".json", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter message"
          name="message"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="I agree with the terms and conditions"
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(event) => SubmitForm()}>
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
