import React from "react";

function Contact() {
  return (
    <div id="contact">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h1 className="contact-title">Contact</h1>
            <p className="contact-description">
              Feel free to contact me.
            </p>
          </div>
          <div className="contact-form-container">
            <div className="contact-form">
              <div className="input-group">
                <label htmlFor="name" className="input-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <label htmlFor="email" className="input-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <label htmlFor="message" className="input-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea-field"
                />
              </div>
              <div className="submit-button-container">
                <button className="submit-button">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
