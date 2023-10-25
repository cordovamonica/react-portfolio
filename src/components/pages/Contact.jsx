import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div>
        <h2 className="pages mx-3 mt-4">Get in Touch!</h2>
      </div>

      <div className="row g-3">
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3 mx-5 col-sm-5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-floating mb-3 mx-5 col-sm-5">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-floating mb-3 mx-5 col-sm-5">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-xl btn-outline-light mx-5 mt-2">
          Submit
        </button>
        </form>
      </div>
    </>
  );
}
