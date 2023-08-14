import React from "react";
import '../style/contact.css'
function Contact() {
  return (
    <div>
        <div className="contactImage">
            <img src="/images/contact.jpeg" alt=""  />
        </div>
        <form action="">
        <h1 className="text-center funda">Leave A Message</h1>
        <div className="message-underline"></div>
      <div className="container  shadow p-3 mb-5 bg-body-tertiary rounded p-5 bigContainer" style={{margin:'3em auto'}}>
        <div className="row justify-content-center ">
          <div className="col">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              required
            ></textarea>
          </div>
        </div>
        <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
          </div>
      </div>
      </form>
    </div>
  );
}

export default Contact;
