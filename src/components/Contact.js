import React from 'react';
import './Contact.css';

const ContactSection = () => {
  const handleSendEmail = () => {
    const subject = document.querySelector('.input-field[placeholder="Subject"]').value;
    const email = document.querySelector('.input-field[placeholder="Your Email Address"]').value;
    const body = document.querySelector('.message-body').value;
    const mailtoLink = `mailto:khushi.ma8599@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\n${body}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact-section">
      <h1 className="section-title">Contact Me</h1>
      <div className="contact-form">
        <div className="form-container">
          {/* Left Section: Message Body */}
          <div className="form-left">
            <input
              type="text"
              placeholder="Your Full Name"
              className="input-field"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input-field"
            />

          </div>

          {/* Right Section: Input Fields */}
          <div className="form-right">
            <textarea
              placeholder="Write your message here..."
              className="message-body"
              rows="8"
            ></textarea>
                        <button className="send-button" onClick={handleSendEmail}>
              Send
            </button>
            
            
            


          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;
