import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";

import Phone from "../../img/phone.png";
import Mail from "../../img/email.png";
import Address from "../../img/address.png";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9aukoq8",
        "template_xgp2bdt",
        formRef.current,
        "Rr1hzcFJQ0SgQGXd4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="c">
        <div className="c-bg" data-aos="fade-up"></div>
        <div className="c-wrapper">
          <div className="c-left" data-aos="fade-right">
            <h1 className="c-title">If you're interested to discuss</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                <p>+62 812-9354-6466</p>
              </div>
              <div className="c-info-item">
                <img src={Mail} alt="" className="c-icon" />
                <p>edricke75@gmail.com</p>
              </div>
              <div className="c-info-item">
                <img src={Address} alt="" className="c-icon" />
                <p>Blok D3B No.69 Medang Lestari, Tangerang, Banten</p>
              </div>
            </div>
          </div>
          <div className="c-right" data-aos="fade-right">
            <p className="c-desc">
              <b>I'm open to all kind of webdev related topics ?</b> If you have
              any kind of feedbacks, critics, job offer, or anything else, feel
              free to message me!
            </p>
            <form ref={formRef} onSubmit={submitHandler} autoComplete="off">
              <input
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "white",
                }}
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "white",
                }}
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <input
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "white",
                }}
                type="text"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "white",
                }}
                name="message"
                rows="5"
                placeholder="Message"
              />
              <button>Submit</button>
              {done && (
                <h4 className="c-reply">
                  Your message has been sent, thank you for contacting me :)
                </h4>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
